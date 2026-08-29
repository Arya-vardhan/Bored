window.case004 = {
  // Unique case identifier
  id: "case-004",

  // Title displayed in case selection and header
  title: "The Clockwork Alibi",

  // Incident date formatted as string
  date: "January 1, 1987",

  // The official police First Information Report text
  fir: "Incident: Capital Homicide. Victim: Benedict Thorne (Age: 67), Master Horologist. Location: Thorne Horological Sanctuary, Riverbed Lane. Discovery Time: January 1, 1987, 00:20 Hours. Cause of Death: Penetrating chest trauma causing acute cardiac tamponade via mechanical lance deployment. Physical Evidence: Custom spring-tensioned gear assembly locked into the workshop's primary structural drive-shaft. Main pendulum of the central grandfather clock halted precisely at midnight.",

  // Dropdown options for Suspect selection
  suspectOptions: [
    { value: "julian", label: "Julian Thorne (Lead Apprentice)" },
    { value: "gideon", label: "Gideon Vance (Rival Horologist)" },
    { value: "beatrix", label: "Beatrix Thorne (Eldest Daughter)" }
  ],

  // Dropdown options for Execution Method selection
  methodOptions: [
    { value: "delayed_escapement", label: "Rigged a delayed gravity escapement to execute Benedict at 10:00 PM and halt the pendulum at 12:00 AM" },
    { value: "direct_assassination", label: "Infiltrated the workshop at midnight to kill Benedict directly and stop the clock manually" },
    { value: "clock_rigging", label: "Wired the clock's pendulum to fire the spring-loaded lance immediately at midnight" }
  ],

  // Dropdown options for Motive selection
  motiveOptions: [
    { value: "patent_theft", label: "Claim sole credit and financial gain for the Aethelgard Escapement patent" },
    { value: "corporate_revenge", label: "Avenge multiple public litigations regarding corporate gear profile theft" },
    { value: "estate_inheritance", label: "Secure the family estate's liquidation assets after being disinherited" }
  ],

  // List of witness statements displayed on the corkboard
  witnesses: [
    { 
      name: "Julian Thorne (Apprentice)", 
      statement: "I was at the town square presenting the Great Clock tower from 11:30 PM to 12:15 AM. Hundreds of people saw me, and it was broadcasted live. Benedict was going to submit the patent application soon; he said it was the culmination of both our lives' work." 
    },
    { 
      name: "Gideon Vance (Rival)", 
      statement: "Benedict had been suing me for years over gear profiles, trying to ruin my business. I was drinking at the local tavern by the river junction from 10:00 PM onwards. I didn't see anyone, and I was drinking alone, but I had nothing to do with his death." 
    },
    { 
      name: "Beatrix Thorne (Daughter)", 
      statement: "My father disinherited me years ago because I chose music over gears. I was at my piano studio all night. I don't care about his clocks or his patents, and I certainly wouldn't know how to build those overly complex machines of his." 
    }
  ],

  // Physical evidence and clue cards pinned on the corkboard
  evidence: [
    { 
      id: "victim_dossier", 
      type: "folder", 
      title: "VICTIM PROFILE & BACKGROUND", 
      text: "Open dossier for victim diary excerpts, patent records, and workshop mechanics.",
      documents: [
        {
          title: "PERSONAL PROFILE & DAILY TIMELINE",
          content: "Victim: Benedict Thorne (Age 67)\nOccupation: Master Horologist\nLocation: Thorne Horological Sanctuary, Riverbed Lane\n\nA strict, solitary man who dedicated his life to high-complication mechanical timing. Benedict lived and worked in his riverside sanctuary, powered by the large timber water wheel. He kept few companions, other than his adopted apprentice Julian, and was estranged from his eldest daughter, Beatrix.\n\nOn December 31, 1986, Benedict was seen working at his desk by neighbors as early as 8:00 PM. He was last heard alive at approximately 9:30 PM by a delivery boy leaving a coal shipment at the workshop gate."
        },
        {
          title: "THE AETHELGARD PATENT DISPUTE",
          content: "A confidential draft of the 'Aethelgard Escapement' patent application was found locked in Benedict's safe. It describes a revolutionary hydrostatic perpetual motion design that draws energy from the river's pressure shifts to remain wound forever.\n\nCrucially, the patent lists Benedict Thorne as the sole inventor, with no credit or financial sharing allocated to Julian, who had spent years co-designing the escapement. Correspondence records show a heated argument occurred between the two on December 28 over this document."
        },
        {
          title: "WORKSHOP POWER MECHANICS",
          content: "Sanctuary Blueprint Observations:\n- The entire workshop's secondary gear shafts, lathe pulleys, and timing lines are driven by the massive timber waterwheel outside.\n- When active, the waterwheel rotates at a steady, regulated 60 RPM.\n- The primary lathe in the corner has a custom pitch setting of 4.5mm. Any bespoke gear milled on this lathe would carry this exact thread profile."
        }
      ]
    },
    { 
      id: "scene_dossier", 
      type: "folder", 
      title: "CRIME SCENE & OBSERVATIONS", 
      text: "Open dossier for scene photos, coroner timeline analysis, and recovered logs.",
      documents: [
        {
          title: "POLICE OBSERVATIONS & TIME PARADOX",
          content: "Initial Scene Observations (Jan 1, 1987, 00:20 Hours):\n- Benedict Thorne is pinned to his desk by a spring-loaded driving apparatus containing milled steel gears and a blade.\n- The central grandfather clock overlooking his body has halted precisely at 12:00:00 AM, its massive iron pendulum snapped at the hanger.\n\nThe alibi of Julian Thorne is ironclad for midnight: he was on live, televised television presenting the town's square Great Clock tower from 11:30 PM to 12:15 AM, witnessed by hundreds.\n\nHowever, the medical examiner's report states that rigor mortis and body temperature placement put Benedict's time of death between 9:30 PM and 10:30 PM. This creates a temporal paradox: how did the grandfather clock stop at midnight if Benedict died two hours earlier?"
        },
        {
          title: "EVIDENCE LOG & FORENSIC TESTS",
          content: "Item #1: Custom Spring-Tensioned Gear Assembly\nFound locked directly into the workshop's overhead primary drive shaft. The lathe tooling profile matches a 4.5mm pitch, identifying it as custom-milled within this workshop. It was rigged to a slow-release gravity track.\n\nItem #2: The Snapped Pendulum\nThe pendulum hanger on the grandfather clock is clean but snapped. Nearby, an iron rod welded to a trip-latch was recovered. It seems designed to strike the pendulum rod and stop the clock mechanism.\n\nItem #3: Shattered Pocket Watch\nBenedict's silver watch was found on the floorboards, stopped at 12:00. However, laboratory inspection shows the watch balance spring has no impact micro-deformities. The crystal was crushed post-mortem, and the hands were wound forward manually to simulate a midnight impact.\n\nItem #4: Bloodied Craftsman Glove\nStained leather glove recovered from Julian's locker. Chemical screening confirms the red fluid is a mixture of porcine (pig) blood and tanning oils, used in the workshop for curing leather drive belts."
        }
      ]
    },
    { 
      id: "gear_assembly_report", 
      type: "photo", 
      image: "assets/gear.png",
      text: "A custom spring-tensioned gear assembly locked into the workshop's primary structural drive-shaft.",
      inspector: {
        clueText: "⚙️ 4.5mm lathe pitch • planetary reduction gear locked to drive axle",
        clueStyle: "bottom: 30px; left: 40px; font-size: 1.1rem; color: #a31c1c; font-weight: bold;"
      }
    },
    { 
      id: "pocket_watch_analysis", 
      type: "photo", 
      image: "assets/watch.png",
      text: "Benedict's shattered silver pocket watch recovered beside the workshop desk.",
      inspector: {
        clueText: "🔍 balance spring intact: manual post-mortem winding to simulate 12:00",
        clueStyle: "bottom: 35px; left: 35px; font-size: 1.1rem; color: #1b365d; font-weight: bold;"
      }
    },
    { 
      id: "grandfather_clock_report", 
      type: "document", 
      title: "PENDULUM FORENSICS", 
      text: "The main pendulum of the grandfather clock. It was snapped by a horizontal blow from a trip-latch mechanism welded to the waterwheel timing shafts.",
      inspector: {
        clueText: "⚙️ horizontal strike shear mark: triggered by waterwheel trip-latch at midnight",
        clueStyle: "bottom: 40px; left: 40px; font-size: 1.15rem; color: #a31c1c;"
      }
    },
    { 
      id: "glove_fluid_report", 
      type: "lab", 
      title: "FORENSIC FLUID REPORT", 
      text: "A stained leather glove found in the locker. The stains contain organic oils and porcine blood, matching high-tension drive belt lubricants rather than human trauma.",
      inspector: {
        clueText: "🧪 porcine lipids & belt curing oils: rules out manual assault",
        clueStyle: "bottom: 35px; left: 50px; font-size: 1.15rem; color: #39a85a;"
      }
    },
    { 
      id: "patent_draft", 
      type: "document", 
      title: "AETHELGARD PATENT DRAFT", 
      text: "A draft patent listing Benedict Thorne as the sole inventor of the hydrostatic perpetual motion timing mechanism.",
      inspector: {
        clueText: "✒️ Sole Inventor: Benedict Thorne (Julian Thorne completely omitted)",
        clueStyle: "bottom: 40px; right: 40px; font-size: 1.15rem; color: #a31c1c;"
      }
    },
    { 
      id: "escapement_schematic", 
      type: "document", 
      title: "REDUCTION GEAR DESIGN", 
      text: "Calculations detailing a 12:1 reduction gear ratio on a waterwheel drive axle, designed to release tension after exactly 120 minutes of operation.",
      inspector: {
        clueText: "📐 12:1 planetary reduction ratio: 60 RPM waterwheel = exactly 120 min delay",
        clueStyle: "bottom: 40px; left: 40px; font-size: 1.15rem; color: #1b365d;"
      },
      puzzle: {
        type: "cipher",
        title: "🔓 DECRYPT APPRENTICE TIMING CIPHER",
        instructions: "Rotate the brass dial code disc to find the alphabetical ROT key and decipher Julian's handwritten timing notes.",
        btnLabel: "🔓 DECRYPT SCHEMATIC",
        stampText: "DECRYPTED",
        lockedText: "🔓 ENCRYPTED HOROLOGICAL CALCULATIONS. Decipher the apprentice's secret gear ratio notes to reveal the timing mechanism.",
        config: {
          scrambled: "VIHYGXMSR KIEV VEXMS XAIPZI XS SRI. VIPIEWI PERGI EX XIR TQ ERH LEPX TIRHYPYQ EX QMHRMKLX.",
          decrypted: "REDUCTION GEAR RATIO TWELVE TO ONE. RELEASE LANCE AT TEN PM AND HALT PENDULUM AT MIDNIGHT.",
          rotKey: 4
        }
      }
    }
  ],

  // The correct solutions required to solve the case
  solution: {
    suspect: "julian",
    method: "delayed_escapement",
    motive: "patent_theft",
    evidence: ["gear_assembly_report", "grandfather_clock_report", "patent_draft", "escapement_schematic"],
    narrative: "Julian Thorne engineered a delayed gravity escapement in Benedict's workshop, setting the planetary reduction gears before leaving for his public alibi. At 10:00 PM, the weight triggered a spring-loaded lance that killed Benedict. The mechanism continued to draw power from the waterwheel until 12:00 AM, at which point an auxiliary trip-latch snapped the grandfather clock's pendulum, creating a false temporal signature of midnight.",
    motiveText: "Julian discovered that Benedict intended to file the revolutionary Aethelgard Escapement patent solely in his own name. Out of resentment and greed, Julian executed his master to claim sole credit and all future financial earnings for the invention."
  }
};
