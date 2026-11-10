/**
 * Lab Workstation Puzzles Module
 */

// A. DNA / Oscilloscope Matcher Engine
window.loadOscilloscopePuzzle = function loadOscilloscopePuzzle(workspaceEl, puzzleConfig, onSolved, sfx) {
  workspaceEl.innerHTML = `
    <div class="oscilloscope-container">
      <div class="oscilloscope-screen">
        <div class="oscilloscope-label">🔬 COMPOSITIONAL SPECTROMETER</div>
        <canvas id="osci-canvas" width="600" height="120" class="osci-canvas"></canvas>
      </div>
      <div class="puzzle-controls">
        <div class="puzzle-slider-row">
          <label>Density (Silt)</label>
          <input type="range" id="slider-density" min="10" max="60" value="15">
          <span id="val-density">15</span>
        </div>
        <div class="puzzle-slider-row">
          <label>Frequency (Silt)</label>
          <input type="range" id="slider-frequency" min="4" max="24" value="6">
          <span id="val-frequency">6</span>
        </div>
        <div class="puzzle-slider-row">
          <label>Phase (Grids)</label>
          <input type="range" id="slider-phase" min="0" max="50" value="0">
          <span id="val-phase">0</span>
        </div>
      </div>
    </div>
  `;

  const canvas = document.getElementById('osci-canvas');
  if (!canvas) return { cleanup: () => {} };
  
  const sliderDensity = document.getElementById('slider-density');
  const sliderFrequency = document.getElementById('slider-frequency');
  const sliderPhase = document.getElementById('slider-phase');
  
  const valDensity = document.getElementById('val-density');
  const valFrequency = document.getElementById('val-frequency');
  const valPhase = document.getElementById('val-phase');
  
  // Use config values if provided, otherwise default to target values
  const targetD = puzzleConfig && puzzleConfig.targetD !== undefined ? puzzleConfig.targetD : 35;
  const targetF = puzzleConfig && puzzleConfig.targetF !== undefined ? puzzleConfig.targetF : 12;
  const targetP = puzzleConfig && puzzleConfig.targetP !== undefined ? puzzleConfig.targetP : 24;
  
  let t = 0;
  let osciInterval = null;
  
  function draw() {
    if (!canvas) return;
    const d = parseInt(sliderDensity.value);
    const f = parseInt(sliderFrequency.value);
    const p = parseInt(sliderPhase.value);
    
    valDensity.textContent = d;
    valFrequency.textContent = f;
    valPhase.textContent = p;
    
    const match = Math.abs(d - targetD) <= 3 && Math.abs(f - targetF) <= 1 && Math.abs(p - targetP) <= 2;
    
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    
    t += 0.6;
    
    // Target wave (green)
    ctx.strokeStyle = match ? '#39a85a' : 'rgba(57, 168, 90, 0.4)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let x = 0; x < w; x++) {
      const y = h/2 + Math.sin(x * 0.04 + (targetP * 0.05) + t * 0.05) * targetD;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Player wave (red)
    if (!match) {
      ctx.strokeStyle = '#d83131';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < w; x++) {
        const y = h/2 + Math.sin(x * (f * 0.0033) + (p * 0.05) + t * 0.05) * d;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    } else {
      sliderDensity.disabled = true;
      sliderFrequency.disabled = true;
      sliderPhase.disabled = true;
      
      clearInterval(osciInterval);
      onSolved();
    }
  }
  
  sliderDensity.addEventListener('input', draw);
  sliderFrequency.addEventListener('input', draw);
  sliderPhase.addEventListener('input', draw);
  
  osciInterval = setInterval(draw, 80);

  return {
    cleanup: () => {
      clearInterval(osciInterval);
    }
  };
}

