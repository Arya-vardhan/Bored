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
    { name: "Rival Author (Elias)", statement: "I hated his guts, sure. Everyone says he stole my ideas for his latest bestseller. But I was at the pub all evening. Ask anyone." },
    { name: "Butler (Jeeves)", statement: "Master Percival was furious earlier. He received a special delivery of artisanal sealing wax from an anonymous fan. He insisted on using it for his new manuscript." },
    { name: "Publisher", statement: "Percival called me in a panic yesterday, saying he finally gathered undeniable proof that Elias was heavily plagiarizing him, and he was sending me the proof via mail today." }
  ],
  evidence: [
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
  }
};
