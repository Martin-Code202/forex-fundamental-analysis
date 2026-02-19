// =============================================
// APP.JS — Core Application Logic
// Navigation, Gamification, State Management
// =============================================

const App = (() => {
  // ─── State ───
  const STORAGE_KEY = 'fa_mastery_progress';
  let state = loadState();

  function defaultState() {
    return {
      xp: 0,
      completedChapters: [],
      readChapters: [],
      earnedBadges: [],
      quizScores: {},
      streak: 0,
      lastLoginDate: null
    };
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultState(), ...parsed };
      }
    } catch (e) { console.warn('State load failed:', e); }
    return defaultState();
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  // ─── Level System ───
  function getLevel() {
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (state.xp >= LEVELS[i].minXP) return LEVELS[i];
    }
    return LEVELS[0];
  }

  function addXP(amount) {
    const oldLevel = getLevel();
    state.xp += amount;
    const newLevel = getLevel();
    saveState();
    updateXPDisplay();
    if (newLevel.level > oldLevel.level) {
      showToast(`🎉 Level Up! You're now a ${newLevel.title}!`, 'success', 4000);
    }
  }

  // ─── Streak System ───
  function checkStreak() {
    const today = new Date().toDateString();
    if (state.lastLoginDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (state.lastLoginDate === yesterday.toDateString()) {
      state.streak++;
    } else if (state.lastLoginDate !== today) {
      state.streak = 1;
    }
    state.lastLoginDate = today;
    addXP(XP_REWARDS.DAILY_LOGIN);
    saveState();

    if (state.streak >= 7 && !state.earnedBadges.includes('streak_7')) {
      awardBadge('streak_7');
    }
  }

  // ─── Badge System ───
  function awardBadge(badgeId) {
    if (state.earnedBadges.includes(badgeId)) return;
    state.earnedBadges.push(badgeId);
    saveState();
    const badge = BADGES.find(b => b.id === badgeId);
    if (badge) {
      showToast(`🏆 Badge Earned: ${badge.icon} ${badge.name}!`, 'success', 4000);
    }
    updateBadgeCount();
  }

  // ─── UI Updates ───
  function updateXPDisplay() {
    const level = getLevel();
    document.getElementById('levelBadge').textContent = `LVL ${level.level}`;
    document.getElementById('levelTitle').textContent = level.title;
    document.getElementById('streakBadge').textContent = `🔥 ${state.streak} day streak`;

    const xpInLevel = state.xp - level.minXP;
    const xpNeeded = level.maxXP === Infinity ? 1000 : level.maxXP - level.minXP;
    const pct = level.maxXP === Infinity ? 100 : Math.min((xpInLevel / xpNeeded) * 100, 100);
    document.getElementById('xpBarFill').style.width = pct + '%';
    document.getElementById('xpText').textContent = level.maxXP === Infinity
      ? `${state.xp} XP — Max Level!`
      : `${state.xp} / ${level.maxXP} XP`;
  }

  function updateBadgeCount() {
    document.getElementById('badgeCount').textContent = `${state.earnedBadges.length} / ${BADGES.length}`;
  }

  function renderChapterList() {
    const list = document.getElementById('chapterList');
    list.innerHTML = `
      <button class="chapter-nav-item active" data-view="home" onclick="App.navigate('home')">
        <span class="chapter-icon">🏠</span>
        <span class="chapter-title">Home</span>
      </button>
      ${CHAPTERS.map(ch => {
      const completed = state.completedChapters.includes(ch.id);
      const read = state.readChapters.includes(ch.id);
      const statusIcon = completed ? '✅' : read ? '📖' : '🔒';
      const statusClass = completed ? 'completed' : read ? 'read' : '';
      return `
          <button class="chapter-nav-item ${statusClass}" data-view="ch${ch.id}" onclick="App.navigate('chapter', ${ch.id})">
            <span class="chapter-icon">${ch.icon}</span>
            <span class="chapter-title">${ch.id}. ${ch.title}</span>
            <span class="chapter-status">${statusIcon}</span>
          </button>
        `;
    }).join('')}
    `;
  }

  // ─── Toast Notifications ───
  function showToast(msg, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ─── Navigation ───
  function navigate(view, id) {
    // Update active nav
    document.querySelectorAll('.chapter-nav-item').forEach(el => el.classList.remove('active'));
    const target = view === 'home' ? '[data-view="home"]' : `[data-view="ch${id}"]`;
    const navItem = document.querySelector(target);
    if (navItem) navItem.classList.add('active');

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('mobileOverlay').classList.remove('active');

    if (view === 'home') renderHome();
    else renderChapter(id);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ─── Home Screen ───
  function renderHome() {
    const main = document.getElementById('mainContent');
    const completedCount = state.completedChapters.length;
    const totalChapters = CHAPTERS.length;
    const progressPct = Math.round((completedCount / totalChapters) * 100);

    main.innerHTML = `
      <div class="home-screen">
        <div class="home-hero">
          <h1>📈 Forex FA Mastery</h1>
          <p class="hero-subtitle">Master Fundamental Analysis through interactive, gamified learning</p>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${state.xp}</div>
            <div class="stat-label">Total XP</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${completedCount}/${totalChapters}</div>
            <div class="stat-label">Chapters Done</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${state.earnedBadges.length}</div>
            <div class="stat-label">Badges</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${state.streak}</div>
            <div class="stat-label">Day Streak 🔥</div>
          </div>
        </div>

        <div class="progress-section">
          <h2>📍 Quest Map</h2>
          <div class="quest-progress-bar">
            <div class="quest-progress-fill" style="width:${progressPct}%"></div>
            <span class="quest-progress-text">${progressPct}% Complete</span>
          </div>
        </div>

        <div class="quest-section">
          <div class="quest-map">
            ${CHAPTERS.map(ch => {
      const completed = state.completedChapters.includes(ch.id);
      const read = state.readChapters.includes(ch.id);
      const score = state.quizScores[ch.id];
      return `
                <div class="quest-node ${completed ? 'completed' : read ? 'read' : ''}" onclick="App.navigate('chapter', ${ch.id})">
                  <div class="quest-node-icon">${ch.icon}</div>
                  <div class="quest-node-info">
                    <div class="quest-node-title">${ch.id}. ${ch.title}</div>
                    <div class="quest-node-status">
                      ${completed ? `✅ Complete${score ? ` — ${score.score}/${score.total}` : ''}` : read ? '📖 In Progress' : '🔒 Not Started'}
                    </div>
                  </div>
                </div>
              `;
    }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ─── Chapter View ───
  function renderChapter(id) {
    const chapter = CHAPTERS.find(c => c.id === id);
    if (!chapter) return;

    // Mark as read
    if (!state.readChapters.includes(id)) {
      state.readChapters.push(id);
      addXP(XP_REWARDS.CHAPTER_READ);
      saveState();
      renderChapterList();
    }

    const completed = state.completedChapters.includes(id);
    const score = state.quizScores[id];
    const main = document.getElementById('mainContent');

    main.innerHTML = `
      <div class="chapter-view">
        <div class="chapter-header">
          <div class="chapter-header-icon">${chapter.icon}</div>
          <div>
            <h1>Chapter ${chapter.id}: ${chapter.title}</h1>
            <p class="chapter-desc">${chapter.description}</p>
          </div>
        </div>

        <div class="chapter-content">
          ${chapter.sections.map(sec => `
            <section class="content-section">
              <h2>${sec.title}</h2>
              ${sec.content}
            </section>
          `).join('')}
        </div>

        <div class="chapter-footer">
          ${completed && score ? `
            <div class="quiz-result-summary">
              ✅ Quiz completed — Score: ${score.score}/${score.total} (${Math.round((score.score / score.total) * 100)}%)
            </div>
          ` : ''}
          <div class="chapter-actions">
            ${id > 1 ? (() => {
        const prevChapter = CHAPTERS.find(c => c.id === id - 1);
        return `
              <button class="nav-card prev" onclick="App.navigate('chapter', ${id - 1})">
                <span class="nav-label">Previous</span>
                <span class="nav-title">${prevChapter ? prevChapter.title : 'Chapter ' + (id - 1)}</span>
              </button>`;
      })() : '<div></div>'}
            
            <button class="btn-primary btn-quiz" onclick="App.startQuiz(${id})">
              ${completed ? '🔄 Retake Quiz' : '📝 Take Quiz'}
            </button>
            
            ${id < CHAPTERS.length ? (() => {
        const nextChapter = CHAPTERS.find(c => c.id === id + 1);
        return `
              <button class="nav-card next" onclick="App.navigate('chapter', ${id + 1})">
                <span class="nav-label">Next</span>
                <span class="nav-title">${nextChapter ? nextChapter.title : 'Chapter ' + (id + 1)}</span>
              </button>`;
      })() : '<div></div>'}
          </div>
        </div>
      </div>
    `;
  }

  // ─── Quiz Integration ───
  function startQuiz(chapterId) {
    const chapter = CHAPTERS.find(c => c.id === chapterId);
    if (chapter && chapter.quiz) {
      QuizEngine.start(chapter.quiz, chapterId);
    }
  }

  function onQuizComplete(chapterId, passed, finalScore, isPerfect) {
    const chapter = CHAPTERS.find(c => c.id === chapterId);
    const total = chapter.quiz.length;

    // Award XP
    addXP(finalScore * XP_REWARDS.QUIZ_PER_CORRECT);
    if (isPerfect) addXP(XP_REWARDS.QUIZ_PERFECT);

    // Save score
    state.quizScores[chapterId] = { score: finalScore, total };

    if (passed) {
      if (!state.completedChapters.includes(chapterId)) {
        state.completedChapters.push(chapterId);
      }
      // Chapter badge
      awardBadge(`ch${chapterId}`);

      // First quiz badge
      if (!state.earnedBadges.includes('first_quiz')) {
        awardBadge('first_quiz');
      }
      // Perfect score badge
      if (isPerfect && !state.earnedBadges.includes('perfect_score')) {
        awardBadge('perfect_score');
      }
      // Halfway badge
      if (state.completedChapters.length >= 6 && !state.earnedBadges.includes('halfway')) {
        awardBadge('halfway');
      }
      // Completionist badge
      if (state.completedChapters.length >= 12 && !state.earnedBadges.includes('completionist')) {
        awardBadge('completionist');
      }
    }

    saveState();
    renderChapterList();
    renderChapter(chapterId);
  }

  // ─── Badge Modal ───
  function showBadges() {
    const grid = document.getElementById('badgeGrid');
    grid.innerHTML = BADGES.map(b => {
      const earned = state.earnedBadges.includes(b.id);
      return `
        <div class="badge-item ${earned ? 'earned' : 'locked'}">
          <div class="badge-icon">${earned ? b.icon : '🔒'}</div>
          <div class="badge-name">${b.name}</div>
          <div class="badge-desc">${b.description}</div>
        </div>
      `;
    }).join('');
    document.getElementById('badgeModal').classList.add('active');
  }

  // ─── Init ───
  function init() {
    checkStreak();
    updateXPDisplay();
    updateBadgeCount();
    renderChapterList();
    renderHome();

    // Event listeners
    document.getElementById('badgesBtn').addEventListener('click', showBadges);
    document.getElementById('closeBadgeModal').addEventListener('click', () => {
      document.getElementById('badgeModal').classList.remove('active');
    });
    document.getElementById('mobileToggle').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('mobileOverlay').classList.toggle('active');
    });
    document.getElementById('mobileOverlay').addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('mobileOverlay').classList.remove('active');
    });

    // Close modals on overlay click
    ['quizModal', 'badgeModal'].forEach(id => {
      document.getElementById(id).addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
          document.getElementById(id).classList.remove('active');
        }
      });
    });
  }

  // Auto-init
  document.addEventListener('DOMContentLoaded', init);

  return { navigate, startQuiz, onQuizComplete, showBadges };
})();