// B. Brass Code Disk ROT Cipher Engine
window.loadCipherPuzzle = function loadCipherPuzzle(workspaceEl, puzzleConfig, onSolved, sfx) {
  workspaceEl.innerHTML = `
    <div class="cipher-container">
      <div class="cipher-disc-wrapper" id="cipher-disc" style="transform: rotate(0deg);">
        <div class="cipher-letters" id="cipher-letters-ring"></div>
        <div class="cipher-center-hub">ROT</div>
        <div class="cipher-arrow">▲</div>
      </div>
      <div class="cipher-actions" style="display: flex; gap: 15px; margin-top: 10px;">
        <button type="button" class="submit-btn secondary-btn" id="cipher-prev-btn" style="height: 38px; padding: 0 1rem; font-size: 0.8rem;">↺ ROTATE LEFT</button>
        <button type="button" class="submit-btn secondary-btn" id="cipher-next-btn" style="height: 38px; padding: 0 1rem; font-size: 0.8rem;">↻ ROTATE RIGHT</button>
      </div>
      <div class="cipher-text-display" id="cipher-text-display">
        Scrambled Text Loading...
      </div>
    </div>
  `;

  const cipherLettersRing = document.getElementById('cipher-letters-ring');
  const cipherDisc = document.getElementById('cipher-disc');
  const cipherPrevBtn = document.getElementById('cipher-prev-btn');
  const cipherNextBtn = document.getElementById('cipher-next-btn');
  const cipherTextDisplay = document.getElementById('cipher-text-display');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const discRadius = (cipherDisc && cipherDisc.clientWidth) ? (cipherDisc.clientWidth / 2) : 90;
  const letterRadius = discRadius * 0.72;
  for (let i = 0; i < 26; i++) {
    const angle = i * (360 / 26);
    const node = document.createElement('div');
    node.className = 'cipher-letter-node';
    node.textContent = alphabet[i];
    const rad = (angle - 90) * (Math.PI / 180);
    const x = discRadius + Math.cos(rad) * letterRadius - 10;
    const y = discRadius + Math.sin(rad) * letterRadius - 10;
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.transform = `rotate(${angle}deg)`;
    cipherLettersRing.appendChild(node);
  }

  const scrambled = puzzleConfig && puzzleConfig.scrambled
    ? puzzleConfig.scrambled
    : "HOLD-G RWDDOQLFD HAWUDFWV SXUFKDVHG EB HOLDV. WRALF ERWDQLFDO HAWUDFWV LGHQWLILHG DV EODFNZRRB ARALQ.";
  const decryptedTarget = puzzleConfig && puzzleConfig.decrypted
    ? puzzleConfig.decrypted
    : "RARE BOTANICAL EXTRACTS PURCHASED BY ELIAS. TOXIC BOTANICAL EXTRACTS IDENTIFIED AS BLACKWOOD TOXIN.";
  const rotKey = puzzleConfig && puzzleConfig.rotKey !== undefined ? puzzleConfig.rotKey : 3;

  let key = 0;

  function updateDecryption() {
    if (sfx) sfx.playClick();
    cipherDisc.style.transform = `rotate(${-key * (360/26)}deg)`;
    
    if (key === rotKey) {
      cipherTextDisplay.innerHTML = `<span style="color: #39a85a; font-weight: bold;">✓ DECRYPTED:</span> ${decryptedTarget}`;
      cipherPrevBtn.disabled = true;
      cipherNextBtn.disabled = true;
      onSolved();
    } else {
      let displayStr = '';
      for (let i = 0; i < scrambled.length; i++) {
        const char = scrambled[i];
        const idx = alphabet.indexOf(char);
        if (idx !== -1) {
          displayStr += alphabet[(idx - key + 26) % 26];
        } else {
          displayStr += char;
        }
      }
      cipherTextDisplay.textContent = displayStr;
    }
  }

  cipherPrevBtn.addEventListener('click', () => {
    key = (key - 1 + 26) % 26;
    updateDecryption();
  });

  cipherNextBtn.addEventListener('click', () => {
    key = (key + 1) % 26;
    updateDecryption();
  });

  cipherTextDisplay.textContent = scrambled;

  return { cleanup: () => {} };
}

