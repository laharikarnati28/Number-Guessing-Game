// -------------------- MULTI-LANGUAGE TRANSLATIONS --------------------
const translations = {
  en: {
    enterNumber: '❌ Enter a number, brave soul!',
    invalidGuess: '❌ Only whole numbers within range!',
    tooHigh: '📈 Too high! Aim lower.',
    tooLow: '📉 Too low! Aim higher.',
    winMessage: 'BY THE GODS! YOU WIN IN',
    attempts: 'attempts',
    gameOver: 'The quest is complete! Start a new one.',
    consultingOracle: '🔮 Consulting the Oracle...',
    oracleRevealed: '✨ Oracle reveals a new mystery!',
    oracleFailed: '⚠️ Oracle silent, using earthly random.',
    evenHint: 'The secret number is even.',
    oddHint: 'The secret number is odd.',
    voiceNotNumber: 'Could not understand number.'
  },
  es: {
    enterNumber: '❌ Ingresa un número, valiente!',
    invalidGuess: '❌ Solo números enteros dentro del rango!',
    tooHigh: '📈 Demasiado alto! Apunta más bajo.',
    tooLow: '📉 Demasiado bajo! Apunta más alto.',
    winMessage: '¡POR LOS DIOSES! GANASTE EN',
    attempts: 'intentos',
    gameOver: '¡La búsqueda terminó! Comienza una nueva.',
    consultingOracle: '🔮 Consultando al Oráculo...',
    oracleRevealed: '✨ ¡El Oráculo revela un nuevo misterio!',
    oracleFailed: '⚠️ Oráculo silencioso, usando aleatorio terrenal.',
    evenHint: 'El número secreto es par.',
    oddHint: 'El número secreto es impar.',
    voiceNotNumber: 'No se pudo entender el número.'
  },
  fr: {
    enterNumber: '❌ Entrez un nombre, âme courageuse!',
    invalidGuess: '❌ Uniquement des nombres entiers dans la plage!',
    tooHigh: '📈 Trop haut! Visez plus bas.',
    tooLow: '📉 Trop bas! Visez plus haut.',
    winMessage: 'PAR LES DIEUX! VOUS GAGNEZ EN',
    attempts: 'tentatives',
    gameOver: 'La quête est terminée! Commencez-en une nouvelle.',
    consultingOracle: '🔮 Consultation de l’Oracle...',
    oracleRevealed: '✨ L’Oracle révèle un nouveau mystère!',
    oracleFailed: '⚠️ Oracle silencieux, utilisation aléatoire terrestre.',
    evenHint: 'Le nombre secret est pair.',
    oddHint: 'Le nombre secret est impair.',
    voiceNotNumber: 'Impossible de comprendre le nombre.'
  },
  de: {
    enterNumber: '❌ Geben Sie eine Zahl ein, tapfere Seele!',
    invalidGuess: '❌ Nur ganze Zahlen im Bereich!',
    tooHigh: '📈 Zu hoch! Zielen Sie niedriger.',
    tooLow: '📉 Zu niedrig! Zielen Sie höher.',
    winMessage: 'BEI DEN GÖTTERN! SIE GEWINNEN IN',
    attempts: 'Versuchen',
    gameOver: 'Die Suche ist beendet! Beginnen Sie eine neue.',
    consultingOracle: '🔮 Konsultiere das Orakel...',
    oracleRevealed: '✨ Orakel enthüllt ein neues Geheimnis!',
    oracleFailed: '⚠️ Orakel schweigt, nutze irdischen Zufall.',
    evenHint: 'Die geheime Zahl ist gerade.',
    oddHint: 'Die geheime Zahl ist ungerade.',
    voiceNotNumber: 'Konnte Zahl nicht verstehen.'
  },
  zh: {
    enterNumber: '❌ 输入一个数字，勇敢的灵魂！',
    invalidGuess: '❌ 只能输入范围内的整数！',
    tooHigh: '📈 太高了！再低一点。',
    tooLow: '📉 太低了！再高一点。',
    winMessage: '天哪！您在',
    attempts: '次尝试中获胜！',
    gameOver: '任务已完成！开始新的一局。',
    consultingOracle: '🔮 请教神谕...',
    oracleRevealed: '✨ 神谕揭示了新的秘密！',
    oracleFailed: '⚠️ 神谕沉默，使用本地随机数。',
    evenHint: '秘密数字是偶数。',
    oddHint: '秘密数字是奇数。',
    voiceNotNumber: '无法理解数字。'
  },
  ko: {
    enterNumber: '❌ 숫자를 입력하세요, 용감한 영혼이여!',
    invalidGuess: '❌ 범위 내의 정수만 가능합니다!',
    tooHigh: '📈 너무 높아요! 더 낮춰보세요.',
    tooLow: '📉 너무 낮아요! 더 높여보세요.',
    winMessage: '신이시여! 당신이',
    attempts: '번 만에 승리했습니다!',
    gameOver: '퀘스트가 완료되었습니다! 새로 시작하세요.',
    consultingOracle: '🔮 신탁에 묻는 중...',
    oracleRevealed: '✨ 신탁이 새로운 비밀을 밝혔습니다!',
    oracleFailed: '⚠️ 신탁이 침묵하여 로컬 난수를 사용합니다.',
    evenHint: '비밀 숫자는 짝수입니다.',
    oddHint: '비밀 숫자는 홀수입니다.',
    voiceNotNumber: '숫자를 이해하지 못했습니다.'
  },
  hi: {
    enterNumber: '❌ एक संख्या दर्ज करें, बहादुर आत्मा!',
    invalidGuess: '❌ केवल सीमा के भीतर पूर्ण संख्याएँ!',
    tooHigh: '📈 बहुत ऊँचा! नीचे लक्ष्य करें।',
    tooLow: '📉 बहुत नीचे! ऊपर लक्ष्य करें।',
    winMessage: 'देवताओं की कृपा! आपने',
    attempts: 'प्रयासों में जीत हासिल की!',
    gameOver: 'खोज पूरी हुई! नई शुरुआत करें।',
    consultingOracle: '🔮 ओरेकल से परामर्श...',
    oracleRevealed: '✨ ओरेकल ने एक नया रहस्य उजागर किया!',
    oracleFailed: '⚠️ ओरेकल मौन, स्थानीय यादृच्छिक का उपयोग कर रहा है।',
    evenHint: 'गुप्त संख्या सम है।',
    oddHint: 'गुप्त संख्या विषम है।',
    voiceNotNumber: 'संख्या समझ में नहीं आई।'
  }
};

