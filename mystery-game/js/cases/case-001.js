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
    { 
      id: "witness-higgins",
      name: "Maid (Mrs. Higgins)", 
      image: "assets/suspects/higgins.jpg",
      caption: "MRS. HIGGINS",
      tag: "HOUSEHOLD STAFF",
      statement: "I heard a loud thud from the study right around 8:00 PM. It sounded almost like a heavy block cracking on the hardwood floor." 
    },
    { 
      id: "witness-arthur",
      name: "Nephew (Arthur)", 
      image: "assets/suspects/arthur.jpg",
      caption: "A. HARRINGTON",
      tag: "PRIME SUSPECT",
      statement: "I left the house at 7:30 PM for a drink at the docks. The heavy oak door was perfectly fine when I left. No one else was inside." 
    },
    { 
      id: "witness-clark",
      name: "Neighbor (Mr. Clark)", 
      image: "assets/suspects/clark.jpg",
      caption: "W. CLARK",
      tag: "EYEWITNESS",
      statement: "I was having a smoke outside. I saw someone pulling a thick string out from beneath the gap of the study window around 8:15 PM, but it was too dark to see a face." 
    },
    { 
      id: "witness-harrington",
      name: "Lord Harrington", 
      image: "assets/suspects/harrington.jpg",
      caption: "LORD HARRINGTON",
      tag: "VICTIM / COMPLAINANT",
      statement: "Arthur is the only other person who knew the safe's combination. His extensive gambling debts to the harbor syndicate are due on Friday... I fear the absolute worst." 
    }
  ],
  evidence: [
    { 
      id: "estate_dossier", 
      type: "folder", 
      title: "HARRINGTON ESTATE & REPOSITORY FILE", 
      text: "Official archive containing architectural schematics, insurance policy amendments, and syndicate liens.",
      documents: [
        {
          title: "ESTATE BLUEPRINTS & STUDY DEADBOLT SPECIFICATIONS",
          content: "Metropolitan Police Engineering Survey (Oct 24, 1987):\n\nLocation: Harrington Hall, Study Room #4.\n\nKey Architectural Observations:\n1. The Display Room Door is solid 2.5-inch English Oak, fitted with a heavy interior cast-brass sliding deadbolt. When engaged from within, no keyway exists on the exterior face.\n2. The lower door gap measures 0.15 inches, preventing physical tool bypass. However, the study window sill features a 0.8-inch clearance gap directly beneath the iron security bars.\n3. Laboratory inspection of the brass deadbolt knob revealed microscopic shear grooves and polished surface burnishings, consistent with high-tension thread friction.\n4. Central heating registers were operating at maximum capacity (82°F boiler output), yet the study interior registered an ambient temperature of 38°F upon entry."
        },
        {
          title: "INSURANCE UNDERWRITING & BENEFICIARY AMENDMENT",
          content: "Lloyd's of London Underwriting File #8832-L:\n\nInsured Asset: 'The Eye of Leviathan' (98.4-carat flawless Ceylon sapphire). Appraised Value: £2,500,000.\n\nRecent Policy Amendments:\n- Dated: October 21, 1987 (72 hours prior to the theft).\n- Signatory: Lord Harrington (authorized estate signatory).\n- Amendment Note: Primary payout beneficiary reassigned from the Harrington Archaeological Trust to Arthur Harrington (nephew).\n\nNotes from Insurance Investigator Crane:\nArthur visited the underwriter's office in person twice on October 22 demanding written confirmation of the policy's casualty disbursement schedule."
        },
        {
          title: "DOCKS LOAN SYNDICATE FORENSIC AUDIT",
          content: "CID Harbor Patrol Financial Screening:\n\nSubject: Arthur Harrington (Junior Cargo Clerk, Docklands Pier 9).\n\nRecovered Artifacts:\n1. Loan shark ledger retrieved from the 'Blackwater Wharf Syndicate' lockbox. Outstanding principal: £50,000, marked with high-priority skull stamps and the inscription 'Pay or Swim by Friday'.\n2. Receipts from the Pier 4 Cold Storage Depot show Arthur purchased a 50lb industrial ice block on the morning of October 24.\n3. Ballistic & chemical screening confirms ice delivered to the harbor docks contains distinctive river silt and brackish estuarine sediment, matching puddle residue discovered inside the locked study."
        }
      ]
    },
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
  },
  hints: [
    {
      level: 1,
      title: "HQ DISPATCH CABLE #1",
      text: "Examine the heating records against the coroner's temperature reading in the study. Why was a room with a boiling 82°F radiator recorded at a freezing 38°F upon entry?"
    },
    {
      level: 2,
      title: "FORENSIC TELETYPE #2",
      text: "A 50lb ice block leaves behind brackish dock sediment when melted. Notice the 0.8-inch window gap clearance and thread caught in the latch. Thread looped from outside can flip a deadbolt shut without entry."
    }
  ]
};
