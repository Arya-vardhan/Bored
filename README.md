# Bored? — The AI-Collaborative Detective Case Solver 🔍🕵️‍♂️

Welcome to **Bored?**, a fully immersive, dark-themed single-page detective mystery game. Step into the shoes of a lead investigator in 1987, review crime files, link physical evidence on a custom corkboard using red string connections, examine clues under a magnifying lens, and solve laboratory decryption mini-games to cracked cases.

This project is built with **zero external libraries or frameworks**—relying entirely on pure Vanilla JavaScript, custom CSS3, and standard Web APIs.

---

## 🤖 The AI + Human Collaboration Story

This project is a genuine showcase of human-AI pair programming. It was co-designed and coded hand-in-hand by a human developer and **Antigravity** (an advanced AI developer agent designed by Google DeepMind).

Instead of relying on boilerplate templates or heavy frameworks, we collaborated to write every single element from scratch. Here is how we divided the work:

*   **The Human Developer**:
    *   **Creative Direction**: Designed the 1980s CID crime department theme, user flows, and aesthetic requirements.
    *   **Case Narratives & Plotlines**: Penned the complex case files (*The Locked Room Enigma*, *The Poisoned Pen*, and *The Midnight Phantom*), including clues, red herrings, motives, and deduction options.
    *   **Architecture & Logic Review**: Directed the game state transitions and designed the logic behind the suspect-elimination notepad.

*   **The AI Developer Agent**:
    *   **Rich UI & Aesthetic Styling**: Crafted the responsive CSS grid layouts, typography hierarchies (featuring Courier Prime and Permanent Marker), glassmorphism modal panels, and custom-designed elements like paper binding, confidential folders, and polaroid tape.
    *   **SVG Red String Physics**: Wrote the math to track corkboard coordinates and render curved red strings between thumbtacks with realistic gravity-sag using quadratic Bezier curves.
    *   **Web Audio API Procedural Synthesizer**: Implemented the sound effects system using direct web audio oscillator manipulation instead of downloading bulky static audio files.
    *   **Interactive Lab Puzzles**: Generated the logic and rendering engines for the Spectroscopy canvas wave alignment, the rotatable Cipher Disk, and the Shredded Document restoration mini-games.

---

## 🌟 Core Features & Workings

### 1. The Interactive Corkboard & SVG String Board
When analyzing a case, clues and witness statements are pinned onto a classic corkboard. 
*   **The Clue Linker**: Players select any two clues from the board to link them.
*   **Gravity-Sag SVG Strings**: Once two clues are linked, the game dynamically calculates the exact position of their thumbtacks, scales the coordinates relative to scroll margins, and draws a red thread connecting them.
*   *The Math*: It computes the distance ($d$) and midpoint coordinates, applying a quadratic bezier control point that pulls the curve downward to simulate natural gravity rope sag:
    $$\text{sag} = d \times 0.12 + 25$$
    The path is rendered inside an SVG overlay using:
    `d="M x1 y1 Q mx (my + sag) x2 y2"`

### 2. Procedural Audio Synthesizer (Web Audio API)
To keep the website lightweight (under 150KB total size) and eliminate static asset loading delays, the game features a built-in synthesizer controller.
*   **Tactile Click**: Emits a soft, rounded sine wave frequency ramp (600Hz down to 90Hz in 30ms) to simulate a physical computer terminal key press.
*   **Thumbtack Push**: Emits a low-frequency wooden thumbtack punch (350Hz down to 80Hz in 80ms) when linking evidence.
*   **Folder Friction**: Fills a buffer with white noise and passes it through a real-time `bandpass` filter centered around 350Hz, rapidly decaying it over 100ms to mimic paper sliding.

### 3. Microscopic Clue Inspector
Every physical photo and document contains hidden forensic indicators.
*   **Optical Lens Simulation**: Clicking "Inspect" opens a dual-layered layout containing a grayscale reference card and a secondary sepia-toned zoomed card.
*   **Coordinate-Translated Zoom**: As the player drags the circular brass lens over the card, the game captures relative coordinates and translates the background alignment of the hidden zoom div at a `2x` scale:
    $$\text{zoomLeft} = -(\text{mouseX}) \times 2 + 80$$
    $$\text{zoomTop} = -(\text{mouseY}) \times 2 + 80$$
*   This reveals micro-details like hair fibers on a flashlight, fingerprint dust on an envelope, or tiny handwritten notes on a receipt.

### 4. Interactive Laboratory Workstations
Before certain pieces of evidence can be linked, the player must process them in the lab:
*   **Spectrometric Silt Alignment**: An HTML5 Canvas puzzle where players use sliders to adjust wave density, frequency, and phase to match a reference composite wave.
*   **Decryption Cipher Wheel**: A visual rotating disk where players shift letters using standard ROT cipher algorithms (ROT-3) to translate encrypted syndicate purchases.
*   **Shredded Statement Restoration**: A jigsaw-style column reconstruction puzzle where players swap adjacent shredded strips of paper until the bank ledger aligns.

### 5. Detective Notebook Drawer
A collapsible drawer containing:
*   A checklist of suspects where players can cross off names (stamping them "RULED OUT" on the notepad).
*   A typewriter-styled notepad area for typing custom case summaries.
*   All notebook states, input dropdowns, and solved statuses are automatically synchronized to `localStorage` so players can close the browser and resume their investigation later.

---

## 🛠️ Codebase Structure

The project has been organized with simple, fast-loading architecture:

```
├── README.md               # GitHub presentation page (This file)
├── index.html              # Entry point (auto-redirects to the game)
└── mystery-game/
    ├── index.html          # Main HTML structure, notebooks, and modals
    ├── styles.css          # Core design system, folders, polaroids, & transitions
    ├── app.js              # Case data, procedural sound, puzzles, and view controllers
    └── assets/             # Polaroid photos, textures, and UI icons
```

---

## 🚀 How to Run Locally

Since the game is written in pure vanilla web technologies, there is **no installation or build step required**.

1. Clone this repository:
   ```bash
   git clone https://github.com/Arya-vardhan/Bored.git
   ```
2. Navigate to the folder:
   ```bash
   cd Bored
   ```
3. Open `index.html` in your favorite web browser (or run a simple local server like VS Code Live Server / `python -m http.server`).

*Note: For the Web Audio API to initialize correctly on some browsers, you may need to click or tap the screen once to authorize audio playback.*

---

## 📖 The Case Catalog

1.  **Case MPD-1987-001: The Locked Room Enigma**
    *   *Incident*: Theft of "The Eye of Leviathan" sapphire from a room secured from the inside.
    *   *Lab Tech Required*: Spectrometer silt wave-alignment.
2.  **Case MPD-1987-002: The Poisoned Pen**
    *   *Incident*: A wealthy author found dead at his desk, poisoned by a mysterious contact toxin.
    *   *Lab Tech Required*: ROT-3 cipher disc decryption.
3.  **Case MPD-1987-003: The Midnight Phantom**
    *   *Incident*: Art museum heist in pitch black where an original 16th-century painting was swapped.
    *   *Lab Tech Required*: Shredded ledger statement reconstruction.
4.  **Case MPD-1987-004: The Clockwork Alibi**
    *   *Incident*: Master horologist found murdered in his riverside sanctuary, with the central grandfather clock pendulum snapped at midnight despite death occurring hours earlier.
    *   *Lab Tech Required*: Apprentice timing cipher wheel decryption & multi-document dossier analysis.