let currentLanguage = 'en';
function t(key) { return translations[currentLanguage]?.[key] || key; }

// -------------------- USER & LEVELS --------------------
let currentUser = JSON.parse(localStorage.getItem('royalUser')) || { name: 'Guest', gamesWon: 0 };

// -------------------- LEADERBOARD (LOCAL STORAGE) --------------------
function getLeaderboard() {
  return JSON.parse(localStorage.getItem('royalLeaderboard')) || [];
}
function saveLeaderboard(scores) {
  localStorage.setItem('royalLeaderboard', JSON.stringify(scores));
}
function addScore(name, attempts) {
  let scores = getLeaderboard();
  scores.push({ name, attempts, date: new Date().toISOString() });
  scores.sort((a,b) => a.attempts - b.attempts);
  const top5 = scores.slice(0,5);
  saveLeaderboard(top5);
  return top5;
}

// -------------------- ACHIEVEMENTS --------------------
const ACHIEVEMENTS = [
  { id: 'firstWin', name: '👑 First Blood', condition: (a) => a === 1 },
  { id: 'speedDemon', name: '⚡ Speed Demon', condition: (a) => a <= 3 },
  { id: 'tokenMaster', name: '🔮 Token Master', condition: (t) => t >= 3 }
];
let unlocked = JSON.parse(localStorage.getItem('achievements')) || [];

function checkAndUnlock(id, value) {
  const ach = ACHIEVEMENTS.find(a => a.id === id);
  if (ach && !unlocked.includes(id) && ach.condition(value)) {
    unlocked.push(id);
    localStorage.setItem('achievements', JSON.stringify(unlocked));
  }
}
function getBadges() {
  return unlocked.map(id => ACHIEVEMENTS.find(a => a.id === id)?.name).filter(Boolean);
}

