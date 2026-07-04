window.case003 = {
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
    { 
      id: "shoes", 
      type: "photo", 
      text: "Expensive Oxford dress shoes caked in wet mud and dried leaves.", 
      image: "assets/shoes.png",
      inspector: {
        clueText: '🍂 soil particles: peat & river moss',
        clueStyle: 'bottom: 60px; left: 80px; font-size: 1.2rem;'
      }
    },
    { 
      id: "flashlight", 
      type: "photo", 
      text: "A heavy metallic flashlight rolling on the museum floor, bulb still faintly glowing.", 
      image: "assets/flashlight.png",
      inspector: {
        clueText: '🩸 guard head skin fibers & dried blood splatter',
        clueStyle: 'top: 100px; left: 110px; transform: rotate(10deg); font-size: 1.2rem; color: #a31c1c;'
      }
    },
    { 
      id: "forensic", 
      type: "lab", 
      title: "FORENSIC ANALYSIS", 
      text: "The flashlight casing has traces of hair and blood matching the security guard. It was clearly the weapon used to knock him out." 
    },
    { 
      id: "logs", 
      type: "document", 
      title: "MUSEUM LOGS", 
      text: "Boris is required to wear standard issued rubber-soled work boots to avoid slipping. Ms. Vance recently returned from an outdoor expedition and was wearing high-end Oxford shoes today." 
    },
    { 
      id: "replica", 
      type: "document", 
      title: "REPLICA EXAMINATION", 
      text: "The fake painting has faint traces of glow-in-the-dark paint around the edges, suggesting someone needed to see the edges of the frame specifically in the pitch black.",
      inspector: {
        clueText: '🎨 glow-in-the-dark margins: ms. vance',
        clueStyle: 'top: 70px; left: 90px; transform: rotate(-5deg); font-size: 1.1rem; color: #39a85a;'
      }
    },
    { 
      id: "bank", 
      type: "document", 
      title: "BANK STATEMENT", 
      text: "Ms. Vance's personal accounts are severely overdrawn, transferring millions into an offshore 'Expedition Fund' over the last six months.",
      puzzle: {
        type: "shredder",
        title: "🧩 RESTORE SHREDDED STATEMENT",
        instructions: "Click two shredded paper strips to swap them and reconstruct the transaction statement.",
        btnLabel: "🧩 RESTORE",
        stampText: "RESTORED"
      }
    }
  ],
  solution: {
    suspect: "vance",
    method: "glow_paint",
    motive: "expedition_fund",
    evidence: ["shoes", "logs", "replica", "bank"],
    narrative: "Ms. Vance orchestrated the power outage to execute the heist in pitch black. She utilized glow-in-the-dark paint strictly on the inside frame of the replica painting to swap them correctly without turning on a light. During the swap, she used her heavy metallic flashlight to bludgeon the guard. Her footprint mud matches her high-end oxfords.",
    motiveText: "Ms. Vance's obsession with a deeply restricted and expensive archaeological expedition left her utterly bankrupt. She needed the illicit funds from selling her museum's very own masterpiece on the black market to finance her private obsessions."
  }
};
