// Multi-case data
const allCases = [
  {
    id: "case-001",
    title: "The Locked Room Enigma",
    date: "October 24, 1987",
    fir: "Incident: Grand Larceny. Property: 'The Eye of Leviathan', a rare sapphire worth £2.5M. The display room was found secured from the inside with a brass deadbolt engaged. No signs of forced entry. The only ventilation is a small barred window. Strangely, the room's temperature was remarkably cold, despite the central heating running on high for hours.",
    suspectOptions: [
      { value: "arthur", label: "Arthur Harrington (Nephew)" },
      { value: "higgins", label: "Mrs. Higgins (Maid)" },
      { value: "clark", label: "Mr. Clark (Neighbor)" },
      { value: "harrington", label: "Lord Harrington" }
    ],
    methodOptions: [
      { value: "ice_thread", label: "Locked deadbolt from outside using thread, using a block of ice to wash away friction traces" },
      { value: "window_climb", label: "Climbed through the narrow window bars to slip in and grab the gem" },
      { value: "key_bribe", label: "Bribed Mrs. Higgins to lock the door from the inside and hide in the closet" }
    ],
    motiveOptions: [
      { value: "gambling_debts", label: "Drowning in severe gambling debts to a local harbor syndicate" },
      { value: "estate_inheritance", label: "Framing Lord Harrington to claim the estate inheritance early" },
      { value: "museum_donation", label: "Donate the sapphire anonymously to clear his heavy guilt" }
    ],
    witnesses: [
      { name: "Maid (Mrs. Higgins)", statement: "I heard a loud thud from the study right around 8:00 PM. It sounded almost like a heavy block cracking on the hardwood floor." },
      { name: "Nephew (Arthur)", statement: "I left the house at 7:30 PM for a drink at the docks. The heavy oak door was perfectly fine when I left. No one else was inside." },
      { name: "Neighbor (Mr. Clark)", statement: "I was having a smoke outside. I saw someone pulling a thick string out from beneath the gap of the study window around 8:15 PM, but it was too dark to see a face." },
      { name: "Lord Harrington", statement: "Arthur is the only other person who knew the safe's combination. His extensive gambling debts to the harbor syndicate are due on Friday... I fear the absolute worst." }
    ],
    evidence: [
      { id: "thread", type: "photo", text: "Sturdy white thread caught in the internal window latch.", image: "assets/thread.png" },
      { id: "ice", type: "photo", text: "A pool of water and a melting block of ice near the door mechanism.", image: "assets/ice.png" },
      { id: "receipt", type: "photo", text: "A receipt for a 50lb block of ice found in Arthur's coat pocket.", image: "assets/receipt.png" },
      { id: "water", type: "lab", title: "WATER ANALYSIS", text: "The water sample from the study floor contains high traces of brackish river silt and fish scales, matching the commercial ice sold at the local harbor docks where Arthur works." },
      { id: "insurance", type: "document", title: "INSURANCE AMENDMENT", text: "Policy No. 8832 on 'The Eye of Leviathan'. Beneficiary recently updated to Arthur Harrington. The amendment is dated exactly three days prior to the incident." },
      { id: "deadbolt", type: "document", title: "POLICE OBSERVATION", text: "The door's internal deadbolt lever operates smoothly. A loop of thread could easily be placed around it and pulled from the outside to engage the lock, provided the thread was guided under the window frame." },
      { id: "ledger", type: "document", title: "SYNDICATE LEDGER", text: "A recovered loan shark ledger reveals Arthur owes £50,000 to the local docks syndicate. Marked 'Pay or Swim'." }
    ],
    solution: {
      suspect: "arthur",
      method: "ice_thread",
      motive: "gambling_debts",
      evidence: ["thread", "receipt", "water", "ledger"],
      narrative: "Arthur used a long loop of sturdy thread to pull the internal deadbolt closed from the outside, running it underneath the window gap before pulling it free. He placed the heavy block of ice near the door mechanism to slowly melt over time, creating a pool of water to mimic a structural leak and wash away traces of the thread's intense friction.",
      motiveText: "Arthur was drowning in severe gambling debts to a local harbor crime syndicate. Being the newly added beneficiary, he needed to steal the gemstone to pay off his illicit debts immediately before the syndicate made good on lethal threats."
    }
  },
  {
    id: "case-002",
    title: "The Poisoned Pen",
    date: "November 12, 1987",
    fir: "Incident: Murder. Victim: Percival Blackwood, a wealthy author. Found dead at his mahogany desk. Cause of death determined to be a fast-acting poison absorbed through the skin. A half-sealed letter was found on his desk addressed to his publisher.",
    suspectOptions: [
      { value: "elias", label: "Elias Thorne (Rival Author)" },
      { value: "jeeves", label: "Jeeves (Butler)" },
      { value: "publisher", label: "The Publisher" }
    ],
    methodOptions: [
      { value: "wax_poison", label: "Sent a poisoned block of sealing wax that activated and released toxin when melted and touched" },
      { value: "ink_poison", label: "Injected contact poison directly into the author's custom inkwell bottle" },
      { value: "envelope_blade", label: "Coated the envelope's glue seal with a razor-thin abrasive toxin" }
    ],
    motiveOptions: [
      { value: "plagiarism_suit", label: "Prevent a career-ending plagiarism lawsuit Percival was about to file against him" },
      { value: "book_deal", label: "Steal the unpublished manuscript to sell it under his own name" },
      { value: "inheritance", label: "Inherit the publishing house shares promised to Elias in a secret codicil" }
    ],
    witnesses: [
      { name: "Rival Author (Elias)", statement: "I hated his guts, sure. Everyone says he stole my ideas for his latest bestseller. But I was at the pub all evening. Ask anyone." },
      { name: "Butler (Jeeves)", statement: "Master Percival was furious earlier. He received a special delivery of artisanal sealing wax from an anonymous fan. He insisted on using it for his new manuscript." },
      { name: "Publisher", statement: "Percival called me in a panic yesterday, saying he finally gathered undeniable proof that Elias was heavily plagiarizing him, and he was sending me the proof via mail today." }
    ],
    evidence: [
      { id: "envelope", type: "photo", text: "An elegant vintage envelope with a partially melted red wax seal on the mahogany desk.", image: "assets/letter.png" },
      { id: "inkwell", type: "photo", text: "A beautiful ornate glass inkwell tipped over, black ink pooling around it.", image: "assets/ink.png" },
      { id: "toxicology", type: "lab", title: "TOXICOLOGY REPORT", text: "Traces of a rare, lethal contact poison, 'Cyanogen-X', detected. The poison is inert when dry but extremely lethal when heated and touched." },
      { id: "wax_analysis", type: "lab", title: "MATERIAL ANALYSIS", text: "The red sealing wax found on the envelope contains very high concentrations of Cyanogen-X. The ink in the tipped bottle is standard non-toxic India ink." },
      { id: "records", type: "document", title: "FINANCIAL RECORDS", text: "Elias recently purchased 'rare botanical extracts' from a questionable overseas vendor known for supplying illicit toxic substances." },
      { id: "lawsuit", type: "document", title: "LAWSUIT THREAT", text: "A drafted letter of litigation found in Percival's drawer, preparing a career-ending plagiarism lawsuit against Elias." }
    ],
    solution: {
      suspect: "elias",
      method: "wax_poison",
      motive: "plagiarism_suit",
      evidence: ["envelope", "toxicology", "wax_analysis", "records"],
      narrative: "Elias purchased the illegal toxin and sent a poisoned block of artisanal sealing wax as an anonymous fan gift to Percival. When Percival happily melted the wax to seal his letter to the publisher, the intense heat activated the Cyanogen-X, turning it into a lethal contact poison that killed him instantly.",
      motiveText: "Deep resentment and professional ruin. Elias knew Percival had gathered the proof needed to file a career-ending plagiarism lawsuit against him. Eliminating his wildly successful rival was his twisted path to silencing the truth."
    }
  },
  {
    id: "case-003",
    title: "The Midnight Phantom",
    date: "December 05, 1987",
    fir: "Incident: Art Theft. Missing: 'The Weeping Madonna' original 16th-century painting. The museum experienced a sudden, 60-second power outage. When backup generators kicked in, the painting had been replaced by a cheap replica. The security guard was found knocked unconscious.",
    suspectOptions: [
      { value: "vance", label: "Ms. Vance (Curator)" },
      { value: "boris", label: "Boris (Janitor)" },
      { value: "guard", label: "Security Guard" }
    ],
    methodOptions: [
      { value: "glow_paint", label: "Orchestrated power outage and used glow-in-the-dark paint on replica frame to execute swap in pitch black" },
      { value: "guard_accomplice", label: "Paid the guard to lock himself in a closet and turn off the security backup system" },
      { value: "skylight_entry", label: "Lowered from the skylight using military harnesses and night-vision goggles" }
    ],
    motiveOptions: [
      { value: "expedition_fund", label: "Finance a bankrupt private archaeological expedition using black market art sale funds" },
      { value: "blackmail", label: "Ransom the original painting to clear anonymous blackmail threats she was facing" },
      { value: "janitor_frame", label: "Humiliate Boris and get him fired by framing him as a sloppy thief" }
    ],
    witnesses: [
      { name: "Security Guard", statement: "The lights went out, I heard running footsteps, then something heavy hit me on the back of the head. I didn't see anything." },
      { name: "Janitor (Boris)", statement: "I was cleaning the east wing. I didn't have a flashlight. I just stayed still until the lights came back on." },
      { name: "Curator (Ms. Vance)", statement: "I was in my private office reading. Boris is incredibly clumsy, I've caught him admiring the priceless painting far too often." }
    ],
    evidence: [
      { id: "shoes", type: "photo", text: "Expensive Oxford dress shoes caked in wet mud and dried leaves.", image: "assets/shoes.png" },
      { id: "flashlight", type: "photo", text: "A heavy metallic flashlight rolling on the museum floor, bulb still faintly glowing.", image: "assets/flashlight.png" },
      { id: "forensic", type: "lab", title: "FORENSIC ANALYSIS", text: "The flashlight casing has traces of hair and blood matching the security guard. It was clearly the weapon used to knock him out." },
      { id: "logs", type: "document", title: "MUSEUM LOGS", text: "Boris is required to wear standard issued rubber-soled work boots to avoid slipping. Ms. Vance recently returned from an outdoor expedition and was wearing high-end Oxford shoes today." },
      { id: "replica", type: "document", title: "REPLICA EXAMINATION", text: "The fake painting has faint traces of glow-in-the-dark paint around the edges, suggesting someone needed to see the edges of the frame specifically in the pitch black." },
      { id: "bank", type: "document", title: "BANK STATEMENT", text: "Ms. Vance's personal accounts are severely overdrawn, transferring millions into an offshore 'Expedition Fund' over the last six months." }
    ],
    solution: {
      suspect: "vance",
      method: "glow_paint",
      motive: "expedition_fund",
      evidence: ["shoes", "logs", "replica", "bank"],
      narrative: "Ms. Vance orchestrated the power outage to execute the heist in pitch black. She utilized glow-in-the-dark paint strictly on the inside frame of the replica painting to swap them correctly without turning on a light. During the swap, she used her heavy metallic flashlight to bludgeon the guard. Her footprint mud matches her high-end oxfords.",
      motiveText: "Ms. Vance's obsession with a deeply restricted and expensive archaeological expedition left her utterly bankrupt. She needed the illicit funds from selling her museum's very own masterpiece on the black market to finance her private obsessions."
    }
  }
];

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

  const overlay = document.getElementById('solved-overlay');
  
  // Custom Modal Elements
  const feedbackModal = document.getElementById('feedback-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalActions = document.getElementById('modal-actions');
  
  let currentCaseData = null;
  let linkedEvidenceIds = []; // Track currently pinned evidence cards

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

      folder.addEventListener('click', () => loadCase(c));
      folderGrid.appendChild(folder);
    });
  }

  function loadCase(caseData) {
    currentCaseData = caseData;
    document.title = `Bored? - ${caseData.title}`;
    
    // Switch views
    caseSelectionView.classList.add('hidden');
    activeCaseView.classList.remove('hidden');

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
    evidenceGrid.innerHTML = '';
    
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

    // Resume choices from localStorage
    const savedSuspect = localStorage.getItem(`${caseData.id}-suspect-select`);
    const savedMethod = localStorage.getItem(`${caseData.id}-method-select`);
    const savedMotive = localStorage.getItem(`${caseData.id}-motive-select`);
    if (savedSuspect) suspectSelect.value = savedSuspect;
    if (savedMethod) methodSelect.value = savedMethod;
    if (savedMotive) motiveSelect.value = savedMotive;

    // Track input choices on change
    suspectSelect.onchange = () => {
      if(currentCaseData) localStorage.setItem(`${currentCaseData.id}-suspect-select`, suspectSelect.value);
    };
    methodSelect.onchange = () => {
      if(currentCaseData) localStorage.setItem(`${currentCaseData.id}-method-select`, methodSelect.value);
    };
    motiveSelect.onchange = () => {
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

      let innerHTML = '';
      if (ev.type === 'photo') {
        card.className = 'card card-evidence';
        card.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
        innerHTML = `
          <div class="polaroid-tape"></div>
          <div class="card-evidence-photo" style="background-image: url('${ev.image}')"></div>
          <p>${ev.text}</p>
        `;
      } else if (ev.type === 'lab') {
        card.className = 'card card-lab';
        innerHTML = `
          <div class="card-lab-header">${ev.title || "LABORATORY REPORT"}</div>
          <p>${ev.text}</p>
          <div class="card-lab-stamp">VERIFIED</div>
        `;
      } else if (ev.type === 'document') {
        card.className = 'card card-document';
        innerHTML = `
          <h3>${ev.title}</h3>
          <p>${ev.text}</p>
        `;
      }

      // Add dynamic link button
      innerHTML += `<button type="button" class="card-link-btn" data-id="${ev.id}">📌 LINK CLUE</button>`;
      card.innerHTML = innerHTML;

      // Event listener for linking
      const linkBtn = card.querySelector('.card-link-btn');
      linkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLinkClue(ev.id, card, caseData);
      });

      evidenceGrid.appendChild(card);
    });

    checkFastForwardProgress();
  }

  function toggleLinkClue(evidenceId, cardElement, caseData) {
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
            // Use title or truncated snippet
            const labelText = ev.title || ev.text.split('.')[0];
            previewItem.textContent = labelText;
            selectedCluesPreview.appendChild(previewItem);
          }
        });
      }
    }
  }

  // Check if case is already solved on load
  function checkFastForwardProgress() {
    const solved = getSolvedCases();
    if (solved.includes(currentCaseData.id)) {
      showSuccess();
    }
  }

  // F.I.R. Overlay Event Listeners
  if (viewFirBtn) {
    viewFirBtn.addEventListener('click', () => {
      firOverlay.classList.remove('hidden');
      viewFirBtn.classList.remove('notify-glow');
    });
  }

  if (closeFirBtn) {
    closeFirBtn.addEventListener('click', () => {
      firOverlay.classList.add('hidden');
    });
  }

  if (firOverlay) {
    firOverlay.addEventListener('click', (e) => {
      if (e.target === firOverlay) {
        firOverlay.classList.add('hidden');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && firOverlay && !firOverlay.classList.contains('hidden')) {
      firOverlay.classList.add('hidden');
    }
  });

  // Back button functionality
  backBtn.addEventListener('click', () => {
    renderCaseSelection();
  });

  // Case Conclusion Modal filing triggers
  if (openDeductionBtn) {
    openDeductionBtn.addEventListener('click', () => {
      deductionModal.classList.remove('hidden');
    });
  }

  if (closeDeductionBtn) {
    closeDeductionBtn.addEventListener('click', () => {
      deductionModal.classList.add('hidden');
    });
  }

  if (deductionModal) {
    deductionModal.addEventListener('click', (e) => {
      if (e.target === deductionModal) {
        deductionModal.classList.add('hidden');
      }
    });
  }

  // Handle ESC inside deduction modal keypress
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && deductionModal && !deductionModal.classList.contains('hidden')) {
      deductionModal.classList.add('hidden');
    }
  });

  // Toggle Selection Mode between Deduction Modal and Floating Selection Dock
  if (selectEvidenceTriggerBtn) {
    selectEvidenceTriggerBtn.addEventListener('click', () => {
      deductionModal.classList.add('hidden');
      evidenceSelectionDock.classList.remove('hidden');
    });
  }

  if (confirmEvidenceBtn) {
    confirmEvidenceBtn.addEventListener('click', () => {
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

  // Deduction Validation Form Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
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

    // Validation checks
    const isSuspectCorrect = suspectVal === currentCaseData.solution.suspect;
    const isMethodCorrect = methodVal === currentCaseData.solution.method;
    const isMotiveCorrect = motiveVal === currentCaseData.solution.motive;
    const isEvidenceCorrect = linkedEvidenceIds.every(id => currentCaseData.solution.evidence.includes(id));

    if (isSuspectCorrect && isMethodCorrect && isMotiveCorrect && isEvidenceCorrect) {
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
      
      let feedbackMsg = "Your case filing was reviewed by the Superintendent, but some parameters don't connect:<br><br>";
      
      if (!isSuspectCorrect) {
        feedbackMsg += "• <strong>PRIMARY SUSPECT</strong>: The accused individual's timeline or opportunity doesn't match the crime scene parameters.<br>";
      } else {
        feedbackMsg += "• <strong>PRIMARY SUSPECT</strong>: Correct accusation. Arthur/Elias/Vance is definitely the culprit.<br>";
      }
      
      if (!isMethodCorrect) {
        feedbackMsg += "• <strong>EXECUTION METHOD</strong>: The physical mechanics of how the crime was committed contain logical flaws.<br>";
      } else {
        feedbackMsg += "• <strong>EXECUTION METHOD</strong>: Correct execution mechanics deduced.<br>";
      }
      
      if (!isMotiveCorrect) {
        feedbackMsg += "• <strong>CRIMINAL MOTIVE</strong>: The psychological reason driving the perpetrator doesn't align with their records.<br>";
      } else {
        feedbackMsg += "• <strong>CRIMINAL MOTIVE</strong>: Correct culprit motive deduced.<br>";
      }
      
      if (!isEvidenceCorrect) {
        feedbackMsg += "• <strong>LINKED EVIDENCE</strong>: The physical evidence linked does not provide sufficient, irrefutable proof of your theory.<br>";
      } else {
        feedbackMsg += "• <strong>LINKED EVIDENCE</strong>: Valid crime scene clues linked.<br>";
      }

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
    overlay.classList.add('hidden');
    renderCaseSelection();
  });
});