// -------------------- SIMPLE SOUND --------------------
function playSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    if (type === 'guess') osc.frequency.value = 440;
    if (type === 'win') osc.frequency.value = 880;
    if (type === 'token') osc.frequency.value = 660;
    if (type === 'hint') osc.frequency.value = 330;
    if (type === 'timeout') osc.frequency.value = 220;
    gain.gain.value = 0.1;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {}
}

// -------------------- GAME STATE --------------------
let secretNumber, maxRange = 100, attempts = 0, gameOver = false, previousGuesses = [], tokens = 0;
let timerInterval = null;

// DOM elements
const guessInput = document.getElementById('guessInput');
const playerName = document.getElementById('playerName');
const hintDiv = document.getElementById('hintMessage');
const historyDiv = document.getElementById('guessHistory');
const attemptSpan = document.getElementById('attemptCount');
const bestSpan = document.getElementById('bestScoreDisplay');
const leaderboardBody = document.getElementById('leaderboardBody');
const guessForm = document.getElementById('guessForm');
const oracleBtn = document.getElementById('oracleBtn');
const resetBtn = document.getElementById('resetBtn');
const hintBtn = document.getElementById('hintBtn');
const tokenSpan = document.getElementById('tokenCount');
const themeToggle = document.getElementById('themeToggle');
const fontIncrease = document.getElementById('fontIncrease');
const fontDecrease = document.getElementById('fontDecrease');
const languageSelect = document.getElementById('languageSelect');
const timerToggle = document.getElementById('timerModeToggle');
const timerContainer = document.getElementById('timerContainer');
const timerBar = document.getElementById('timerBar');
const voiceBtn = document.getElementById('voiceBtn');
const numberPad = document.getElementById('numberPad');
const shareBtn = document.getElementById('shareWinBtn');
const particleCanvas = document.getElementById('particleCanvas');
const dailyStatusSpan = document.getElementById('dailyAttempted');
const globalLeaderboardDiv = document.getElementById('globalLeaderboard');
const spinBtn = document.getElementById('spinWheelBtn');
const spinResult = document.getElementById('spinResult');
const currentUserDisplay = document.getElementById('currentUserDisplay');
const currentLevelDisplay = document.getElementById('currentLevelDisplay');

// Update user display
function updateUserDisplay() {
  currentUserDisplay.innerText = currentUser.name;
  const wins = currentUser.gamesWon || 0;
  let level = 1;
  if (wins >= 10) level = 4;
  else if (wins >= 6) level = 3;
  else if (wins >= 3) level = 2;
  currentLevelDisplay.innerText = level;
}
updateUserDisplay();

// Difficulty change
document.getElementById('difficultySelect').addEventListener('change', (e) => {
  maxRange = parseInt(e.target.value);
  resetGame();
  updateInputMax();
});

function updateInputMax() {
  guessInput.max = maxRange;
  guessInput.placeholder = `1-${maxRange}`;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * maxRange) + 1;
  attempts = 0;
  previousGuesses = [];
  gameOver = false;
  attemptSpan.innerText = '0';
  hintDiv.innerText = t('gameOver');
  hintDiv.classList.remove('win-banner');
  renderHistory();
  guessInput.value = '';
  if (timerInterval) clearInterval(timerInterval);
  if (timerToggle.checked) startTimer();
}

function startTimer() {
  let timeLeft = 10;
  timerBar.style.width = '100%';
  timerContainer.style.display = 'block';
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerBar.style.width = `${(timeLeft / 10) * 100}%`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleGuess(null, true);
    }
  }, 1000);
}

