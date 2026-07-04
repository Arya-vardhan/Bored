/**
 * Mystery Game Case File Template
 * 
 * Use this file as a reference or copy it to create new cases.
 * Register new cases by adding them to index.html and index.js.
 */

window.case005 = {
  // Unique case identifier (e.g. case-005, case-abc)
  id: "case-005",

  // Title displayed in case selection and header
  title: "Case Title Here",

  // Incident date formatted as string
  date: "Month DD, YYYY",

  // The official police First Information Report text
  fir: "Detailed narrative describing the incident, scene findings, and what went missing...",

  // Dropdown options for Suspect selection
  suspectOptions: [
    { value: "culprit_id", label: "Culprit Name (Role)" },
    { value: "innocent_1", label: "Innocent A (Role)" },
    { value: "innocent_2", label: "Innocent B (Role)" }
  ],

  // Dropdown options for Execution Method selection
  methodOptions: [
    { value: "correct_method", label: "Description of the actual method used..." },
    { value: "wrong_method_1", label: "Distractor method option..." },
    { value: "wrong_method_2", label: "Distractor method option..." }
  ],

  // Dropdown options for Motive selection
  motiveOptions: [
    { value: "correct_motive", label: "Description of the actual reason..." },
    { value: "wrong_motive_1", label: "Distractor motive option..." },
    { value: "wrong_motive_2", label: "Distractor motive option..." }
  ],

  // List of witness statements displayed on the corkboard
  witnesses: [
    { 
      name: "Witness Name", 
      statement: "What this witness saw, heard, or suspect..." 
    }
  ],

  // Physical evidence and clue cards pinned on the corkboard
  evidence: [
    { 
      id: "clue_id_1", 
      type: "photo", // 'photo' | 'lab' | 'document'
      text: "Text summary written on the evidence card.", 
      image: "assets/thread.png", // Image path for photo cards
      // [OPTIONAL] Inspector magnifying lens details
      inspector: {
        clueText: "🔍 Microscopic text to reveal under the lens...",
        clueStyle: "top: 90px; left: 100px; font-size: 1.1rem; color: #a31c1c;" // Styling for hidden clue text layer
      }
    },
    { 
      id: "clue_id_2", 
      type: "lab", 
      title: "REPORT HEADER", 
      text: "Chemical analysis details..."
      // No inspector or puzzle property (normal visible card)
    },
    { 
      id: "clue_id_3", 
      type: "document", 
      title: "DOCUMENT TITLE", 
      text: "Official document text content...",
      // [OPTIONAL] Lab Puzzle Configuration (automatically locks card until solved)
      puzzle: {
        type: "cipher", // 'oscilloscope' | 'cipher' | 'shredder'
        title: "🔓 DECRYPT REPORT",
        instructions: "Instructions shown to the player...",
        btnLabel: "🔓 DECRYPT", // Label for button on the card
        stampText: "DECRYPTED", // Stamp overlay shown upon victory
        // Puzzle-specific parameters (passed to puzzle solver engine)
        config: {
          scrambled: "ENCRYPTED TEXT HERE",
          decrypted: "DECRYPTED TEXT HERE",
          rotKey: 3
        }
      }
    }
  ],

  // The correct solutions required to solve the case
  solution: {
    suspect: "culprit_id",
    method: "correct_method",
    motive: "correct_motive",
    evidence: ["clue_id_1", "clue_id_3"], // IDs of the evidence cards that MUST be linked
    narrative: "Final paragraph summarizing how the crime was committed, shown on case solved overlay.",
    motiveText: "Final paragraph summarizing the culprit's motive, shown on case solved overlay."
  }
};
