// Case data stored as static JSON within JS
const caseData = {
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
    suspect: "Arthur", // Case-insensitive string match
    keywords: ["ice", "thread", "pulled", "outside"] // Array of strings to look for in reasoning
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Setup elements
  const titleEl = document.getElementById('case-title');
  const dateEl = document.getElementById('case-date');
  const firEl = document.getElementById('case-fir');
  const evidenceGrid = document.getElementById('evidence-grid');
  const form = document.getElementById('solution-form');
  const suspectInput = document.getElementById('suspect');
  const reasoningInput = document.getElementById('reasoning');
  const overlay = document.getElementById('solved-overlay');
  const nextCaseBtn = document.getElementById('next-case-btn');

  // Initialization checks
  checkProgress();
  loadCase();

  function loadCase() {
    titleEl.textContent = caseData.title;
    dateEl.textContent = `Date: ${caseData.date}`;
    firEl.textContent = caseData.fir;
    
    // Resume local storage inputs state
    const savedSuspect = localStorage.getItem(`${caseData.id}-suspect`);
    const savedReasoning = localStorage.getItem(`${caseData.id}-reasoning`);
    if(savedSuspect) suspectInput.value = savedSuspect;
    if(savedReasoning) reasoningInput.value = savedReasoning;

    // Render Witness Cards
    caseData.witnesses.forEach((witness, index) => {
      const card = document.createElement('div');
      card.className = 'card card-witness';
      // Subtle random rotation for physical corkboard feel
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
        // Subtle random rotation for polaroids
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
  }

  // Update local storage on input change for persistence across reloads
  suspectInput.addEventListener('input', () => {
    localStorage.setItem(`${caseData.id}-suspect`, suspectInput.value);
  });
  
  reasoningInput.addEventListener('input', () => {
    localStorage.setItem(`${caseData.id}-reasoning`, reasoningInput.value);
  });

  function checkProgress() {
    let solved = [];
    try {
      const stored = localStorage.getItem('solvedCases');
      if (stored) {
        solved = JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Storage parse error:", e);
    }
    
    // If array has case ID, fast forward to solved state
    if (solved.includes(caseData.id)) {
      showSuccess();
    }
  }

  // Deduction Validation
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const suspectVal = suspectInput.value.trim().toLowerCase();
    const reasoningVal = reasoningInput.value.trim().toLowerCase();
    
    // Suspect Validation (Case-insensitive check)
    const isSuspectCorrect = suspectVal.includes(caseData.solution.suspect.toLowerCase());
    
    // Reasoning Validation (Ensure all keywords exist)
    const missingKeywords = caseData.solution.keywords.filter(kw => !reasoningVal.includes(kw.toLowerCase()));
    
    if (isSuspectCorrect && missingKeywords.length === 0) {
      // Logic for Success
      let solved = [];
      try {
        solved = JSON.parse(localStorage.getItem('solvedCases') || '[]');
      } catch (e) {}
      
      if (!solved.includes(caseData.id)) {
        solved.push(caseData.id);
        localStorage.setItem('solvedCases', JSON.stringify(solved));
      }
      showSuccess();
    } else {
      // Logic for Failure
      document.body.classList.remove('error-flash');
      void document.body.offsetWidth; // Force a DOM reflow to re-trigger animation
      document.body.classList.add('error-flash');
      
      let errorMsg = "Conclusion rejected. ";
      if (!isSuspectCorrect) {
        errorMsg += "Your primary suspect doesn't add up. ";
      } else if (missingKeywords.length > 0) {
        errorMsg += "Your walkthrough is incorrect or misses critical mechanics of the crime (Keywords missing).";
      }
      alert(errorMsg);
    }
  });

  function showSuccess() {
    overlay.classList.remove('hidden');
    // Disable inputs
    suspectInput.disabled = true;
    reasoningInput.disabled = true;
    document.getElementById('submit-btn').disabled = true;
  }

  // Next case / Dismiss
  nextCaseBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
  });
});
