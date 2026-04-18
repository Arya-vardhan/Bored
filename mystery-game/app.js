// Multi-case data
const allCases = [
  {
    id: "case-001",
    title: "The Locked Room Enigma",
    date: "October 24, 1987",
    fir: "Incident: Grand Larceny. Property: 'The Eye of Leviathan', a rare sapphire worth £2.5M. The display room was found secured from the inside with a brass deadbolt engaged. No signs of forced entry. The only ventilation is a small barred window. Strangely, the room's temperature was remarkably cold, despite the central heating running on high for hours.",
    witnesses: [
      { name: "Maid (Mrs. Higgins)", statement: "I heard a loud thud from the study right around 8:00 PM. It sounded almost like a heavy block cracking on the hardwood floor." },
      { name: "Nephew (Arthur)", statement: "I left the house at 7:30 PM for a drink at the docks. The heavy oak door was perfectly fine when I left. No one else was inside." },
      { name: "Neighbor (Mr. Clark)", statement: "I was having a smoke outside. I saw someone pulling a thick string out from beneath the gap of the study window around 8:15 PM, but it was too dark to see a face." },
      { name: "Lord Harrington", statement: "Arthur is the only other person who knew the safe's combination. He has been complaining about his gambling debts all month." }
    ],
    evidence: [
      { type: "photo", text: "Sturdy white thread caught in the internal window latch.", image: "assets/thread.png" },
      { type: "photo", text: "A pool of water and a melting block of ice near the door mechanism.", image: "assets/ice.png" },
      { type: "photo", text: "A receipt for a 50lb block of ice found in Arthur's coat pocket.", image: "assets/receipt.png" },
      { type: "lab", title: "WATER ANALYSIS", text: "The water sample from the study floor contains high traces of brackish river silt and fish scales, matching the commercial ice sold at the local harbor docks where Arthur works." },
      { type: "document", title: "INSURANCE AMENDMENT", text: "Policy No. 8832 on 'The Eye of Leviathan'. Beneficiary recently updated to Arthur Harrington. The amendment is dated exactly three days prior to the incident." },
      { type: "document", title: "POLICE OBSERVATION", text: "The door's internal deadbolt lever operates smoothly. A loop of thread could easily be placed around it and pulled from the outside to engage the lock, provided the thread was guided under the window frame." }
    ],
    solution: {
      suspects: ["arthur", "nephew"],
      concepts: [
        ["ice", "frozen", "melt", "water", "block"],
        ["thread", "string", "loop", "pull", "outside", "under"]
      ]
    }
  },
  {
    id: "case-002",
    title: "The Poisoned Pen",
    date: "November 12, 1987",
    fir: "Incident: Murder. Victim: Percival Blackwood, a wealthy author. Found dead at his mahogany desk. Cause of death determined to be a fast-acting poison absorbed through the skin. A half-sealed letter was found on his desk addressed to his publisher.",
    witnesses: [
      { name: "Rival Author (Elias)", statement: "I hated his guts, sure. He stole my ideas. But I was at the pub all evening. Ask anyone." },
      { name: "Butler (Jeeves)", statement: "Master Percival was furious earlier. He received a special delivery of artisanal sealing wax from an anonymous fan. He insisted on using it for his new manuscript." },
      { name: "Publisher", statement: "Percival called me in a panic, saying he figured out Elias was plagiarizing him and he was sending me the proof." }
    ],
    evidence: [
      { type: "photo", text: "An elegant vintage envelope with a partially melted red wax seal on the mahogany desk.", image: "assets/letter.png" },
      { type: "photo", text: "A beautiful ornate glass inkwell tipped over, black ink pooling around it.", image: "assets/ink.png" },
      { type: "lab", title: "TOXICOLOGY REPORT", text: "Traces of a rare, lethal contact poison, 'Cyanogen-X', detected. The poison is inert when dry but extremely lethal when heated and touched." },
      { type: "lab", title: "MATERIAL ANALYSIS", text: "The red sealing wax found on the envelope contains very high concentrations of Cyanogen-X. The ink in the tipped bottle is standard non-toxic India ink." },
      { type: "document", title: "FINANCIAL RECORDS", text: "Elias recently purchased 'rare botanical extracts' from a questionable overseas vendor known for supplying illicit toxic substances." }
    ],
    solution: {
      suspects: ["elias", "rival"],
      concepts: [
        ["wax", "seal", "stamp", "envelope", "letter"],
        ["poison", "cyanogen", "toxic", "heat", "melt"]
      ]
    }
  },
  {
    id: "case-003",
    title: "The Midnight Phantom",
    date: "December 05, 1987",
    fir: "Incident: Art Theft. Missing: 'The Weeping Madonna' original 16th-century painting. The museum experienced a sudden, 60-second power outage. When backup generators kicked in, the painting had been replaced by a cheap replica. The security guard was found knocked unconscious.",
    witnesses: [
      { name: "Security Guard", statement: "The lights went out, I heard running footsteps, then something heavy hit me on the back of the head. I didn't see anything." },
      { name: "Janitor (Boris)", statement: "I was cleaning the east wing. I didn't have a flashlight. I just stayed still until the lights came back on." },
      { name: "Curator (Ms. Vance)", statement: "I was in my office. Boris is clumsy and I caught him admiring the painting far too often." }
    ],
    evidence: [
      { type: "photo", text: "Expensive Oxford dress shoes caked in wet mud and dried leaves.", image: "assets/shoes.png" },
      { type: "photo", text: "A heavy metallic flashlight rolling on the museum floor, bulb still faintly glowing.", image: "assets/flashlight.png" },
      { type: "lab", title: "FORENSIC ANALYSIS", text: "The flashlight casing has traces of hair and blood matching the security guard. It was clearly the weapon used to knock him out." },
      { type: "document", title: "MUSEUM LOGS", text: "Boris is required to wear standard issued rubber-soled work boots. Ms. Vance recently returned from an outdoor excavation site and was wearing high-end Oxford shoes today." },
      { type: "document", title: "REPLICA EXAMINATION", text: "The fake painting has faint traces of glow-in-the-dark paint around the edges, suggesting someone needed to see the edges of the frame specifically in the pitch black." }
    ],
    solution: {
      suspects: ["vance", "curator"],
      concepts: [
        ["shoe", "oxford", "mud", "leaves", "foot"],
        ["glow", "paint", "dark", "pitch", "faint"]
      ]
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
  const dateEl = document.getElementById('case-date');
  const firEl = document.getElementById('case-fir');
  const evidenceGrid = document.getElementById('evidence-grid');
  const form = document.getElementById('solution-form');
  const suspectInput = document.getElementById('suspect');
  const reasoningInput = document.getElementById('reasoning');
  const overlay = document.getElementById('solved-overlay');
  
  let currentCaseData = null;

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
    dateEl.textContent = `Date: ${caseData.date}`;
    firEl.textContent = caseData.fir;
    
    // Clear old inputs and grid
    evidenceGrid.innerHTML = '';
    suspectInput.value = '';
    reasoningInput.value = '';
    suspectInput.disabled = false;
    reasoningInput.disabled = false;
    document.getElementById('submit-btn').disabled = false;
    overlay.classList.add('hidden');

    // Resume local storage inputs state
    const savedSuspect = localStorage.getItem(`${caseData.id}-suspect`);
    const savedReasoning = localStorage.getItem(`${caseData.id}-reasoning`);
    if(savedSuspect) suspectInput.value = savedSuspect;
    if(savedReasoning) reasoningInput.value = savedReasoning;

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

    // Render Evidence / Photo / Lab / Document Cards
    caseData.evidence.forEach((ev, index) => {
      const card = document.createElement('div');
      card.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
      card.style.animationDelay = `${(caseData.witnesses.length + index) * 0.15}s`;

      if (ev.type === 'photo') {
        card.className = 'card card-evidence';
        card.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
        card.innerHTML = `
          <div class="polaroid-tape"></div>
          <div class="card-evidence-photo" style="background-image: url('${ev.image}')"></div>
          <p>${ev.text}</p>
        `;
      } else if (ev.type === 'lab') {
        card.className = 'card card-lab';
        card.innerHTML = `
          <div class="card-lab-header">${ev.title || "LABORATORY REPORT"}</div>
          <p>${ev.text}</p>
          <div class="card-lab-stamp">VERIFIED</div>
        `;
      } else if (ev.type === 'document') {
        card.className = 'card card-document';
        card.innerHTML = `
          <h3>${ev.title}</h3>
          <p>${ev.text}</p>
        `;
      }

      evidenceGrid.appendChild(card);
    });

    checkFastForwardProgress();
  }

  // Check if case is already solved on load
  function checkFastForwardProgress() {
    const solved = getSolvedCases();
    if (solved.includes(currentCaseData.id)) {
      showSuccess();
    }
  }

  // Back button functionality
  backBtn.addEventListener('click', () => {
    // Save state before leaving just in case
    localStorage.setItem(`${currentCaseData.id}-suspect`, suspectInput.value);
    localStorage.setItem(`${currentCaseData.id}-reasoning`, reasoningInput.value);
    renderCaseSelection();
  });

  // Track inputs periodically
  suspectInput.addEventListener('input', () => {
    if(!currentCaseData) return;
    localStorage.setItem(`${currentCaseData.id}-suspect`, suspectInput.value);
  });
  
  reasoningInput.addEventListener('input', () => {
    if(!currentCaseData) return;
    localStorage.setItem(`${currentCaseData.id}-reasoning`, reasoningInput.value);
  });

  // Deduction Validation
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!currentCaseData) return;
    
    const suspectVal = suspectInput.value.trim().toLowerCase();
    const reasoningVal = reasoningInput.value.trim().toLowerCase();
    
    // Suspect Validation (Case-insensitive array check)
    const isSuspectCorrect = currentCaseData.solution.suspects.some(name => suspectVal.includes(name));
    
    // Reasoning Validation: User must hit at least one word from every required concept group
    const missingConcepts = currentCaseData.solution.concepts.filter(group => {
      // Return true if NO keyword in this group is found in the reasoning
      return !group.some(kw => reasoningVal.includes(kw));
    });
    
    if (isSuspectCorrect && missingConcepts.length === 0) {
      // Success Logic
      const solved = getSolvedCases();
      if (!solved.includes(currentCaseData.id)) {
        solved.push(currentCaseData.id);
        localStorage.setItem('solvedCases', JSON.stringify(solved));
      }
      showSuccess();
    } else {
      // Failure Logic
      document.body.classList.remove('error-flash');
      void document.body.offsetWidth; // Force reflow
      document.body.classList.add('error-flash');
      
      let errorMsg = "Conclusion rejected. ";
      if (!isSuspectCorrect) {
        errorMsg += "Your primary suspect doesn't add up based on the evidence. ";
      } else if (missingConcepts.length > 0) {
        // Provide a hint based on missing concepts instead of keeping them in the dark
        errorMsg += "Your suspect is correct, but your walkthrough misses critical mechanics of the crime. Think about how they did it.";
      }
      alert(errorMsg);
    }
  });

  function showSuccess() {
    overlay.classList.remove('hidden');
    suspectInput.disabled = true;
    reasoningInput.disabled = true;
    document.getElementById('submit-btn').disabled = true;
  }

  // Dismiss success overlay and return to files
  nextCaseBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    renderCaseSelection();
  });
});
