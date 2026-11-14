window.case002 = {
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
    { 
      id: "witness-elias",
      name: "Rival Author (Elias)", 
      image: "assets/suspects/elias.jpg",
      caption: "ELIAS THORNE",
      tag: "PRIME SUSPECT",
      statement: "I hated his guts, sure. Everyone says he stole my ideas for his latest bestseller. But I was at the pub all evening. Ask anyone." 
    },
    { 
      id: "witness-jeeves",
      name: "Butler (Jeeves)", 
      image: "assets/suspects/jeeves.jpg",
      caption: "JEEVES (BUTLER)",
      tag: "HOUSEHOLD STAFF",
      statement: "Master Percival was furious earlier. He received a special delivery of artisanal sealing wax from an anonymous fan. He insisted on using it for his new manuscript." 
    },
    { 
      id: "witness-publisher",
      name: "The Publisher", 
      image: "assets/suspects/publisher.jpg",
      caption: "M. STERLING",
      tag: "KEY WITNESS",
      statement: "Percival called me in a panic yesterday, saying he finally gathered undeniable proof that Elias was heavily plagiarizing him, and he was sending me the proof via mail today." 
    }
  ],
  evidence: [
    { 
      id: "autopsy_dossier", 
      type: "folder", 
      title: "CORONER INQUEST & LITERARY DOSSIER", 
      text: "Official autopsy protocol, High Court plagiarism claim, and illicit customs seizure records.",
      documents: [
        {
          title: "CORONER POST-MORTEM & TOXICOLOGY INQUEST",
          content: "Coroner's Inquest Protocol #CP-87-1112:\n\nDeceased: Percival Blackwood (Age 52)\nFound: Seated at private mahogany writing desk, November 12, 1987, 21:15 Hours.\n\nPathological Findings:\n1. Cause of Death: Sudden cardiorespiratory arrest precipitated by acute transdermal neurotoxin intoxication ('Cyanogen-X').\n2. External Marks: The distal phalanges of the right thumb and index finger exhibited distinctive crimson wax residue and micro-petechial capillary ruptures.\n3. Toxicological Properties: Cyanogen-X is a synthetic alkaloid synthesized from rare tropical nightshade varieties. It remains stable and inert at solid ambient temperatures (60-70°F). However, when liquefied by direct flame or molten wax (>140°F), it releases potent vapor and penetrates epithelial skin layers within 15 seconds."
        },
        {
          title: "HIGH COURT PLAGIARISM LITIGATION BRIEF",
          content: "Chancery Division Brief: Blackwood vs. Thorne (Drafted Nov 10, 1987):\n\nStatement of Claim:\nPlaintiff Percival Blackwood prepares a formal filing alleging systemic, unauthorized copyright infringement against defendant Elias Thorne regarding the bestselling novel 'Shadows of the Thames'.\n\nSupporting Exhibits:\n- Exhibit A: Verbatim side-by-side manuscript excerpts demonstrating that Thorne copied three pivotal narrative climax chapters from Blackwood's private journals.\n- Exhibit B: Sworn deposition from editor Marcus Sterling acknowledging that Blackwood had provided initial draft copies to Thorne in confidence during the 1986 Writers' Guild symposium.\n\nLegal Consequence: A finding in favor of the plaintiff would carry complete commercial recall, bankruptcy damages of £400,000, and permanent revocation of Thorne's publishing credentials."
        },
        {
          title: "HER MAJESTY'S CUSTOMS ILLICIT SUBSTANCE MANIFEST",
          content: "HM Customs & Excise Special Investigation Log:\n\nInterception Notice: Postal Consignment #HM-44091 from Rangoon, Burma.\n\nDeclared Contents: 'Artisanal Bookbinding Wax and Vegetable Resins'.\nActual Contents: Unrefined organic concentrates of Cyanogen alkaloids, classified under the 1971 Poisons Act.\n\nRecipient Address: Residential Box #14, St. Jude's Lane (registered pseudonym: E. T. Booksellers, traced directly to Elias Thorne).\n\nFinancial Linkage: Bank transfers through the Mercantile Union confirm Thorne paid £8,500 to an unregistered chemical supplier three weeks before Blackwood's demise."
        }
      ]
    },
    { 
      id: "envelope", 
      type: "photo", 
      text: "An elegant vintage envelope with a partially melted red wax seal on the mahogany desk.", 
      image: "assets/letter.png",
      inspector: {
        clueText: '🩸 FINGERPRINT MATCH DETECTED: ELIAS THORNE',
        clueStyle: 'top: 60px; left: 160px; transform: rotate(-8deg); font-size: 1.1rem; color: #a31c1c; text-shadow: 0 0 8px rgba(163, 28, 28, 0.4);'
      }
    },
    { 
      id: "inkwell", 
      type: "photo", 
      text: "A beautiful ornate glass inkwell tipped over, black ink pooling around it.", 
      image: "assets/ink.png",
      inspector: {
        clueText: '🧪 residue code label: Cyanogen-X',
        clueStyle: 'bottom: 40px; left: 80px; font-size: 1.2rem;'
      }
    },
    { 
      id: "toxicology", 
      type: "lab", 
      title: "TOXICOLOGY REPORT", 
      text: "Traces of a rare, lethal contact poison, 'Cyanogen-X', detected. The poison is inert when dry but extremely lethal when heated and touched." 
    },
    { 
      id: "wax_analysis", 
      type: "lab", 
      title: "MATERIAL ANALYSIS", 
      text: "The red sealing wax found on the envelope contains very high concentrations of Cyanogen-X. The ink in the tipped bottle is standard non-toxic India ink." 
    },
    { 
      id: "records", 
      type: "document", 
      title: "FINANCIAL RECORDS", 
      text: "Elias recently purchased 'rare botanical extracts' from a questionable overseas vendor known for supplying illicit toxic substances.",
      puzzle: {
        type: "cipher",
        title: "🔓 DECRYPT CIPHER WHEEL",
        instructions: "Rotate the brass dial code disc to find the alphabetical ROT key and decipher Thorne's ledger.",
        btnLabel: "🔓 DECRYPT",
        stampText: "DECRYPTED"
      }
    },
    { 
      id: "lawsuit", 
      type: "document", 
      title: "LAWSUIT THREAT", 
      text: "A drafted letter of litigation found in Percival's drawer, preparing a career-ending plagiarism lawsuit against Elias." 
    }
  ],
  solution: {
    suspect: "elias",
    method: "wax_poison",
    motive: "plagiarism_suit",
    evidence: ["envelope", "toxicology", "wax_analysis", "records"],
    narrative: "Elias purchased the illegal toxin and sent a poisoned block of artisanal sealing wax as an anonymous fan gift to Percival. When Percival happily melted the wax to seal his letter to the publisher, the intense heat activated the Cyanogen-X, turning it into a lethal contact poison that killed him instantly.",
    motiveText: "Deep resentment and professional ruin. Elias knew Percival had gathered the proof needed to file a career-ending plagiarism lawsuit against him. Eliminating his wildly successful rival was his twisted path to silencing the truth."
  },
  hints: [
    {
      level: 1,
      title: "HQ DISPATCH CABLE #1",
      text: "The tipped inkwell contains standard, non-toxic India ink. Re-read the butler's statement regarding an anonymous gift Percival was eager to use for sealing his new manuscript."
    },
    {
      level: 2,
      title: "FORENSIC TELETYPE #2",
      text: "Cyanogen-X is a transdermal contact poison that remains completely inert at room temperature. It only liquefies into a lethal neurotoxin under direct flame heat, such as molten sealing wax."
    }
  ]
};
