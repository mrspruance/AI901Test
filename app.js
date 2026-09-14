/* Lógica del simulador AI-901 (modo práctica y modo examen cronometrado) */
(function () {
  "use strict";

  let quiz = [];
  let index = 0;
  let answers = [];
  let confirmed = [];
  let correctCount = 0;
  let mode = "practice";
  let timerId = null;
  let remaining = 0;

  const el = (id) => document.getElementById(id);
  const startScreen = el("startScreen");
  const quizScreen = el("quizScreen");
  const resultScreen = el("resultScreen");
  const headerStats = el("headerStats");

  const timerStat = el("timerStat");
  const timerText = el("timerText");
  const scoreStat = el("scoreStat");
  const progressText = el("progressText");
  const scoreText = el("scoreText");
  const progressFill = el("progressFill");
  const domainTag = el("domainTag");
  const questionText = el("questionText");
  const multiHint = el("multiHint");
  const answersForm = el("answersForm");
  const confirmBtn = el("confirmBtn");
  const nextBtn = el("nextBtn");
  const prevBtn = el("prevBtn");
  const finishBtn = el("finishBtn");
  const explanation = el("explanation");
  const resultBanner = el("resultBanner");
  const explanationList = el("explanationList");
  const docLink = el("docLink");

  const LETTERS = ["A", "B", "C", "D", "E", "F"];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getMode() {
    const checked = document.querySelector('input[name="mode"]:checked');
    return checked ? checked.value : "practice";
  }

  document.querySelectorAll('input[name="mode"]').forEach((r) => {
    r.addEventListener("change", () => {
      el("durationField").hidden = getMode() !== "exam";
    });
  });

  function startQuiz() {
    const count = parseInt(el("questionCount").value, 10);
    const doShuffle = el("shuffleQuestions").checked;
    const foundryOnly = el("filterDomain").checked;
    mode = getMode();

    let pool = QUESTIONS.slice();
    if (foundryOnly) pool = pool.filter((q) => q.domain.includes("Dominio 2"));
    if (doShuffle) pool = shuffle(pool);
    if (count > 0) pool = pool.slice(0, count);

    quiz = pool.map((q) => {
      const opts = doShuffle ? shuffle(q.options) : q.options.slice();
      return { ...q, options: opts };
    });

    index = 0;
    correctCount = 0;
    answers = quiz.map(() => []);
    confirmed = quiz.map(() => false);

    startScreen.hidden = true;
    resultScreen.hidden = true;
    quizScreen.hidden = false;
    headerStats.hidden = false;

    if (mode === "exam") {
      scoreStat.hidden = true;
      timerStat.hidden = false;
      startTimer();
    } else {
      scoreStat.hidden = false;
      timerStat.hidden = true;
    }

    renderQuestion();
    updateStats();
  }

  function startTimer() {
    let secs = parseInt(el("examDuration").value, 10);
    if (!secs || secs <= 0) secs = quiz.length * 120;
    remaining = secs;
    updateTimerDisplay();
    timerStat.classList.remove("warning", "danger");
    timerId = setInterval(() => {
      remaining--;
      updateTimerDisplay();
      if (remaining <= 60) timerStat.classList.add("danger");
      else if (remaining <= 300) timerStat.classList.add("warning");
      if (remaining <= 0) { stopTimer(); showResults(); }
    }, 1000);
  }

  function stopTimer() {
    if (timerId) { clearInterval(timerId); timerId = null; }
  }

  function updateTimerDisplay() {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    timerText.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function renderQuestion() {
    const q = quiz[index];
    explanation.hidden = true;

    domainTag.textContent = q.domain;
    questionText.textContent = `${index + 1}. ${q.text}`;
    multiHint.hidden = !q.multiple;
    progressFill.style.width = `${(index / quiz.length) * 100}%`;

    const inputType = q.multiple ? "checkbox" : "radio";
    const alreadyConfirmed = confirmed[index];
    const saved = answers[index] || [];

    answersForm.innerHTML = "";
    q.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.className = "answer";
      label.dataset.i = i;

      const input = document.createElement("input");
      input.type = inputType;
      input.name = "answer";
      input.value = i;
      if (saved.includes(i)) { input.checked = true; label.classList.add("selected"); }

      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = `${LETTERS[i]}.`;

      const text = document.createElement("span");
      text.textContent = opt.text;

      label.appendChild(input);
      label.appendChild(letter);
      label.appendChild(text);
      answersForm.appendChild(label);

      input.addEventListener("change", onSelectionChange);
    });

    if (mode === "exam") {
      confirmBtn.hidden = true;
      prevBtn.hidden = false;
      prevBtn.disabled = index === 0;
      const last = index === quiz.length - 1;
      nextBtn.hidden = last;
      finishBtn.hidden = !last;
    } else {
      prevBtn.hidden = true;
      if (alreadyConfirmed) {
        showFeedback(true);
      } else {
        confirmBtn.hidden = false;
        confirmBtn.disabled = saved.length === 0;
        nextBtn.hidden = true;
        finishBtn.hidden = true;
      }
    }
  }

  function onSelectionChange() {
    const inputs = answersForm.querySelectorAll("input");
    inputs.forEach((inp) => {
      inp.closest(".answer").classList.toggle("selected", inp.checked);
    });
    answers[index] = getSelectedIndices();
    if (mode === "practice" && !confirmed[index]) {
      confirmBtn.disabled = answers[index].length === 0;
    }
  }

  function getSelectedIndices() {
    return Array.from(answersForm.querySelectorAll("input:checked")).map((i) =>
      parseInt(i.value, 10)
    );
  }

  function arraysEqualAsSets(a, b) {
    if (a.length !== b.length) return false;
    const sa = new Set(a);
    return b.every((x) => sa.has(x));
  }

  function correctIndicesOf(q) {
    return q.options.map((o, i) => (o.correct ? i : -1)).filter((i) => i >= 0);
  }

  function confirmAnswer() {
    answers[index] = getSelectedIndices();
    if (!confirmed[index]) {
      confirmed[index] = true;
      const isCorrect = arraysEqualAsSets(answers[index], correctIndicesOf(quiz[index]));
      if (isCorrect) correctCount++;
    }
    showFeedback(false);
    updateStats();
  }

  function showFeedback() {
    const q = quiz[index];
    const selected = answers[index] || [];
    const correctIdx = correctIndicesOf(q);
    const isCorrect = arraysEqualAsSets(selected, correctIdx);

    const labels = answersForm.querySelectorAll(".answer");
    labels.forEach((label) => {
      const i = parseInt(label.dataset.i, 10);
      const input = label.querySelector("input");
      input.disabled = true;
      label.classList.add("disabled");
      label.classList.remove("selected");
      if (q.options[i].correct) label.classList.add("correct");
      else if (selected.includes(i)) label.classList.add("incorrect");
    });

    resultBanner.className = "result-banner " + (isCorrect ? "ok" : "bad");
    resultBanner.textContent = isCorrect
      ? "✓ ¡Respuesta correcta!"
      : "✗ Respuesta incorrecta. Revisa la explicación de cada alternativa.";

    explanationList.innerHTML = "";
    q.options.forEach((opt, i) => {
      const li = document.createElement("li");
      li.className = opt.correct ? "good" : "bad";
      const tag = document.createElement("span");
      tag.className = "tag " + (opt.correct ? "good" : "bad");
      tag.textContent = `${LETTERS[i]}. ${opt.correct ? "Correcta" : "Incorrecta"}:`;
      li.appendChild(tag);
      li.appendChild(document.createTextNode(" " + opt.explanation));
      explanationList.appendChild(li);
    });

    if (q.doc) { docLink.href = q.doc; docLink.hidden = false; }
    else docLink.hidden = true;

    explanation.hidden = false;
    confirmBtn.hidden = true;
    prevBtn.hidden = true;
    const last = index === quiz.length - 1;
    nextBtn.hidden = last;
    finishBtn.hidden = !last;
    if (last) finishBtn.textContent = "Ver resultados";
    else nextBtn.textContent = "Siguiente";

    progressFill.style.width = `${((index + 1) / quiz.length) * 100}%`;
  }

  function nextQuestion() {
    if (index < quiz.length - 1) { index++; renderQuestion(); updateStats(); }
  }

  function prevQuestion() {
    if (index > 0) { index--; renderQuestion(); updateStats(); }
  }

  function updateStats() {
    progressText.textContent = `${index + 1} / ${quiz.length}`;
    if (mode === "practice") {
      const answered = confirmed.filter(Boolean).length;
      const pct = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;
      scoreText.textContent = `${pct}%`;
    }
  }

  function computeCorrect() {
    let n = 0;
    quiz.forEach((q, qi) => {
      if (arraysEqualAsSets(answers[qi] || [], correctIndicesOf(q))) n++;
    });
    return n;
  }

  function showResults() {
    stopTimer();
    quizScreen.hidden = true;
    resultScreen.hidden = false;
    headerStats.hidden = true;

    const total = quiz.length;
    const correct = mode === "exam" ? computeCorrect() : correctCount;
    const pct = Math.round((correct / total) * 100);
    el("finalScore").textContent = `${pct}%`;

    // AI-901 passing score is 700/1000 (~70%)
    const deg = (pct / 100) * 360;
    const color = pct >= 70 ? "#107c10" : pct >= 50 ? "#ca8b00" : "#c42b1c";
    el("scoreCircle").style.background =
      `conic-gradient(${color} ${deg}deg, #eef2f7 ${deg}deg)`;

    const passMsg =
      pct >= 70
        ? "¡Buen trabajo! Estás en el rango aprobatorio (puntaje mínimo: 700/1000)."
        : "Sigue practicando. El puntaje mínimo aprobatorio del AI-901 es 700/1000 (~70%).";
    const modeMsg = mode === "exam" ? " (modo examen cronometrado)" : "";
    el("resultSummary").textContent =
      `Respondiste correctamente ${correct} de ${total} preguntas${modeMsg}. ${passMsg}`;

    buildReview();
    el("reviewContainer").hidden = true;
    el("reviewBtn").textContent =
      mode === "exam" ? "Ver respuestas y explicaciones" : "Revisar respuestas";
  }

  function buildReview() {
    const container = el("reviewContainer");
    container.innerHTML = "";
    quiz.forEach((q, qi) => {
      const correctIdx = correctIndicesOf(q);
      const chosenList = answers[qi] || [];
      const isCorrect = arraysEqualAsSets(chosenList, correctIdx);
      const answeredNothing = chosenList.length === 0;

      const item = document.createElement("div");
      item.className = "review-item";

      const title = document.createElement("h4");
      const status = document.createElement("span");
      status.className = "review-status " + (isCorrect ? "ok" : "bad");
      status.textContent = isCorrect ? "Correcta" : answeredNothing ? "Sin responder" : "Incorrecta";
      title.textContent = `${qi + 1}. ${q.text} `;
      title.appendChild(status);
      item.appendChild(title);

      const ul = document.createElement("ul");
      ul.className = "explanation-list";
      q.options.forEach((opt, i) => {
        const li = document.createElement("li");
        li.className = opt.correct ? "good" : "bad";
        const chosen = chosenList.includes(i);
        const tag = document.createElement("span");
        tag.className = "tag " + (opt.correct ? "good" : "bad");
        tag.textContent = `${LETTERS[i]}.${chosen ? " (tu elección)" : ""} ${opt.correct ? "Correcta" : "Incorrecta"}:`;
        li.appendChild(tag);
        li.appendChild(document.createTextNode(" " + opt.explanation));
        ul.appendChild(li);
      });
      item.appendChild(ul);

      if (q.doc) {
        const a = document.createElement("a");
        a.className = "doc-link";
        a.href = q.doc;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = "📖 Documentación oficial de Microsoft relacionada";
        item.appendChild(a);
      }
      container.appendChild(item);
    });
  }

  function toggleReview() {
    const container = el("reviewContainer");
    container.hidden = !container.hidden;
    const label = mode === "exam" ? "respuestas y explicaciones" : "revisión";
    el("reviewBtn").textContent = container.hidden
      ? (mode === "exam" ? "Ver respuestas y explicaciones" : "Revisar respuestas")
      : "Ocultar " + label;
  }

  function restart() {
    stopTimer();
    resultScreen.hidden = true;
    headerStats.hidden = true;
    startScreen.hidden = false;
  }

  el("startBtn").addEventListener("click", startQuiz);
  confirmBtn.addEventListener("click", confirmAnswer);
  nextBtn.addEventListener("click", nextQuestion);
  prevBtn.addEventListener("click", prevQuestion);
  finishBtn.addEventListener("click", showResults);
  el("reviewBtn").addEventListener("click", toggleReview);
  el("restartBtn").addEventListener("click", restart);
})();
