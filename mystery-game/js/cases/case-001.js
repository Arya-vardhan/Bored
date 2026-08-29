window.case001 = {
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
    { 
      id: "thread", 
      type: "photo", 
      text: "Sturdy white thread caught in the internal window latch.", 
      image: "assets/thread.png",
      inspector: {
        clueText: '🧵 deadbolt latch shear grooves',
        clueStyle: 'top: 90px; left: 110px; font-size: 1.2rem;'
      }
    },
    { 
      id: "ice", 
      type: "photo", 
      text: "A pool of water and a melting block of ice near the door mechanism.", 
      image: "assets/ice.png",
      inspector: {
        clueText: '🔬 dock silt scales & fish grit',
        clueStyle: 'bottom: 50px; left: 70px; font-size: 1.1rem;'
      }
    },
    { 
      id: "receipt", 
      type: "photo", 
      text: "A receipt for a 50lb block of ice found in Arthur's coat pocket.", 
      image: "assets/receipt.png",
      inspector: {
        clueText: '✒️ Arthur\'s note: "lockeddeadbolt window gap 8PM"',
        clueStyle: 'bottom: 25px; right: 25px; transform: rotate(-5deg); font-size: 1.1rem;'
      }
    },
    { 
      id: "water", 
      type: "lab", 
      title: "WATER ANALYSIS", 
      text: "The water sample from the study floor contains high traces of brackish river silt and fish scales, matching the commercial ice sold at the local harbor docks where Arthur works.",
      puzzle: {
        type: "oscilloscope",
        title: "🔬 SPECTROMETRIC SILT ALIGNMENT",
        instructions: "Harmonize the composite wave (red) with reference dock silt (green) using the oscilloscope dials.",
        btnLabel: "🔬 ANALYZE",
        stampText: "MATCH CONFIRMED"
      }
    },
    { 
      id: "insurance", 
      type: "document", 
      title: "INSURANCE AMENDMENT", 
      text: "Policy No. 8832 on 'The Eye of Leviathan'. Beneficiary recently updated to Arthur Harrington. The amendment is dated exactly three days prior to the incident.",
      inspector: {
        clueText: '✒️ signed date: three days prior to theft',
        clueStyle: 'bottom: 50px; right: 50px; font-size: 1.2rem;'
      }
    },
    { 
      id: "deadbolt", 
      type: "document", 
      title: "POLICE OBSERVATION", 
      text: "The door's internal deadbolt lever operates smoothly. A loop of thread could easily be placed around it and pulled from the outside to engage the lock, provided the thread was guided under the window frame."
    },
    { 
      id: "ledger", 
      type: "document", 
      title: "SYNDICATE LEDGER", 
      text: "A recovered loan shark ledger reveals Arthur owes £50,000 to the local docks syndicate. Marked 'Pay or Swim'.",
      inspector: {
        clueText: '🦈 local harbor loan sharks syndicate stamp mark',
        clueStyle: 'bottom: 40px; left: 80px; font-size: 1.2rem; color: #a31c1c;'
      }
    }
  ],
  solution: {
    suspect: "arthur",
    method: "ice_thread",
    motive: "gambling_debts",
    evidence: ["thread", "receipt", "water", "ledger"],
    narrative: "Arthur used a long loop of sturdy thread to pull the internal deadbolt closed from the outside, running it underneath the window gap before pulling it free. He placed the heavy block of ice near the door mechanism to slowly melt over time, creating a pool of water to mimic a structural leak and wash away traces of the thread's intense friction.",
    motiveText: "Arthur was drowning in severe gambling debts to a local harbor crime syndicate. Being the newly added beneficiary, he needed to steal the gemstone to pay off his illicit debts immediately before the syndicate made good on lethal threats."
  }
};