// C. Shredded Document Restoration Engine
window.loadShredderPuzzle = function loadShredderPuzzle(workspaceEl, puzzleConfig, onSolved, sfx) {
  workspaceEl.innerHTML = `
    <div class="shredred-container" id="shredder-grid"></div>
    <p style="font-family: var(--font-typewriter); font-size: 0.75rem; color: #888; text-align: center; margin-top: 10px;">Click one shred, then click another to swap their positions.</p>
  `;

  const shredderGrid = document.getElementById('shredder-grid');
  
  const totalStrips = puzzleConfig && puzzleConfig.totalStrips !== undefined ? puzzleConfig.totalStrips : 5;
  const targetSequence = puzzleConfig && puzzleConfig.targetSequence ? puzzleConfig.targetSequence : [0, 1, 2, 3, 4];
  const startSequence = puzzleConfig && puzzleConfig.startSequence ? puzzleConfig.startSequence : [3, 1, 4, 0, 2];
  const stripWidth = puzzleConfig && puzzleConfig.stripWidth !== undefined ? puzzleConfig.stripWidth : 72;

  let currentSequence = [...startSequence];
  let selectedIdx = null;

  const defaultHtml = `
    <div class="shred-content-block" style="left: -VAL_PLACEHOLDERpx;">
      <div style="border-bottom: 2px solid #111; font-weight: bold; margin-bottom: 8px; text-align: center; font-size: 0.75rem;">CONFIDENTIAL BANK LEDGER</div>
      <div style="font-weight: bold;">CID ACCT SEARCH: MS. VANCE</div>
      <div>STATUS: UNRESTRICTED ARCHAEOLOGY FUND</div>
      <div>CURRENT BALANCE: £0.00 (OVERDRAWN)</div>
      <div style="border-bottom: 1.5px dashed #444; margin: 8px 0;">TRANSFERS (EXPEDITION FUND):</div>
      <div>• MAY 12: £1,500,000 TRANSFER</div>
      <div>• JUNE 29: £800,000 TRANSFER</div>
      <div style="font-weight: bold; color: var(--accent); margin-top: 8px; font-size: 0.7rem; text-decoration: underline;">OVERDRAFT LIABILITY IN BLACKMARKET EXPEDITION</div>
    </div>
  `;

  const shredsHtml = puzzleConfig && puzzleConfig.shredsHtml ? puzzleConfig.shredsHtml : defaultHtml;

  function renderShreds() {
    shredderGrid.innerHTML = '';
    
    currentSequence.forEach((val, index) => {
      const strip = document.createElement('div');
      strip.className = 'shred-strip';
      if (selectedIdx === index) {
        strip.style.border = '2.5px solid var(--accent)';
        strip.style.boxShadow = '0 0 10px var(--accent)';
      }
      
      const leftOffset = val * stripWidth;
      const replacedHtml = shredsHtml.replace('VAL_PLACEHOLDER', leftOffset);
      strip.innerHTML = replacedHtml;

      strip.addEventListener('click', () => {
        if (sfx) sfx.playClick();
        if (selectedIdx === null) {
          selectedIdx = index;
          renderShreds();
        } else {
          const temp = currentSequence[selectedIdx];
          currentSequence[selectedIdx] = currentSequence[index];
          currentSequence[index] = temp;
          
          selectedIdx = null;
          renderShreds();
          
          const win = currentSequence.every((val, i) => val === targetSequence[i]);
          if (win) {
            document.querySelectorAll('.shred-strip').forEach(el => {
              el.style.border = '1px solid #39a85a';
              el.style.boxShadow = '0 0 12px rgba(57, 168, 90, 0.4)';
              el.style.cursor = 'default';
              const clone = el.cloneNode(true);
              el.parentNode.replaceChild(clone, el);
            });
            onSolved();
          }
        }
      });

      shredderGrid.appendChild(strip);
    });
  }

  renderShreds();

  return { cleanup: () => {} };
}
