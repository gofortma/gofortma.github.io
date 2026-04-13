const answers = {
  1: "open",
  2: "mode",
  3: "key",
  4: "secret",
  5: "hero",
  6: "inspector",
  7: "harder",
  8: "master"
};
const solved = {1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false};

function normalize(val) {
  return val.trim().toLowerCase().replace(/^flag\{|\}$/g, '');
}

function updateProgress() {
  const n = Object.values(solved).filter(Boolean).length;
  document.getElementById('prog-fill').style.width = (n / 8 * 100) + '%';
  document.getElementById('prog-label').textContent = n + ' / 8 captured';
  if (n === 8) setTimeout(() => { document.getElementById('victory').style.display = 'block'; document.getElementById('victory').scrollIntoView({behavior:'smooth'}); }, 500);
}

function check(stage) {
  const raw = document.getElementById('i' + stage).value;
  const val = normalize(raw);
  const fb = document.getElementById('f' + stage);
  if (val === answers[stage]) {
    solved[stage] = true;
    fb.className = 'feedback ok';
    fb.textContent = '✓ Correct! Flag captured.';
    document.getElementById('b' + stage).style.display = 'inline';
    document.getElementById('s' + stage).classList.add('solved');
    updateProgress();
    const next = document.getElementById('s' + (stage + 1));
    if (next) next.classList.remove('locked');
  } else {
    fb.className = 'feedback err';
    if (!raw.toLowerCase().startsWith('flag{')) {
      fb.textContent = '✗ Remember to wrap your answer: FLAG{yourword}';
    } else {
      fb.textContent = '✗ Not quite — try again or use the hint!';
    }
  }
}

function toggleHint(stage) {
  const h = document.getElementById('h' + stage);
  h.style.display = h.style.display === 'block' ? 'none' : 'block';
}

function updateCaesar() {
  const cipher = "VHFUHW";
  const shift = parseInt(document.getElementById('shift-slider').value);
  document.getElementById('shift-val').textContent = shift;
  let decoded = '';
  for (const c of cipher) {
    if (c >= 'A' && c <= 'Z') {
      decoded += String.fromCharCode(((c.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
    } else {
      decoded += c;
    }
  }
  document.getElementById('caesar-out').textContent = decoded;
}

updateCaesar();