function handleGuess(event, timedOut = false) {
  if (event) event.preventDefault();
  if (gameOver) {
    hintDiv.innerText = t('gameOver');
    return;
  }
  if (timedOut) {
    attempts++;
    attemptSpan.innerText = attempts;
    previousGuesses.push('⏱️');
    renderHistory();
    hintDiv.innerText = '⏰ Time ran out! Try again.';
    playSound('timeout');
    startTimer();
    return;
  }

  const rawValue = guessInput.value.trim();
  if (!rawValue) {
    hintDiv.innerText = t('enterNumber');
    return;
  }
  const guess = Number(rawValue);
  if (isNaN(guess) || guess < 1 || guess > maxRange || !Number.isInteger(guess)) {
    hintDiv.innerText = t('invalidGuess');
    return;
  }

  attempts++;
  attemptSpan.innerText = attempts;
  previousGuesses.push(guess);
  renderHistory();
  playSound('guess');

  if (attempts % 3 === 0 && !gameOver) {
    tokens++;
    tokenSpan.innerText = tokens;
    hintBtn.disabled = false;
    playSound('token');
  }

  if (guess === secretNumber) {
    hintDiv.innerHTML = `🏆 ${t('winMessage')} ${attempts} ${t('attempts')}! 🏆`;
    hintDiv.classList.add('win-banner');
    gameOver = true;
    playSound('win');
    const name = playerName.value.trim() || 'Mysterious Knight';
    addScore(name, attempts);
    renderLeaderboard();
    updateBestDisplay();
    checkAndUnlock('firstWin', attempts);
    if (attempts <= 3) checkAndUnlock('speedDemon', attempts);
    renderBadges();
    shareBtn.style.display = 'inline-block';
    startParticles();

    // Update user games won
    currentUser.gamesWon = (currentUser.gamesWon || 0) + 1;
    localStorage.setItem('royalUser', JSON.stringify(currentUser));
    updateUserDisplay();

    // Mark daily quest
    localStorage.setItem('dailyLastPlay', new Date().toDateString());
    dailyStatusSpan.innerText = 'Attempted today';

    // Fetch random fact
    fetch(`https://numbersapi.com/${secretNumber}`)
      .then(r => r.text())
      .then(fact => hintDiv.innerHTML += `<br><small>${fact}</small>`)
      .catch(() => {});
  } else {
    const hint = guess > secretNumber ? t('tooHigh') : t('tooLow');
    hintDiv.innerText = hint;
    hintDiv.classList.remove('win-banner');
    if (timerToggle.checked) {
      clearInterval(timerInterval);
      startTimer();
    }
  }
  guessInput.value = '';
  guessInput.focus();
}

// Hint button
hintBtn.addEventListener('click', () => {
  if (tokens <= 0) return;
  tokens--;
  tokenSpan.innerText = tokens;
  if (tokens === 0) hintBtn.disabled = true;
  let hintText = secretNumber % 2 === 0 ? t('evenHint') : t('oddHint');
  hintDiv.innerText = hintText;
  playSound('hint');
});

