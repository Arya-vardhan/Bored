document.addEventListener('DOMContentLoaded', () => {
  // Global View Elements
  const caseSelectionView = document.getElementById('case-selection');
  const activeCaseView = document.getElementById('active-case-view');
  const folderGrid = document.getElementById('folder-grid');
  const backBtn = document.getElementById('back-btn');
  const nextCaseBtn = document.getElementById('next-case-btn');

  // Active Case Elements
  const titleEl = document.getElementById('case-title');
  const evidenceGrid = document.getElementById('evidence-grid');
  const viewFirBtn = document.getElementById('view-fir-btn');
  const closeFirBtn = document.getElementById('close-fir-btn');
  const firOverlay = document.getElementById('fir-overlay');
  const firNoEl = document.getElementById('fir-no');
  const firDateValEl = document.getElementById('fir-date-val');
  const firReportTextEl = document.getElementById('fir-report-text');
  const form = document.getElementById('solution-form');
  
  // Deduction Case Conclusion Filing Modal selectors
  const openDeductionBtn = document.getElementById('open-deduction-btn');
  const closeDeductionBtn = document.getElementById('close-deduction-btn');
  const deductionModal = document.getElementById('deduction-modal');
  
  const suspectSelect = document.getElementById('suspect-select');
  const methodSelect = document.getElementById('method-select');
  const motiveSelect = document.getElementById('motive-select');
  const selectedCluesPreview = document.getElementById('selected-clues-preview');
  const selectEvidenceTriggerBtn = document.getElementById('select-evidence-trigger-btn');

  // Floating Selection Dock selectors
  const evidenceSelectionDock = document.getElementById('evidence-selection-dock');
  const dockBadgeCount = document.getElementById('dock-badge-count');
  const confirmEvidenceBtn = document.getElementById('confirm-evidence-btn');

  // Detective Notebook Elements
  const detectiveNotebook = document.getElementById('detective-notebook');
  const notebookToggleBtn = document.getElementById('notebook-toggle-btn');
  const notebookSuspectsList = document.getElementById('notebook-suspects-list');
  const notebookTextarea = document.getElementById('notebook-textarea');

  // Detail Inspector Elements
  const inspectorModal = document.getElementById('inspector-modal');
  const closeInspectorBtn = document.getElementById('close-inspector-btn');
  const inspectorBaseLayer = document.getElementById('inspector-base-layer');
  const inspectorZoomLayer = document.getElementById('inspector-zoom-layer');
  const magnifyingLens = document.getElementById('magnifying-lens');
  const inspectorWorkspace = document.getElementById('inspector-workspace');

  // Lab Puzzle Elements
  const puzzleModal = document.getElementById('puzzle-modal');
  const closePuzzleBtn = document.getElementById('close-puzzle-btn');
  const puzzleTitle = document.getElementById('puzzle-title');
  const puzzleInstructions = document.getElementById('puzzle-instructions');
  const puzzleWorkspace = document.getElementById('puzzle-workspace');
  const puzzleStamp = document.getElementById('puzzle-stamp');

  const overlay = document.getElementById('solved-overlay');
  
  // Custom Modal Elements
  const feedbackModal = document.getElementById('feedback-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalActions = document.getElementById('modal-actions');
  
  let currentCaseData = null;
  let linkedEvidenceIds = []; // Track currently pinned evidence cards
  let activePuzzle = null;    // Track active puzzle instance for cleanup

  // Instantiate procedural synthesizer controllers
  const sfx = new SoundEffects();

  // Initialize
  renderCaseSelection();

  // --- View Management ---
  function getSolvedCases() {
    try {
      return JSON.parse(localStorage.getItem('solvedCases') || '[]');
    } catch {
      return [];
    }
  }

  function renderCaseSelection() {
    // Reset view
    document.title = "Bored?";
    caseSelectionView.classList.remove('hidden');
    activeCaseView.classList.add('hidden');
    folderGrid.innerHTML = '';
    
    // Clear active case
    currentCaseData = null;

    const solvedCases = getSolvedCases();

    allCases.forEach((c) => {
      const isSolved = solvedCases.includes(c.id);
      const folder = document.createElement('div');
      folder.className = 'folder-card';
      
      folder.innerHTML = `
        <h3>Case File</h3>
        <p><strong>Ref:</strong> ${c.id.toUpperCase()}</p>
        <p><strong>Subject:</strong> ${c.title}</p>
        <p><strong>Date:</strong> ${c.date}</p>
        ${isSolved ? '<div class="solved-stamp-folder">SOLVED</div>' : ''}
      `;

      folder.addEventListener('click', () => {
        sfx.playFolder();
        loadCase(c);
      });
      folderGrid.appendChild(folder);
    });
  }

  function loadCase(caseData) {
    currentCaseData = caseData;
    document.title = `Bored? - ${caseData.title}`;
    
    // Trigger notepad page flip tear transition
    const notebookPaper = detectiveNotebook ? detectiveNotebook.querySelector('.notebook-paper') : null;
    if (notebookPaper) {
      notebookPaper.classList.remove('page-turning');
      void notebookPaper.offsetWidth; // Force reflow
      notebookPaper.classList.add('page-turning');
    }
    
    // Switch views
    caseSelectionView.classList.add('hidden');
    activeCaseView.classList.remove('hidden');

    // Reset scroll and header visibility
    if (evidenceGrid) evidenceGrid.scrollTop = 0;
    const headerEl = document.querySelector('.header');
    if (headerEl) headerEl.classList.remove('header-hidden');

    // Populate header
    titleEl.textContent = caseData.title;

    // Populate F.I.R. Overlay Paper details
    if (firNoEl) firNoEl.textContent = `MPD-1987-${caseData.id.toUpperCase().replace('CASE-', '')}`;
    if (firDateValEl) firDateValEl.textContent = caseData.date.toUpperCase();
    if (firReportTextEl) firReportTextEl.textContent = caseData.fir;

    // Handle initial F.I.R. open state (auto-open if case is unsolved, else stay closed)
    const solvedCases = getSolvedCases();
    const isSolved = solvedCases.includes(caseData.id);
    if (!isSolved) {
      firOverlay.classList.remove('hidden');
      viewFirBtn.classList.remove('notify-glow');
    } else {
      firOverlay.classList.add('hidden');
      viewFirBtn.classList.add('notify-glow'); // Suggest opening F.I.R. even if solved
    }
    
    // Clear dynamic inputs and grid
    evidenceGrid.innerHTML = '<svg id="string-board"></svg>';
    
    // Populate dropdown selects
    suspectSelect.innerHTML = '<option value="" disabled selected>Select suspect...</option>';
    caseData.suspectOptions.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.label;
      suspectSelect.appendChild(option);
    });

    methodSelect.innerHTML = '<option value="" disabled selected>Select method...</option>';
    caseData.methodOptions.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.label;
      methodSelect.appendChild(option);
    });

    motiveSelect.innerHTML = '<option value="" disabled selected>Select motive...</option>';
    caseData.motiveOptions.forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.label;
      motiveSelect.appendChild(option);
    });

    // Reset linked evidence
    linkedEvidenceIds = [];
    updateLinkedCluesUI(caseData);

    // Reset disabled states
    suspectSelect.disabled = false;
    methodSelect.disabled = false;
    motiveSelect.disabled = false;
    document.getElementById('submit-btn').disabled = false;
    overlay.classList.add('hidden');
    feedbackModal.classList.add('hidden');
    if (deductionModal) deductionModal.classList.add('hidden');
    if (evidenceSelectionDock) evidenceSelectionDock.classList.add('hidden');

    // --- Initialize Detective Notebook for this Case ---
    if (detectiveNotebook) {
      detectiveNotebook.classList.add('closed');
    }
    
    if (notebookSuspectsList) {
      notebookSuspectsList.innerHTML = '';
      const eliminatedSuspects = JSON.parse(localStorage.getItem(`${caseData.id}-eliminated-suspects`) || '[]');
      
      caseData.suspectOptions.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'notebook-suspect-item';
        if (eliminatedSuspects.includes(opt.value)) {
          label.classList.add('eliminated');
          const stamp = document.createElement('div');
          stamp.className = 'notebook-stamp';
          stamp.textContent = 'RULED OUT';
          label.appendChild(stamp);
        }
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = opt.value;
        checkbox.checked = eliminatedSuspects.includes(opt.value);
        
        const span = document.createElement('span');
        span.textContent = opt.label;
        
        label.appendChild(checkbox);
        label.appendChild(span);
        
        checkbox.addEventListener('change', () => {
          sfx.playClick();
          
          let currentEliminated = JSON.parse(localStorage.getItem(`${caseData.id}-eliminated-suspects`) || '[]');
          if (checkbox.checked) {
            label.classList.add('eliminated');
            if (!currentEliminated.includes(opt.value)) {
              currentEliminated.push(opt.value);
            }
            if (!label.querySelector('.notebook-stamp')) {
              const stamp = document.createElement('div');
              stamp.className = 'notebook-stamp';
              stamp.textContent = 'RULED OUT';
              label.appendChild(stamp);
            }
          } else {
            label.classList.remove('eliminated');
            currentEliminated = currentEliminated.filter(val => val !== opt.value);
            const stamp = label.querySelector('.notebook-stamp');
            if (stamp) stamp.remove();
          }
          localStorage.setItem(`${caseData.id}-eliminated-suspects`, JSON.stringify(currentEliminated));
        });
        
        notebookSuspectsList.appendChild(label);
      });
    }
    
    if (notebookTextarea) {
      notebookTextarea.value = localStorage.getItem(`${caseData.id}-notes-text`) || '';
    }

    // Resume choices from localStorage
    const savedSuspect = localStorage.getItem(`${caseData.id}-suspect-select`);
    const savedMethod = localStorage.getItem(`${caseData.id}-method-select`);
    const savedMotive = localStorage.getItem(`${caseData.id}-motive-select`);
    if (savedSuspect) suspectSelect.value = savedSuspect;
    if (savedMethod) methodSelect.value = savedMethod;
    if (savedMotive) motiveSelect.value = savedMotive;

    suspectSelect.onchange = () => {
      sfx.playClick();
      if(currentCaseData) localStorage.setItem(`${currentCaseData.id}-suspect-select`, suspectSelect.value);
    };
    methodSelect.onchange = () => {
      sfx.playClick();
      if(currentCaseData) localStorage.setItem(`${currentCaseData.id}-method-select`, methodSelect.value);
    };
    motiveSelect.onchange = () => {
      sfx.playClick();
      if(currentCaseData) localStorage.setItem(`${currentCaseData.id}-motive-select`, motiveSelect.value);
    };

    // Render Witness Cards
    caseData.witnesses.forEach((witness, index) => {
      const card = document.createElement('div');
      card.className = 'card card-witness';
      card.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
      card.innerHTML = `
        <p>"${witness.statement}"</p>
        <h3>- ${witness.name}</h3>
      `;
      card.style.animationDelay = `${index * 0.15}s`;
      evidenceGrid.appendChild(card);
    });

    // Render Evidence Cards
    caseData.evidence.forEach((ev, index) => {
      const card = document.createElement('div');
      card.id = `card-${ev.id}`;
      card.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
      card.style.animationDelay = `${(caseData.witnesses.length + index) * 0.15}s`;

      const isPuzzleCard = !!ev.puzzle;
      const isSolved = localStorage.getItem(`${caseData.id}-puzzle-${ev.id}-solved`) === 'true' || 
                       localStorage.getItem(`${caseData.id}-puzzle-solved`) === 'true';

      let innerHTML = '';
      let cardText = ev.text;

      if (isPuzzleCard && !isSolved) {
        card.classList.add('card-locked-puzzle');
        // Custom puzzle text depending on puzzle type/ID if not solved
        if (ev.id === 'water') {
          cardText = "🔬 WATER SPECTROSCOPY ANALYSIS REQUIRED. Perform compositional wave alignment matching to verify the study floor water source.";
        } else if (ev.id === 'records' || ev.id === 'logs') {
          cardText = `🔓 ENCRYPTED TRANSMISSION / RECORD. Solve the alphabetical cipher shift to read the confidential file.`;
        } else if (ev.id === 'bank') {
          cardText = "🧩 BANK STATEMENT SHREDDED. Reconstruct the document columns to read the overdrawn Expedition Fund transfers.";
        }
      }

      if (ev.type === 'photo') {
        card.className = 'card card-evidence';
        card.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
        innerHTML = `
          <div class="polaroid-tape"></div>
          <div class="card-evidence-photo" style="background-image: url('${ev.image}')"></div>
          <p>${cardText}</p>
        `;
      } else if (ev.type === 'lab') {
        card.className = 'card card-lab';
        innerHTML = `
          <div class="card-lab-header">${ev.title || "LABORATORY REPORT"}</div>
          <p>${cardText}</p>
          <div class="card-lab-stamp ${isPuzzleCard && isSolved ? 'analyzed-stamp-badge' : ''}">${isPuzzleCard && isSolved ? 'ANALYZED' : 'VERIFIED'}</div>
        `;
      } else if (ev.type === 'document') {
        card.className = 'card card-document';
        innerHTML = `
          <h3>${ev.title}</h3>
          <p>${cardText}</p>
        `;
      }

      // Solved badge indicator
      if (isPuzzleCard && isSolved) {
        innerHTML += `<div class="solved-puzzle-badge">✓ ANALYZED</div>`;
      }

      // Dynamic buttons
      let actionButtons = '';
      if (isPuzzleCard && !isSolved) {
        const btnLabel = ev.puzzle.btnLabel || "🔬 ANALYZE";
        actionButtons = `<button type="button" class="card-analyze-btn glowing-btn" data-id="${ev.id}">${btnLabel}</button>`;
      } else {
        actionButtons = `<button type="button" class="card-link-btn" data-id="${ev.id}">📌 LINK CLUE</button>`;
        if (!isPuzzleCard && (ev.type === 'photo' || ev.type === 'document' || ev.type === 'lab')) {
          actionButtons += `<button type="button" class="card-inspect-btn" data-id="${ev.id}">🔍 INSPECT</button>`;
        }
      }

      innerHTML += actionButtons;
      card.innerHTML = innerHTML;

      // Click binders
      const linkBtn = card.querySelector('.card-link-btn');
      if (linkBtn) {
        linkBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleLinkClue(ev.id, card, caseData);
        });
      }

      const inspectBtn = card.querySelector('.card-inspect-btn');
      if (inspectBtn) {
        inspectBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openInspector(ev);
        });
      }

      const analyzeBtn = card.querySelector('.card-analyze-btn');
      if (analyzeBtn) {
        analyzeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openPuzzle(ev);
        });
      }

      evidenceGrid.appendChild(card);
    });

    checkFastForwardProgress();
  }

  function toggleLinkClue(evidenceId, cardElement, caseData) {
    sfx.playPin();
    const idx = linkedEvidenceIds.indexOf(evidenceId);
    if (idx !== -1) {
      // Unlink
      linkedEvidenceIds.splice(idx, 1);
      if (cardElement) {
        cardElement.classList.remove('card-linked');
        const linkBtn = cardElement.querySelector('.card-link-btn');
        if (linkBtn) {
          linkBtn.classList.remove('is-linked');
          linkBtn.textContent = "📌 LINK CLUE";
        }
      }
    } else {
      // Link
      if (linkedEvidenceIds.length >= 2) {
        // Swap oldest
        const oldestId = linkedEvidenceIds.shift();
        const oldestCard = document.getElementById(`card-${oldestId}`);
        if (oldestCard) {
          oldestCard.classList.remove('card-linked');
          const oldBtn = oldestCard.querySelector('.card-link-btn');
          if (oldBtn) {
            oldBtn.classList.remove('is-linked');
            oldBtn.textContent = "📌 LINK CLUE";
          }
        }
      }
      
      linkedEvidenceIds.push(evidenceId);
      if (cardElement) {
        cardElement.classList.add('card-linked');
        const linkBtn = cardElement.querySelector('.card-link-btn');
        if (linkBtn) {
          linkBtn.classList.add('is-linked');
          linkBtn.textContent = "📍 LINKED";
        }
      }
    }
    updateLinkedCluesUI(caseData);
  }

  function updateLinkedCluesUI(caseData) {
    // 1. Update Floating Selection Dock Badge Count
    if (dockBadgeCount) {
      dockBadgeCount.textContent = `${linkedEvidenceIds.length} / 2 CLUES LINKED`;
    }

    // 2. Update Selected Clues Preview Box inside Deduction Modal
    if (selectedCluesPreview) {
      selectedCluesPreview.innerHTML = '';
      if (linkedEvidenceIds.length === 0) {
        selectedCluesPreview.innerHTML = '<span style="color: #888; font-style: italic;">No evidence linked yet. Click "SELECT EVIDENCE FROM CORKBOARD" to pick clues.</span>';
      } else {
        caseData.evidence.forEach(ev => {
          if (linkedEvidenceIds.includes(ev.id)) {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-clue-item';
            const labelText = ev.title || ev.text.split('.')[0];
            previewItem.textContent = labelText;
            selectedCluesPreview.appendChild(previewItem);
          }
        });
      }
    }
    // 3. Render procedural Red String board
    drawActiveStrings();
  }

  function drawActiveStrings() {
    const activeStringBoard = document.getElementById('string-board');
    if (!activeStringBoard) return;
    
    // Clear previous elements
    activeStringBoard.innerHTML = '';
    
    // We only draw strings if exactly 2 evidence clues are linked
    if (linkedEvidenceIds.length !== 2) return;
    
    const id1 = linkedEvidenceIds[0];
    const id2 = linkedEvidenceIds[1];
    
    const el1 = document.getElementById(`card-${id1}`);
    const el2 = document.getElementById(`card-${id2}`);
    
    if (!el1 || !el2) return;
    
    // Compute scrollboard scale boundaries
    activeStringBoard.setAttribute('width', evidenceGrid.scrollWidth);
    activeStringBoard.setAttribute('height', evidenceGrid.scrollHeight);
    
    const boardRect = evidenceGrid.getBoundingClientRect();
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();
    
    // Thumbtack pin offsets relative to the scroll container's top-left coordinates
    const x1 = r1.left - boardRect.left + r1.width / 2 + evidenceGrid.scrollLeft;
    const y1 = r1.top - boardRect.top + 15 + evidenceGrid.scrollTop;
    
    const x2 = r2.left - boardRect.left + r2.width / 2 + evidenceGrid.scrollLeft;
    const y2 = r2.top - boardRect.top + 15 + evidenceGrid.scrollTop;
    
    // Gravity sag physics math depends on distance spacing
    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const sag = dist * 0.12 + 25;
    
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2 + sag;
    
    // Create path element
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('d', `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`);
    
    activeStringBoard.appendChild(path);
  }

  // Check if case is already solved on load
  function checkFastForwardProgress() {
    const solved = getSolvedCases();
    if (solved.includes(currentCaseData.id)) {
      showSuccess();
    }
  }

  // Detective Notebook Event Listeners
  if (notebookToggleBtn && detectiveNotebook) {
    notebookToggleBtn.addEventListener('click', () => {
      sfx.playFolder();
      detectiveNotebook.classList.toggle('closed');
    });
  }

  if (notebookTextarea) {
    notebookTextarea.addEventListener('keydown', () => {
      sfx.playClick();
    });

    notebookTextarea.addEventListener('input', () => {
      if (currentCaseData) {
        localStorage.setItem(`${currentCaseData.id}-notes-text`, notebookTextarea.value);
      }
    });
  }

  // Escape key close binders
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (detectiveNotebook && !detectiveNotebook.classList.contains('closed')) {
        sfx.playFolder();
        detectiveNotebook.classList.add('closed');
      }
    }
  });

  // F.I.R. Overlay Event Listeners
  if (viewFirBtn) {
    viewFirBtn.addEventListener('click', () => {
      sfx.playFolder();
      firOverlay.classList.remove('hidden');
      viewFirBtn.classList.remove('notify-glow');
    });
  }

  if (closeFirBtn) {
    closeFirBtn.addEventListener('click', () => {
      sfx.playFolder();
      firOverlay.classList.add('hidden');
    });
  }

  if (firOverlay) {
    firOverlay.addEventListener('click', (e) => {
      if (e.target === firOverlay) {
        sfx.playFolder();
        firOverlay.classList.add('hidden');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && firOverlay && !firOverlay.classList.contains('hidden')) {
      sfx.playFolder();
      firOverlay.classList.add('hidden');
    }
  });

  function resetSingleCase(caseId) {
    localStorage.removeItem(`${caseId}-eliminated-suspects`);
    localStorage.removeItem(`${caseId}-notes-text`);
    localStorage.removeItem(`${caseId}-suspect-select`);
    localStorage.removeItem(`${caseId}-method-select`);
    localStorage.removeItem(`${caseId}-motive-select`);
    localStorage.removeItem(`${caseId}-puzzle-solved`);
    
    // Clear individual puzzle states too
    const c = allCases.find(cs => cs.id === caseId);
    if (c) {
      c.evidence.forEach(ev => {
        localStorage.removeItem(`${caseId}-puzzle-${ev.id}-solved`);
      });
    }
    
    try {
      let solved = JSON.parse(localStorage.getItem('solvedCases') || '[]');
      solved = solved.filter(id => id !== caseId);
      localStorage.setItem('solvedCases', JSON.stringify(solved));
    } catch (e) {
      console.error(e);
    }
  }

  function resetAllCases() {
    allCases.forEach(c => {
      resetSingleCase(c.id);
    });
    localStorage.removeItem('solvedCases');
  }

  // Back button functionality
  backBtn.addEventListener('click', () => {
    sfx.playFolder();
    renderCaseSelection();
  });

  // Reset case and reset all event listeners
  const resetAllBtn = document.getElementById('reset-all-btn');
  if (resetAllBtn) {
    resetAllBtn.addEventListener('click', () => {
      sfx.playClick();
      showFeedbackModal(
        "CONFIRM SYSTEM WIPE",
        "Are you sure you want to reset all confidential case files? This will clear all notes, solved states, and puzzle progress across the entire system. This action cannot be undone.",
        [
          {
            text: "WIPE ALL CACHE",
            onClick: () => {
              resetAllCases();
              renderCaseSelection();
            }
          },
          {
            text: "CANCEL",
            class: "secondary-btn"
          }
        ]
      );
    });
  }

  const resetCaseBtn = document.getElementById('reset-case-btn');
  if (resetCaseBtn) {
    resetCaseBtn.addEventListener('click', () => {
      sfx.playClick();
      if (currentCaseData) {
        showFeedbackModal(
          "RESET CASE FILE",
          `Are you sure you want to reset the case <strong>${currentCaseData.title}</strong>? This will wipe your notes, linked clues, and solved status for this case file only.`,
          [
            {
              text: "CONFIRM RESET",
              onClick: () => {
                resetSingleCase(currentCaseData.id);
                loadCase(currentCaseData);
              }
            },
            {
              text: "CANCEL",
              class: "secondary-btn"
            }
          ]
        );
      }
    });
  }

  // Case Conclusion Modal filing triggers
  if (openDeductionBtn) {
    openDeductionBtn.addEventListener('click', () => {
      sfx.playClick();
      deductionModal.classList.remove('hidden');
    });
  }

  if (closeDeductionBtn) {
    closeDeductionBtn.addEventListener('click', () => {
      sfx.playClick();
      deductionModal.classList.add('hidden');
    });
  }

  if (deductionModal) {
    deductionModal.addEventListener('click', (e) => {
      if (e.target === deductionModal) {
        sfx.playClick();
        deductionModal.classList.add('hidden');
      }
    });
  }

  // Handle ESC inside deduction modal keypress
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && deductionModal && !deductionModal.classList.contains('hidden')) {
      sfx.playClick();
      deductionModal.classList.add('hidden');
    }
  });

  // Toggle Selection Mode between Deduction Modal and Floating Selection Dock
  if (selectEvidenceTriggerBtn) {
    selectEvidenceTriggerBtn.addEventListener('click', () => {
      sfx.playClick();
      deductionModal.classList.add('hidden');
      evidenceSelectionDock.classList.remove('hidden');
    });
  }

  if (confirmEvidenceBtn) {
    confirmEvidenceBtn.addEventListener('click', () => {
      sfx.playClick();
      evidenceSelectionDock.classList.add('hidden');
      deductionModal.classList.remove('hidden');
      if (currentCaseData) updateLinkedCluesUI(currentCaseData);
    });
  }

  // Handle ESC inside selection dock keypress (simulate confirm to return to modal)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && evidenceSelectionDock && !evidenceSelectionDock.classList.contains('hidden')) {
      confirmEvidenceBtn.click();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sfx.playClick();
    if (!currentCaseData) return;
    
    const suspectVal = suspectSelect.value;
    const methodVal = methodSelect.value;
    const motiveVal = motiveSelect.value;
    
    if (linkedEvidenceIds.length < 2) {
      deductionModal.classList.add('hidden');
      showFeedbackModal(
        "INSUFFICIENT EVIDENCE",
        "You must link exactly 2 physical evidence cards from the corkboard to back up your deduction. Click '📌 LINK CLUE' on cards to pin them.",
        [{ text: "DISMISS", class: "secondary-btn" }]
      );
      return;
    }

    const userChoices = { suspect: suspectVal, method: methodVal, motive: motiveVal };
    const { isAllCorrect, feedbackMsg } = verifyDeduction(currentCaseData, userChoices, linkedEvidenceIds);

    if (isAllCorrect) {
      // Success Logic
      const solved = getSolvedCases();
      if (!solved.includes(currentCaseData.id)) {
        solved.push(currentCaseData.id);
        localStorage.setItem('solvedCases', JSON.stringify(solved));
      }
      showSuccess();
    } else {
      // Failure Logic (Custom Dynamic Feedback Modal)
      document.body.classList.remove('error-flash');
      void document.body.offsetWidth; // Force reflow
      document.body.classList.add('error-flash');
      
      showFeedbackModal(
        "CONCLUSION REJECTED", 
        feedbackMsg + "<br>Re-examine the testimonies, official F.I.R., and inspect all evidence cards carefully.",
        [{ text: "RE-THINK", class: "secondary-btn" }]
      );
    }
  });

  // Modal helper
  function showFeedbackModal(title, body, buttons) {
    modalTitle.textContent = title;
    modalBody.innerHTML = body;
    modalActions.innerHTML = '';
    
    buttons.forEach(btnInfo => {
      const btn = document.createElement('button');
      btn.className = `submit-btn ${btnInfo.class || ''}`;
      btn.textContent = btnInfo.text;
      btn.addEventListener('click', () => {
        sfx.playClick();
        if (btnInfo.onClick) btnInfo.onClick();
        if (btnInfo.close !== false) feedbackModal.classList.add('hidden');
      });
      modalActions.appendChild(btn);
    });
    
    feedbackModal.classList.remove('hidden');
  }

  function showSuccess() {
    feedbackModal.classList.add('hidden');
    if (deductionModal) deductionModal.classList.add('hidden');
    if (evidenceSelectionDock) evidenceSelectionDock.classList.add('hidden');
    
    // Inject final narrative and motive text
    const storyContainer = document.getElementById('solved-story-container');
    storyContainer.innerHTML = `
      <p style="margin-bottom: 1.5rem;"><strong>THE DEDUCTION:</strong><br>${currentCaseData.solution.narrative}</p>
      <p><strong>THE MOTIVE:</strong><br>${currentCaseData.solution.motiveText}</p>
    `;

    overlay.classList.remove('hidden');
    suspectSelect.disabled = true;
    methodSelect.disabled = true;
    motiveSelect.disabled = true;
    document.getElementById('submit-btn').disabled = true;
  }

  // Dismiss success overlay and return to files
  nextCaseBtn.addEventListener('click', () => {
    sfx.playClick();
    overlay.classList.add('hidden');
    renderCaseSelection();
  });

  const solvedResetCaseBtn = document.getElementById('solved-reset-case-btn');
  if (solvedResetCaseBtn) {
    solvedResetCaseBtn.addEventListener('click', () => {
      sfx.playClick();
      if (currentCaseData) {
        // Hide solved overlay temporarily to avoid overlay stack overlap/z-index issues
        overlay.classList.add('hidden');
        
        showFeedbackModal(
          "RESET CASE FILE",
          `Are you sure you want to reset the case <strong>${currentCaseData.title}</strong>? This will wipe your notes, linked clues, and solved status for this case file only.`,
          [
            {
              text: "CONFIRM RESET",
              onClick: () => {
                resetSingleCase(currentCaseData.id);
                loadCase(currentCaseData);
              }
            },
            {
              text: "CANCEL",
              class: "secondary-btn",
              onClick: () => {
                // Restore solved success overlay if canceled
                showSuccess();
              }
            }
          ]
        );
      }
    });
  }

  // ==========================================================================
  // DETAIL INSPECTOR SYSTEM
  // ==========================================================================
  
  function openInspector(evidence) {
    sfx.playFolder();
    inspectorModal.classList.remove('hidden');
    
    // Clear layers
    inspectorBaseLayer.innerHTML = '';
    inspectorZoomLayer.innerHTML = '';
    
    // Initial Lens position
    magnifyingLens.style.left = '50%';
    magnifyingLens.style.top = '50%';
    inspectorZoomLayer.style.left = '-170px';
    inspectorZoomLayer.style.top = '-125px';

    let innerHTML = '';
    let zoomHTML = '';
    
    // Get hidden clue configurations from case data
    const clueText = evidence.inspector ? evidence.inspector.clueText : '';
    const clueStyle = evidence.inspector ? evidence.inspector.clueStyle : '';
    const hiddenClueTag = clueText ? `<div class="hidden-clue" style="${clueStyle}">${clueText}</div>` : '';

    if (evidence.type === 'photo') {
      innerHTML = `
        <div class="card-evidence-photo" style="background-image: url('${evidence.image}')"></div>
        <p>${evidence.text}</p>
      `;
      zoomHTML = `
        <div class="card-evidence-photo" style="background-image: url('${evidence.image}')"></div>
        <p>${evidence.text}</p>
        ${hiddenClueTag}
      `;
    } else if (evidence.type === 'lab') {
      innerHTML = `
        <div class="card-lab-header">${evidence.title || "LAB REPORT"}</div>
        <p>${evidence.text}</p>
      `;
      zoomHTML = `
        <div class="card-lab-header">${evidence.title || "LAB REPORT"}</div>
        <p>${evidence.text}</p>
        ${hiddenClueTag}
      `;
    } else if (evidence.type === 'document') {
      innerHTML = `
        <h3>${evidence.title}</h3>
        <p>${evidence.text}</p>
      `;
      zoomHTML = `
        <h3>${evidence.title}</h3>
        <p>${evidence.text}</p>
        ${hiddenClueTag}
      `;
    }

    inspectorBaseLayer.className = `inspector-card-layer base-gray card-${evidence.type}`;
    inspectorBaseLayer.innerHTML = innerHTML;
    
    inspectorZoomLayer.className = `inspector-card-layer zoom-sepia card-${evidence.type}`;
    inspectorZoomLayer.innerHTML = zoomHTML;
  }

  if (closeInspectorBtn) {
    closeInspectorBtn.addEventListener('click', () => {
      sfx.playFolder();
      inspectorModal.classList.add('hidden');
    });
  }

  inspectorModal.addEventListener('click', (e) => {
    if (e.target === inspectorModal) {
      sfx.playFolder();
      inspectorModal.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !inspectorModal.classList.contains('hidden')) {
      sfx.playFolder();
      inspectorModal.classList.add('hidden');
    }
  });

  // Circular brass lens track math
  if (inspectorWorkspace && magnifyingLens && inspectorZoomLayer) {
    const handleLensMove = (clientX, clientY) => {
      const rect = inspectorWorkspace.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Clamp coordinates to keep the lens within the workspace boundaries
      const boundedX = Math.max(0, Math.min(rect.width, x));
      const boundedY = Math.max(0, Math.min(rect.height, y));
      
      magnifyingLens.style.left = `${boundedX}px`;
      magnifyingLens.style.top = `${boundedY}px`;
      
      const rx = boundedX - inspectorBaseLayer.offsetLeft;
      const ry = boundedY - inspectorBaseLayer.offsetTop;
      
      const zoomLeft = -rx * 2 + 80;
      const zoomTop = -ry * 2 + 80;
      
      inspectorZoomLayer.style.left = `${zoomLeft}px`;
      inspectorZoomLayer.style.top = `${zoomTop}px`;
    };

    inspectorWorkspace.addEventListener('mousemove', (e) => {
      handleLensMove(e.clientX, e.clientY);
    });

    inspectorWorkspace.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        e.preventDefault(); // Stop window bouncing or scrolling while examining evidence
        handleLensMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: false });

    inspectorWorkspace.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        handleLensMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    });
  }

  // ==========================================================================
  // LABORATORY PUZZLES SYSTEM
  // ==========================================================================
  
  function openPuzzle(evidence) {
    sfx.playFolder();
    puzzleModal.classList.remove('hidden');
    puzzleStamp.classList.add('hidden');
    puzzleWorkspace.innerHTML = '';
    
    const puzzleInfo = evidence.puzzle;
    if (!puzzleInfo) return;

    puzzleTitle.textContent = puzzleInfo.title || "🔬 LAB WORKSTATION";
    puzzleInstructions.textContent = puzzleInfo.instructions || "Perform advanced analytics to verify evidence parameters.";

    // Clean up any previously running puzzle
    if (activePuzzle && typeof activePuzzle.cleanup === 'function') {
      activePuzzle.cleanup();
    }

    const onSolved = () => triggerPuzzleSolved(evidence.id, puzzleInfo.stampText || 'VERIFIED');

    if (puzzleInfo.type === 'oscilloscope') {
      activePuzzle = loadOscilloscopePuzzle(puzzleWorkspace, puzzleInfo.config, onSolved, sfx);
    } else if (puzzleInfo.type === 'cipher') {
      activePuzzle = loadCipherPuzzle(puzzleWorkspace, puzzleInfo.config, onSolved, sfx);
    } else if (puzzleInfo.type === 'shredder') {
      activePuzzle = loadShredderPuzzle(puzzleWorkspace, puzzleInfo.config, onSolved, sfx);
    }
  }

  function triggerPuzzleSolved(evidenceId, stampText) {
    sfx.playPin();
    puzzleStamp.textContent = stampText;
    puzzleStamp.classList.remove('hidden');
    
    if (currentCaseData) {
      localStorage.setItem(`${currentCaseData.id}-puzzle-${evidenceId}-solved`, 'true');
      // Set general compatibility key
      localStorage.setItem(`${currentCaseData.id}-puzzle-solved`, 'true');
    }
    
    setTimeout(() => {
      sfx.playFolder();
      if (activePuzzle && typeof activePuzzle.cleanup === 'function') {
        activePuzzle.cleanup();
        activePuzzle = null;
      }
      puzzleModal.classList.add('hidden');
      if (currentCaseData) {
        loadCase(currentCaseData);
      }
    }, 1600);
  }

  if (closePuzzleBtn) {
    closePuzzleBtn.addEventListener('click', () => {
      sfx.playFolder();
      if (activePuzzle && typeof activePuzzle.cleanup === 'function') {
        activePuzzle.cleanup();
        activePuzzle = null;
      }
      puzzleModal.classList.add('hidden');
    });
  }

  puzzleModal.addEventListener('click', (e) => {
    if (e.target === puzzleModal) {
      sfx.playFolder();
      if (activePuzzle && typeof activePuzzle.cleanup === 'function') {
        activePuzzle.cleanup();
        activePuzzle = null;
      }
      puzzleModal.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !puzzleModal.classList.contains('hidden')) {
      sfx.playFolder();
      if (activePuzzle && typeof activePuzzle.cleanup === 'function') {
        activePuzzle.cleanup();
        activePuzzle = null;
      }
      puzzleModal.classList.add('hidden');
    }
  });

  // Auto-hide header on scroll down, show on scroll up
  let lastScrollTop = 0;
  const headerEl = document.querySelector('.header');
  if (evidenceGrid && headerEl) {
    evidenceGrid.addEventListener('scroll', () => {
      const scrollTop = evidenceGrid.scrollTop;
      if (scrollTop <= 40) {
        headerEl.classList.remove('header-hidden');
      } else if (scrollTop > lastScrollTop) {
        headerEl.classList.add('header-hidden');
      } else {
        headerEl.classList.remove('header-hidden');
      }
      lastScrollTop = scrollTop;
    });
  }

  // Redraw strings on window resize to match layout updates
  window.addEventListener('resize', () => {
    if (currentCaseData) drawActiveStrings();
  });
});
