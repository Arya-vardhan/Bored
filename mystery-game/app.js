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

// Procedural audio synthesizer using Web Audio API
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playPin() {
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'sine';
      // Low-frequency subtle wooden thumbtack click
      osc.frequency.setValueAtTime(350, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {
      console.warn("Audio pin play blocked/failed", e);
    }
  }

  playClick() {
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.type = 'sine'; // sine for an extremely soft, rounded click tone
      // Soft muffled keystroke click
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.03);
      
      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
      
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      console.warn("Audio click play blocked/failed", e);
    }
  }

  playFolder() {
    try {
      this.init();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      // Generate a soft muffled folder friction sound
      const bufferSize = this.ctx.sampleRate * 0.1;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 350; // lower frequency for a soft muffle
      filter.Q.value = 1.0;
      
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      
      noise.start();
      noise.stop(this.ctx.currentTime + 0.11);
    } catch (e) {
      console.warn("Audio folder play blocked/failed", e);
    }
  }
}


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
  const stringBoard = document.getElementById('string-board');

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

      const isPuzzleCard = (ev.id === 'water' || ev.id === 'records' || ev.id === 'bank');
      const isSolved = localStorage.getItem(`${caseData.id}-puzzle-solved`) === 'true';

      let innerHTML = '';
      let cardText = ev.text;

      if (isPuzzleCard && !isSolved) {
        card.classList.add('card-locked-puzzle');
        if (ev.id === 'water') {
          cardText = "🔬 WATER SPECTROSCOPY ANALYSIS REQUIRED. Perform compositional wave alignment matching to verify the study floor water source.";
        } else if (ev.id === 'records') {
          cardText = "🔓 PURCHASE LEDGER ENCRYPTED. Solve the alphabetical cipher shift to read Elias Thorne's overseas receipts.";
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
        const btnLabel = ev.id === 'water' ? '🔬 ANALYZE' : (ev.id === 'records' ? '🔓 DECRYPT' : '🧩 RESTORE');
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
            // Use title or truncated snippet
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
    
    let clueText = '';
    let clueStyle = '';
    
    if (evidence.id === 'receipt') {
      clueText = '✒️ Arthur\'s note: "lockeddeadbolt window gap 8PM"';
      clueStyle = 'bottom: 25px; right: 25px; transform: rotate(-5deg); font-size: 1.1rem;';
    } else if (evidence.id === 'envelope') {
      clueText = '🩸 FINGERPRINT MATCH DETECTED: ELIAS THORNE';
      clueStyle = 'top: 60px; left: 160px; transform: rotate(-8deg); font-size: 1.1rem; color: #a31c1c; text-shadow: 0 0 8px rgba(163, 28, 28, 0.4);';
    } else if (evidence.id === 'inkwell') {
      clueText = '🧪 residue code label: Cyanogen-X';
      clueStyle = 'bottom: 40px; left: 80px; font-size: 1.2rem;';
    } else if (evidence.id === 'flashlight') {
      clueText = '🩸 guard head skin fibers & dried blood splatter';
      clueStyle = 'top: 100px; left: 110px; transform: rotate(10deg); font-size: 1.2rem; color: #a31c1c;';
    } else if (evidence.id === 'replica') {
      clueText = '🎨 glow-in-the-dark margins: ms. vance';
      clueStyle = 'top: 70px; left: 90px; transform: rotate(-5deg); font-size: 1.1rem; color: #39a85a;';
    } else if (evidence.id === 'ice') {
      clueText = '🔬 dock silt scales & fish grit';
      clueStyle = 'bottom: 50px; left: 70px; font-size: 1.1rem;';
    } else if (evidence.id === 'thread') {
      clueText = '🧵 deadbolt latch shear grooves';
      clueStyle = 'top: 90px; left: 110px; font-size: 1.2rem;';
    } else if (evidence.id === 'shoes') {
      clueText = '🍂 soil particles: peat & river moss';
      clueStyle = 'bottom: 60px; left: 80px; font-size: 1.2rem;';
    } else if (evidence.id === 'insurance') {
      clueText = '✒️ signed date: three days prior to theft';
      clueStyle = 'bottom: 50px; right: 50px; font-size: 1.2rem;';
    } else if (evidence.id === 'ledger') {
      clueText = '🦈 local harbor loan sharks syndicate stamp mark';
      clueStyle = 'bottom: 40px; left: 80px; font-size: 1.2rem; color: #a31c1c;';
    }

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
    
    if (evidence.id === 'water') {
      puzzleTitle.textContent = "🔬 SPECTROMETRIC SILT ALIGNMENT";
      puzzleInstructions.textContent = "Harmonize the composite wave (red) with reference dock silt (green) using the oscilloscope dials.";
      loadOscilloscopePuzzle();
    } else if (evidence.id === 'records') {
      puzzleTitle.textContent = "🔓 DECRYPT CIPHER WHEEL";
      puzzleInstructions.textContent = "Rotate the brass dial code disc to find the alphabetical ROT key and decipher Thorne's ledger.";
      loadCipherPuzzle();
    } else if (evidence.id === 'bank') {
      puzzleTitle.textContent = "🧩 RESTORE SHREDDED STATEMENT";
      puzzleInstructions.textContent = "Click two shredded paper strips to swap them and reconstruct the transaction statement.";
      loadShredderPuzzle();
    }
  }

  function triggerPuzzleSolved(storageKey, stampText) {
    sfx.playPin();
    puzzleStamp.textContent = stampText;
    puzzleStamp.classList.remove('hidden');
    
    if (currentCaseData) {
      localStorage.setItem(`${currentCaseData.id}-puzzle-solved`, 'true');
    }
    
    setTimeout(() => {
      sfx.playFolder();
      puzzleModal.classList.add('hidden');
      if (currentCaseData) {
        loadCase(currentCaseData);
      }
    }, 1600);
  }

  if (closePuzzleBtn) {
    closePuzzleBtn.addEventListener('click', () => {
      sfx.playFolder();
      clearInterval(osciInterval);
      puzzleModal.classList.add('hidden');
    });
  }

  puzzleModal.addEventListener('click', (e) => {
    if (e.target === puzzleModal) {
      sfx.playFolder();
      clearInterval(osciInterval);
      puzzleModal.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !puzzleModal.classList.contains('hidden')) {
      sfx.playFolder();
      clearInterval(osciInterval);
      puzzleModal.classList.add('hidden');
    }
  });

  // A. DNA / Oscilloscope Matcher Engine
  let osciInterval = null;
  
  function loadOscilloscopePuzzle() {
    puzzleWorkspace.innerHTML = `
      <div class="oscilloscope-container">
        <div class="oscilloscope-screen">
          <div class="oscilloscope-label">🔬 COMPOSITIONAL SPECTROMETER</div>
          <canvas id="osci-canvas" width="600" height="120" class="osci-canvas"></canvas>
        </div>
        <div class="puzzle-controls">
          <div class="puzzle-slider-row">
            <label>Density (Silt)</label>
            <input type="range" id="slider-density" min="10" max="60" value="15">
            <span id="val-density">15</span>
          </div>
          <div class="puzzle-slider-row">
            <label>Frequency (Silt)</label>
            <input type="range" id="slider-frequency" min="4" max="24" value="6">
            <span id="val-frequency">6</span>
          </div>
          <div class="puzzle-slider-row">
            <label>Phase (Grids)</label>
            <input type="range" id="slider-phase" min="0" max="50" value="0">
            <span id="val-phase">0</span>
          </div>
        </div>
      </div>
    `;

    startOsciPuzzle();
  }

  function startOsciPuzzle() {
    const canvas = document.getElementById('osci-canvas');
    if (!canvas) return;
    
    const sliderDensity = document.getElementById('slider-density');
    const sliderFrequency = document.getElementById('slider-frequency');
    const sliderPhase = document.getElementById('slider-phase');
    
    const valDensity = document.getElementById('val-density');
    const valFrequency = document.getElementById('val-frequency');
    const valPhase = document.getElementById('val-phase');
    
    const targetD = 35;
    const targetF = 12;
    const targetP = 24;
    
    let t = 0;
    
    function draw() {
      if (!canvas) return;
      const d = parseInt(sliderDensity.value);
      const f = parseInt(sliderFrequency.value);
      const p = parseInt(sliderPhase.value);
      
      valDensity.textContent = d;
      valFrequency.textContent = f;
      valPhase.textContent = p;
      
      const match = Math.abs(d - targetD) <= 3 && Math.abs(f - targetF) <= 1 && Math.abs(p - targetP) <= 2;
      
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      
      t += 0.6;
      
      // Target wave (green)
      ctx.strokeStyle = match ? '#39a85a' : 'rgba(57, 168, 90, 0.4)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = h/2 + Math.sin(x * 0.04 + (targetP * 0.05) + t * 0.05) * targetD;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      
      // Player wave (red)
      if (!match) {
        ctx.strokeStyle = '#d83131';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < w; x++) {
          const y = h/2 + Math.sin(x * (f * 0.0033) + (p * 0.05) + t * 0.05) * d;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      } else {
        sliderDensity.disabled = true;
        sliderFrequency.disabled = true;
        sliderPhase.disabled = true;
        
        clearInterval(osciInterval);
        triggerPuzzleSolved('case-001-puzzle-solved', 'MATCH CONFIRMED');
      }
    }
    
    sliderDensity.addEventListener('input', draw);
    sliderFrequency.addEventListener('input', draw);
    sliderPhase.addEventListener('input', draw);
    
    osciInterval = setInterval(draw, 80);
  }

  // B. Brass Code Disk ROT Cipher Engine
  function loadCipherPuzzle() {
    puzzleWorkspace.innerHTML = `
      <div class="cipher-container">
        <div class="cipher-disc-wrapper" id="cipher-disc" style="transform: rotate(0deg);">
          <div class="cipher-letters" id="cipher-letters-ring"></div>
          <div class="cipher-center-hub">ROT</div>
          <div class="cipher-arrow">▲</div>
        </div>
        <div class="cipher-actions" style="display: flex; gap: 15px; margin-top: 10px;">
          <button type="button" class="submit-btn secondary-btn" id="cipher-prev-btn" style="height: 38px; padding: 0 1rem; font-size: 0.8rem;">↺ ROTATE LEFT</button>
          <button type="button" class="submit-btn secondary-btn" id="cipher-next-btn" style="height: 38px; padding: 0 1rem; font-size: 0.8rem;">↻ ROTATE RIGHT</button>
        </div>
        <div class="cipher-text-display" id="cipher-text-display">
          Scrambled Text Loading...
        </div>
      </div>
    `;

    const cipherLettersRing = document.getElementById('cipher-letters-ring');
    const cipherDisc = document.getElementById('cipher-disc');
    const cipherPrevBtn = document.getElementById('cipher-prev-btn');
    const cipherNextBtn = document.getElementById('cipher-next-btn');
    const cipherTextDisplay = document.getElementById('cipher-text-display');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 26; i++) {
      const angle = i * (360 / 26);
      const node = document.createElement('div');
      node.className = 'cipher-letter-node';
      node.textContent = alphabet[i];
      const rad = (angle - 90) * (Math.PI / 180);
      const x = 90 + Math.cos(rad) * 65 - 10;
      const y = 90 + Math.sin(rad) * 65 - 10;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.transform = `rotate(${angle}deg)`;
      cipherLettersRing.appendChild(node);
    }

    const scrambled = "HOLD-G RWDDOQLFD HAWUDFWV SXUFKDVHG EB HOLDV. WRALF ERWDQLFDO HAWUDFWV LGHQWLILHG DV EODFNZRRB ARALQ.";
    const decryptedTarget = "RARE BOTANICAL EXTRACTS PURCHASED BY ELIAS. TOXIC BOTANICAL EXTRACTS IDENTIFIED AS BLACKWOOD TOXIN.";
    
    let key = 0;

    function updateDecryption() {
      sfx.playClick();
      cipherDisc.style.transform = `rotate(${-key * (360/26)}deg)`;
      
      if (key === 3) {
        cipherTextDisplay.innerHTML = `<span style="color: #39a85a; font-weight: bold;">✓ DECRYPTED:</span> ${decryptedTarget}`;
        cipherPrevBtn.disabled = true;
        cipherNextBtn.disabled = true;
        triggerPuzzleSolved('case-002-puzzle-solved', 'DECRYPTED');
      } else {
        let displayStr = '';
        for (let i = 0; i < scrambled.length; i++) {
          const char = scrambled[i];
          const idx = alphabet.indexOf(char);
          if (idx !== -1) {
            displayStr += alphabet[(idx - key + 26) % 26];
          } else {
            displayStr += char;
          }
        }
        cipherTextDisplay.textContent = displayStr;
      }
    }

    cipherPrevBtn.addEventListener('click', () => {
      key = (key - 1 + 26) % 26;
      updateDecryption();
    });

    cipherNextBtn.addEventListener('click', () => {
      key = (key + 1) % 26;
      updateDecryption();
    });

    cipherTextDisplay.textContent = scrambled;
  }

  // C. Shredded Document Restoration Engine
  function loadShredderPuzzle() {
    puzzleWorkspace.innerHTML = `
      <div class="shredred-container" id="shredder-grid"></div>
      <p style="font-family: var(--font-typewriter); font-size: 0.75rem; color: #888; text-align: center; margin-top: 10px;">Click one shred, then click another to swap their positions.</p>
    `;

    const shredderGrid = document.getElementById('shredder-grid');
    const targetSequence = [0, 1, 2, 3, 4];
    
    let currentSequence = [3, 1, 4, 0, 2];
    let selectedIdx = null;

    function renderShreds() {
      shredderGrid.innerHTML = '';
      
      currentSequence.forEach((val, index) => {
        const strip = document.createElement('div');
        strip.className = 'shred-strip';
        if (selectedIdx === index) {
          strip.style.border = '2.5px solid var(--accent)';
          strip.style.boxShadow = '0 0 10px var(--accent)';
        }
        
        strip.innerHTML = `
          <div class="shred-content-block" style="left: -${val * 72}px;">
            <div style="border-bottom: 2px solid #111; font-weight: bold; margin-bottom: 8px; text-align: center; font-size: 0.75rem;">CONFIDENTIAL BANK LEDGER</div>
            <div style="font-weight: bold;">CID ACCT SEARCH: MS. VANCE</div>
            <div>STATUS: UNRESTRICTED ARCHAEOLOGY FUND</div>
            <div>CURRENT BALANCE: £0.00 (OVERDRAWN)</div>
            <div style="border-bottom: 1.5px dashed #444; margin: 8px 0;">TRANSFERS (EXPEDITION FUND):</div>
            <div>• MAY 12: £1,500,000 TRANSFER</div>
            <div>• JUNE 29: £800,000 TRANSFER</div>
            <div style="font-weight: bold; color: var(--accent); margin-top: 8px; font-size: 0.7rem; text-decoration: underline;">OVERDRAFT LIABILITY IN BLACKMARKET EXPEDITION</div>
          </div>
        `;

        strip.addEventListener('click', () => {
          sfx.playClick();
          if (selectedIdx === null) {
            selectedIdx = index;
            renderShreds();
          } else {
            const temp = currentSequence[selectedIdx];
            currentSequence[selectedIdx] = currentSequence[index];
            currentSequence[index] = temp;
            
            selectedIdx = null;
            renderShreds();
            
            const win = currentSequence.every((val, i) => val === targetSequence[i]);
            if (win) {
              document.querySelectorAll('.shred-strip').forEach(el => {
                el.style.border = '1px solid #39a85a';
                el.style.boxShadow = '0 0 12px rgba(57, 168, 90, 0.4)';
                el.style.cursor = 'default';
                const clone = el.cloneNode(true);
                el.parentNode.replaceChild(clone, el);
              });
              triggerPuzzleSolved('case-003-puzzle-solved', 'RESTORED');
            }
          }
        });

        shredderGrid.appendChild(strip);
      });
    }

    renderShreds();
  }

  // Redraw strings on window resize to match layout updates
  window.addEventListener('resize', () => {
    if (currentCaseData) drawActiveStrings();
  });
});
