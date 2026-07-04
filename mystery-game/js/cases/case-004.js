window.case004 = {
  id: "case-004",
  title: "The Dragon's Fire",
  date: "December 18, 1987",
  fir: "Incident: High-Tech Heist. Missing: 'The Dragon's Fire', a priceless 100-carat crimson ruby. The security vault of the City Bank was breached overnight. Curiously, the physical door mechanism was untouched, but the surrounding high-voltage laser protection grid was temporarily deactivated using a custom frequency override.",
  suspectOptions: [
    { value: "draken", label: "Draken (Security Grid Engineer)" },
    { value: "banks", label: "Mr. Banks (Bank Manager)" },
    { value: "viper", label: "Viper (Notorious Safecracker)" }
  ],
  methodOptions: [
    { value: "laser_bypass", label: "Overrode the laser grid with a custom-tuned frequency transmitter and slipped inside" },
    { value: "vault_tunnel", label: "Tunneled up from the subway system beneath the bank vault floor" },
    { value: "manager_key", label: "Cloned the manager's master physical vault key during his lunch break" }
  ],
  motiveOptions: [
    { value: "blackmarket_collector", label: "Settle an astronomical black-market debt with an underground art dealer" },
    { value: "insurance_fraud", label: "Split the multi-million dollar insurance payout with the bank's underwriters" },
    { value: "grid_revenge", label: "Expose vulnerabilities in the bank's security layout to ruin his employer's reputation" },
    { value: "grid_revenge", label: "Expose vulnerabilities in the bank's security layout to ruin his employer's reputation" }
  ],
  witnesses: [
    { name: "Security Engineer (Draken)", statement: "I was off-duty that night. The vault security layout is solid—only someone with my custom testing transmitter could override the laser frequencies, and mine was locked in my safe." },
    { name: "Bank Manager (Mr. Banks)", statement: "I lock the bank every evening. I didn't see anyone enter. The vault's entry logs showed no physical door activity, which is simply impossible unless the lasers were deactivated first." },
    { name: "Safecracker (Viper)", statement: "I'm clean! Why build a tunnel or copy keys when someone can just shut down the lasers? Ask Draken what he did with his private frequency controller." }
  ],
  evidence: [
    { 
      id: "transmitter", 
      type: "photo", 
      text: "A metallic pocket frequency transmitter recovered near the vault entrance ventilation duct.", 
      image: "assets/flashlight.png",
      inspector: {
        clueText: '📡 Serial Number: DX-990-DRAKEN',
        clueStyle: 'top: 100px; left: 110px; font-size: 1.1rem; color: #a31c1c;'
      }
    },
    { 
      id: "schematic", 
      type: "document", 
      title: "LASER FIELD SCHEMATICS", 
      text: "Technical layout blueprints of the bank's laser defense grid, detailing frequency thresholds and bypass ports.",
      inspector: {
        clueText: '✏️ Pencil note: override target 45.2 MHz',
        clueStyle: 'bottom: 50px; right: 50px; font-size: 1.2rem;'
      }
    },
    { 
      id: "fingerprint", 
      type: "photo", 
      text: "A clean fingerprint lifted from the transmitter's power button casing.", 
      image: "assets/thread.png",
      inspector: {
        clueText: '🩸 Print Match: Draken (Security Firm Index)',
        clueStyle: 'top: 90px; left: 110px; font-size: 1.2rem; color: #a31c1c;'
      }
    },
    { 
      id: "logs", 
      type: "document", 
      title: "BANK TRANSMISSION LOGS", 
      text: "The encrypted diagnostic reports from the night of the heist, containing a sequence of external RF bypass attempts.",
      puzzle: {
        type: "cipher",
        title: "🔓 DECRYPT SECURITY LOGS",
        instructions: "Decode the encrypted RF diagnostic stream to confirm the transmitter's unique broadcast ID.",
        btnLabel: "🔓 DECRYPT",
        stampText: "DECRYPTED",
        config: {
          scrambled: "XQLTXH WUDQVPLWWHU LG GHWHFWHG: GUDNHQ-GB[-NPA. RF DFWLYDWLRN PORT WHPSRUDULOE EESDVVHG.",
          decrypted: "UNIQUE TRANSMITTER ID DETECTED: DRAKEN-DX-KMX. RF ACTIVATION PORT TEMPORARILY BYPASSED.",
          rotKey: 3
        }
      }
    }
  ],
  solution: {
    suspect: "draken",
    method: "laser_bypass",
    motive: "blackmarket_collector",
    evidence: ["transmitter", "fingerprint", "logs", "schematic"],
    narrative: "Draken constructed a duplicate pocket frequency transmitter using parts from his security firm. He used the pencil frequency notes on the laser schematic to tune his transmitter to 45.2 MHz, deactivating the bank's laser grid. He then slipped through the ventilation duct, bypassing the vault door sensors completely.",
    motiveText: "Draken was heavily indebted to a black-market collector who demanded the ruby in exchange for clearing his debts. Knowing the exact frequency settings of the lasers, he carried out the theft in confidence."
  }
};
