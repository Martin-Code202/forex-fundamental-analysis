// =============================================
// QUIZ ENGINE — Rendering, Scoring, Feedback
// =============================================

const QuizEngine = (() => {
    let currentQuiz = [];
    let currentIndex = 0;
    let score = 0;
    let answers = [];
    let chapterId = null;

    function start(quiz, chapId) {
        currentQuiz = quiz;
        currentIndex = 0;
        score = 0;
        answers = [];
        chapterId = chapId;
        renderQuestion();
        document.getElementById('quizModal').classList.add('active');
    }

    function renderQuestion() {
        const q = currentQuiz[currentIndex];
        const total = currentQuiz.length;
        const container = document.getElementById('quizContent');

        container.innerHTML = `
      <div class="quiz-header">
        <h2>📝 Chapter ${chapterId} Quiz</h2>
        <span class="quiz-progress">Question ${currentIndex + 1} / ${total}</span>
      </div>
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${((currentIndex) / total) * 100}%"></div>
      </div>
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" data-index="${i}" onclick="QuizEngine.selectAnswer(${i})">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
    `;
    }

    function selectAnswer(index) {
        const q = currentQuiz[currentIndex];
        const isCorrect = index === q.correct;
        if (isCorrect) score++;
        answers.push({ index, isCorrect });

        // Show feedback
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((opt, i) => {
            opt.style.pointerEvents = 'none';
            if (i === q.correct) {
                opt.classList.add('correct');
            } else if (i === index && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });

        // Show explanation
        const container = document.getElementById('quizContent');
        const explanationDiv = document.createElement('div');
        explanationDiv.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        explanationDiv.innerHTML = `
      <strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</strong>
      <p>${q.explanation}</p>
    `;
        container.appendChild(explanationDiv);

        // Next / Finish button
        const btnDiv = document.createElement('div');
        btnDiv.className = 'quiz-nav';
        const isLast = currentIndex === currentQuiz.length - 1;
        btnDiv.innerHTML = `
      <button class="btn-primary" onclick="QuizEngine.${isLast ? 'showResults' : 'next'}()">
        ${isLast ? '🏆 See Results' : 'Next Question →'}
      </button>
    `;
        container.appendChild(btnDiv);
    }

    function next() {
        currentIndex++;
        renderQuestion();
    }

    function showResults() {
        const total = currentQuiz.length;
        const pct = Math.round((score / total) * 100);
        const isPerfect = score === total;
        const passed = pct >= 60;

        const container = document.getElementById('quizContent');
        container.innerHTML = `
      <div class="quiz-results">
        <div class="results-icon">${isPerfect ? '🏆' : passed ? '✅' : '📚'}</div>
        <h2>${isPerfect ? 'Perfect Score!' : passed ? 'Quiz Passed!' : 'Keep Learning!'}</h2>
        <div class="results-score">
          <span class="score-big">${score}/${total}</span>
          <span class="score-pct">${pct}%</span>
        </div>
        <div class="results-breakdown">
          ${answers.map((a, i) => `
            <div class="result-item ${a.isCorrect ? 'correct' : 'incorrect'}">
              <span>${a.isCorrect ? '✅' : '❌'}</span>
              <span>Q${i + 1}: ${currentQuiz[i].question.substring(0, 50)}...</span>
            </div>
          `).join('')}
        </div>
        <div class="results-xp">
          <p>+${score * XP_REWARDS.QUIZ_PER_CORRECT} XP from correct answers</p>
          ${isPerfect ? `<p class="bonus-xp">+${XP_REWARDS.QUIZ_PERFECT} XP Perfect Score Bonus! 💯</p>` : ''}
        </div>
        <div class="quiz-nav">
          ${!passed ? `<button class="btn-secondary" onclick="QuizEngine.retry()">🔄 Retry Quiz</button>` : ''}
          <button class="btn-primary" onclick="QuizEngine.close(${passed}, ${score}, ${isPerfect})">
            ${passed ? '✅ Continue' : '📖 Back to Chapter'}
          </button>
        </div>
      </div>
    `;
    }

    function retry() {
        start(currentQuiz, chapterId);
    }

    function close(passed, finalScore, isPerfect) {
        document.getElementById('quizModal').classList.remove('active');
        if (typeof App !== 'undefined' && App.onQuizComplete) {
            App.onQuizComplete(chapterId, passed, finalScore, isPerfect);
        }
    }

    return { start, selectAnswer, next, showResults, retry, close };
})();