// Oracle API
oracleBtn.addEventListener('click', async () => {
  try {
    hintDiv.innerText = t('consultingOracle');
    const url = `https://csrng.net/csrng/csrng.php?min=1&max=${maxRange}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('API failed');
    const data = await response.json();
    if (data[0] && data[0].status === 'success') {
      secretNumber = data[0].random;
    } else {
      throw new Error('Invalid response');
    }
    resetGame();
    hintDiv.innerText = t('oracleRevealed');
  } catch (err) {
    hintDiv.innerText = t('oracleFailed');
    secretNumber = Math.floor(Math.random() * maxRange) + 1;
    resetGame();
  }
});

resetBtn.addEventListener('click', resetGame);

// Voice input
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const number = parseInt(transcript.replace(/\D/g, ''));
    if (!isNaN(number) && number >= 1 && number <= maxRange) {
      guessInput.value = number;
      guessForm.dispatchEvent(new Event('submit'));
    } else {
      hintDiv.innerText = t('voiceNotNumber');
    }
  };
  voiceBtn.addEventListener('click', () => recognition.start());
} else {
  voiceBtn.disabled = true;
  voiceBtn.title = 'Voice not supported';
}

// Number pad for mobile
if (window.innerWidth <= 800) {
  for (let i = 0; i <= 9; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.addEventListener('click', () => {
      guessInput.value += i;
    });
    numberPad.appendChild(btn);
  }
  const back = document.createElement('button');
  back.textContent = '⌫';
  back.addEventListener('click', () => {
    guessInput.value = guessInput.value.slice(0, -1);
  });
  numberPad.appendChild(back);
}

// Theme toggle
themeToggle.addEventListener('click', () => document.body.classList.toggle('high-contrast'));

// Font size
fontIncrease.addEventListener('click', () => {
  let current = parseInt(getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = (current + 2) + 'px';
});
fontDecrease.addEventListener('click', () => {
  let current = parseInt(getComputedStyle(document.body).fontSize);
  if (current > 10) document.body.style.fontSize = (current - 2) + 'px';
});

// Language switcher
languageSelect.addEventListener('change', (e) => {
  currentLanguage = e.target.value;
  // Optionally update some static texts
});

// Timer toggle
timerToggle.addEventListener('change', (e) => {
  if (e.target.checked) startTimer();
  else { clearInterval(timerInterval); timerContainer.style.display = 'none'; }
});

// Daily quest check
function checkDaily() {
  const lastPlay = localStorage.getItem('dailyLastPlay');
  const today = new Date().toDateString();
  dailyStatusSpan.innerText = lastPlay === today ? 'Attempted today' : 'Not attempted';
}
checkDaily();

// Global leaderboard mock
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    const top5 = users.slice(0,5).map((u, i) => ({ name: u.name, attempts: Math.floor(Math.random()*10)+1 }));
    globalLeaderboardDiv.innerHTML = top5.map(u => `<div>${u.name}: ${u.attempts}</div>`).join('');
  })
  .catch(() => { globalLeaderboardDiv.innerHTML = 'Offline'; });

// Share victory
shareBtn.addEventListener('click', () => {
  const text = `I found the Royal Secret in ${attempts} attempts! ⚜️`;
  if (navigator.share) navigator.share({ title: 'Royal Quest', text });
  else { navigator.clipboard.writeText(text); alert('Copied to clipboard!'); }
});

// Particle effect
function startParticles() {
  const canvas = particleCanvas;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  let particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 2) * 2,
      size: Math.random() * 5 + 2,
      color: `hsl(${Math.random() * 60 + 30}, 100%, 50%)`
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
    });
    requestAnimationFrame(draw);
  }
  draw();
  setTimeout(() => { canvas.style.display = 'none'; }, 3000);
}

// Parallax
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
});

// Daily spin wheel
spinBtn.addEventListener('click', () => {
  const lastSpin = localStorage.getItem('lastSpinDate');
  const today = new Date().toDateString();
  if (lastSpin === today) {
    spinResult.innerText = 'You already spun today! Come back tomorrow.';
    return;
  }
  const reward = Math.floor(Math.random() * 5) + 1;
  tokens += reward;
  tokenSpan.innerText = tokens;
  localStorage.setItem('lastSpinDate', today);
  spinResult.innerText = `You won ${reward} tokens! 🎉`;
  playSound('token');
});

// Initial renders
renderLeaderboard();
updateBestDisplay();
updateInputMax();
resetGame();

function renderLeaderboard() {
  const scores = getLeaderboard();
  let html = '';
  scores.forEach((score, idx) => {
    const rank = idx === 0 ? '🥇' : (idx === 1 ? '🥈' : (idx === 2 ? '🥉' : '📜'));
    html += `<tr><td>${rank}</td><td>${score.name}</td><td>${score.attempts}</td></tr>`;
  });
  leaderboardBody.innerHTML = html || '<tr><td>👑</td><td>No scores</td><td>—</td></tr>';
}

function updateBestDisplay() {
  const scores = getLeaderboard();
  bestSpan.innerText = scores.length ? scores[0].attempts : '—';
}

function renderHistory() {
  historyDiv.innerHTML = previousGuesses.map(g => `<span class="guess-chip">${g}</span>`).join('') || '<em>No guesses yet</em>';
}

function renderBadges() {
  const badges = getBadges();
  document.getElementById('badgeContainer').innerHTML = badges.map(b => `<span class="badge">${b}</span>`).join('');
}

guessForm.addEventListener('submit', handleGuess);