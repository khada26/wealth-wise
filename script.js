const TOTAL_QUESTIONS = 10;
const POINTS = { EASY: 10, AVERAGE: 15, DIFFICULT: 25 };

const PATH = [
  { type: "START", row: 8, col: 1 },
  { type: "DIFFICULT", row: 8, col: 2 },
  { type: "AVERAGE", row: 8, col: 3 },
  { type: "EASY", row: 8, col: 4 },
  { type: "DIFFICULT", row: 8, col: 5 },
  { type: "AVERAGE", row: 8, col: 6 },
  { type: "EASY", row: 8, col: 7 },
  { type: "DIFFICULT", row: 8, col: 8 },
  { type: "AVERAGE", row: 7, col: 8 },
  { type: "EASY", row: 6, col: 8 },
  { type: "DIFFICULT", row: 5, col: 8 },
  { type: "AVERAGE", row: 4, col: 8 },
  { type: "EASY", row: 3, col: 8 },
  { type: "DIFFICULT", row: 2, col: 8 },
  { type: "AVERAGE", row: 1, col: 8 },
  { type: "EASY", row: 1, col: 7 },
  { type: "DIFFICULT", row: 1, col: 6 },
  { type: "AVERAGE", row: 1, col: 5 },
  { type: "EASY", row: 1, col: 4 },
  { type: "DIFFICULT", row: 1, col: 3 },
  { type: "AVERAGE", row: 1, col: 2 },
  { type: "EASY", row: 1, col: 1 },
  { type: "DIFFICULT", row: 2, col: 1 },
  { type: "AVERAGE", row: 3, col: 1 },
  { type: "EASY", row: 4, col: 1 },
  { type: "DIFFICULT", row: 5, col: 1 },
  { type: "AVERAGE", row: 6, col: 1 },
  { type: "EASY", row: 7, col: 1 }
];

const QUESTIONS = {
  EASY: [
    { q: "What is the basic economic problem every society faces?", options: ["Unlimited wants and limited resources", "Too many factories", "Lack of money printing", "Unlimited resources"], a: 0 },
    { q: "Which of the following is a need rather than a want?", options: ["Designer shoes", "Food and water", "Latest smartphone", "Concert tickets"], a: 1 },
    { q: "Demand refers to the quantity of a good that consumers are:", options: ["Forced to buy", "Willing and able to buy", "Able to produce", "Willing to tax"], a: 1 },
    { q: "If the price of a product rises, quantity demanded usually:", options: ["Increases", "Stays the same", "Decreases", "Becomes infinite"], a: 2 },
    { q: "Which is a factor of production?", options: ["Advertisements", "Labor", "Shopping malls only", "Receipts"], a: 1 },
    { q: "A market is a place or system where:", options: ["Only governments trade", "Buyers and sellers exchange goods", "Taxes are printed", "Banks close"], a: 1 },
    { q: "Opportunity cost is:", options: ["The money in your wallet", "The next best alternative given up", "A type of tax", "Free lunch"], a: 1 },
    { q: "Which item is a consumer good?", options: ["A factory machine", "A loaf of bread", "An oil well", "A warehouse"], a: 1 },
    { q: "Inflation means:", options: ["Prices falling overall", "A general rise in prices", "More jobs only", "Lower taxes always"], a: 1 },
    { q: "Savings is money that is:", options: ["Spent immediately on wants", "Set aside instead of spent now", "Always invested in stocks", "Printed by shops"], a: 1 },
    { q: "Who decides what to buy in a market economy?", options: ["Only the army", "Consumers and producers", "Foreign tourists only", "No one"], a: 1 },
    { q: "A budget helps a household:", options: ["Ignore expenses", "Plan income and spending", "Print money", "Avoid all taxes forever"], a: 1 }
  ],
  AVERAGE: [
    { q: "Scarcity exists because resources are limited while wants are unlimited.", a: true },
    { q: "Supply is the amount of a good that consumers want to buy.", a: false },
    { q: "An increase in consumer income usually increases demand for normal goods.", a: true },
    { q: "Land, labor, capital, and entrepreneurship are the four factors of production.", a: true },
    { q: "A surplus happens when quantity demanded is greater than quantity supplied.", a: false },
    { q: "Price ceiling is a legal maximum price set below the equilibrium price.", a: true },
    { q: "Gross Domestic Product measures the total value of goods and services produced in a country.", a: true },
    { q: "If supply increases and demand stays the same, prices tend to fall.", a: true },
    { q: "Opportunity cost is always measured only in pesos, never in time or goods.", a: false },
    { q: "Households supply labor to firms in the circular flow of the economy.", a: true },
    { q: "A monopoly is a market with many sellers of identical products.", a: false },
    { q: "Trade allows countries to specialize and consume beyond their own production.", a: true }
  ],
  DIFFICULT: [
    { q: "What do we call the next-best choice given up when a decision is made?", answers: ["opportunity cost", "opportunitycost"] },
    { q: "Name the market situation when quantity supplied equals quantity demanded.", answers: ["equilibrium", "market equilibrium", "equilibrium price"] },
    { q: "What economic system is based mainly on private ownership and free markets?", answers: ["market economy", "capitalism", "free market", "free enterprise"] },
    { q: "Give the term for a general increase in the average price level.", answers: ["inflation"] },
    { q: "What is the payment to labor as a factor of production?", answers: ["wage", "wages", "salary", "salaries"] },
    { q: "Name the curve that shows combinations of two goods an economy can produce.", answers: ["ppc", "ppf", "production possibility curve", "production possibility frontier", "production possibilities curve"] },
    { q: "What do we call extra satisfaction from consuming one more unit of a good?", answers: ["marginal utility", "mu"] },
    { q: "Identify the market structure with only one seller.", answers: ["monopoly"] },
    { q: "What tax is paid on goods produced, sold, or imported?", answers: ["excise tax", "excise", "sales tax", "vat", "value added tax"] },
    { q: "Name the study of how society uses scarce resources.", answers: ["economics"] }
  ]
};

const state = {
  name: "Player",
  position: 0,
  questionsAnswered: 0,
  score: 0,
  correct: 0,
  busy: false,
  used: { EASY: [], AVERAGE: [], DIFFICULT: [] },
  review: []
};

const els = {
  board: document.getElementById("gameBoard"),
  playerNameHud: document.getElementById("playerNameHud"),
  questionsAnswered: document.getElementById("questionsAnswered"),
  score: document.getElementById("score"),
  currentPosition: document.getElementById("currentPosition"),
  turnLog: document.getElementById("turnLog"),
  setupModal: document.getElementById("setupModal"),
  playerName: document.getElementById("playerName"),
  startGame: document.getElementById("startGame"),
  questionModal: document.getElementById("questionModal"),
  questionType: document.getElementById("questionType"),
  questionMeta: document.getElementById("questionMeta"),
  questionText: document.getElementById("questionText"),
  answerContainer: document.getElementById("answerContainer"),
  feedback: document.getElementById("feedback"),
  continueBtn: document.getElementById("continueBtn"),
  gameOverModal: document.getElementById("gameOverModal"),
  resultsSummary: document.getElementById("resultsSummary"),
  finalScore: document.getElementById("finalScore"),
  finalCorrect: document.getElementById("finalCorrect"),
  reviewBody: document.getElementById("reviewBody"),
  playAgain: document.getElementById("playAgain")
};

function buildBoard() {
  els.board.innerHTML = "";

  const center = document.createElement("div");
  center.className = "board-center";
  center.innerHTML = `
    <div class="logo">
      <div class="dice-art">⚄ ⚅</div>
      <h2>WEALTH WISE</h2>
    </div>
    <div class="pockets">
      <div class="pocket"><small>Round</small><strong id="pocketRound">1 / 10</strong></div>
      <div class="pocket" id="dicePocket"></div>
      <div class="pocket"><small>Last roll</small><strong id="lastRoll">—</strong></div>
    </div>
    <button class="roll-btn" id="rollDice">Roll the dice</button>
  `;
  els.board.appendChild(center);

  PATH.forEach((space, index) => {
    const tile = document.createElement("div");
    tile.className = `tile ${space.type.toLowerCase()}`;
    tile.style.gridRow = space.row;
    tile.style.gridColumn = space.col;
    tile.dataset.index = String(index);
    tile.textContent = space.type;
    els.board.appendChild(tile);
  });

  document.getElementById("dicePocket").appendChild(renderDice(1));
  document.getElementById("rollDice").addEventListener("click", onRoll);
  placeToken();
}

function renderDice(value) {
  const face = document.createElement("div");
  face.className = "dice-face";
  face.id = "diceFace";
  const map = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
  };
  for (let i = 1; i <= 9; i += 1) {
    const pip = document.createElement("span");
    pip.className = "pip" + (map[value].includes(i) ? " on" : "");
    face.appendChild(pip);
  }
  return face;
}

function setDice(value, rolling = false) {
  const pocket = document.getElementById("dicePocket");
  pocket.innerHTML = "";
  const face = renderDice(value);
  if (rolling) face.classList.add("rolling");
  pocket.appendChild(face);
}

function placeToken() {
  document.querySelectorAll(".token").forEach((node) => node.remove());
  document.querySelectorAll(".tile").forEach((tile) => tile.classList.remove("current"));
  const tile = document.querySelector(`.tile[data-index="${state.position}"]`);
  if (!tile) return;
  tile.classList.add("current");
  const token = document.createElement("span");
  token.className = "token";
  token.title = state.name;
  tile.appendChild(token);
  els.currentPosition.textContent = PATH[state.position].type;
}

function logTurn(text) {
  const item = document.createElement("li");
  item.textContent = text;
  els.turnLog.prepend(item);
}

function updateHud() {
  els.playerNameHud.textContent = state.name;
  els.questionsAnswered.textContent = `${state.questionsAnswered} / ${TOTAL_QUESTIONS}`;
  els.score.textContent = String(state.score);
  const pocketRound = document.getElementById("pocketRound");
  if (pocketRound) {
    pocketRound.textContent = `${Math.min(state.questionsAnswered + 1, TOTAL_QUESTIONS)} / ${TOTAL_QUESTIONS}`;
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function onRoll() {
  if (state.busy || state.questionsAnswered >= TOTAL_QUESTIONS) return;
  state.busy = true;
  const btn = document.getElementById("rollDice");
  btn.disabled = true;

  setDice(1, true);
  await wait(700);
  const roll = 1 + Math.floor(Math.random() * 6);
  setDice(roll);
  document.getElementById("lastRoll").textContent = String(roll);
  logTurn(`${state.name} rolled a ${roll}.`);

  for (let step = 0; step < roll; step += 1) {
    state.position = (state.position + 1) % PATH.length;
    placeToken();
    await wait(220);
  }

  const land = PATH[state.position];
  if (land.type === "START") {
    logTurn("Landed on START — take another roll.");
    state.busy = false;
    btn.disabled = false;
    return;
  }

  askQuestion(land.type);
}

function pickQuestion(type) {
  const pool = QUESTIONS[type];
  const used = state.used[type];
  const available = pool.map((_, i) => i).filter((i) => !used.includes(i));
  const choices = available.length ? available : pool.map((_, i) => i);
  if (!available.length) state.used[type] = [];
  const index = choices[Math.floor(Math.random() * choices.length)];
  state.used[type].push(index);
  return pool[index];
}

function askQuestion(type) {
  const item = pickQuestion(type);
  const pending = { type, item, answered: false };
  state.pending = pending;

  els.questionType.textContent = type;
  els.questionType.className = `badge ${type.toLowerCase()}`;
  els.questionMeta.textContent = `Question ${state.questionsAnswered + 1} of ${TOTAL_QUESTIONS} · +${POINTS[type]} pts`;
  els.questionText.textContent = item.q;
  els.feedback.hidden = true;
  els.continueBtn.hidden = true;
  els.answerContainer.innerHTML = "";

  if (type === "EASY") {
    const wrap = document.createElement("div");
    wrap.className = "choices";
    item.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "btn option";
      button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
      button.addEventListener("click", () => grade(index === item.a, option, item.options[item.a]));
      wrap.appendChild(button);
    });
    els.answerContainer.appendChild(wrap);
  } else if (type === "AVERAGE") {
    const wrap = document.createElement("div");
    wrap.className = "tf-row";
    ["True", "False"].forEach((label) => {
      const button = document.createElement("button");
      button.className = "btn tf";
      button.textContent = label;
      button.addEventListener("click", () => {
        const chosen = label === "True";
        grade(chosen === item.a, label, item.a ? "True" : "False");
      });
      wrap.appendChild(button);
    });
    els.answerContainer.appendChild(wrap);
  } else {
    const wrap = document.createElement("div");
    wrap.className = "identify";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type your answer";
    input.id = "identifyInput";
    const submit = document.createElement("button");
    submit.className = "btn primary";
    submit.textContent = "Submit answer";
    const send = () => {
      const given = input.value.trim();
      const ok = item.answers.some((ans) => normalize(ans) === normalize(given));
      grade(ok && given.length > 0, given || "(blank)", item.answers[0]);
    };
    submit.addEventListener("click", send);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") send();
    });
    wrap.append(input, submit);
    els.answerContainer.appendChild(wrap);
    input.focus();
  }

  els.questionModal.classList.add("show");
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
}

function grade(correct, given, expected) {
  if (!state.pending || state.pending.answered) return;
  state.pending.answered = true;

  els.answerContainer.querySelectorAll("button, input").forEach((node) => {
    node.disabled = true;
  });

  const type = state.pending.type;
  const question = state.pending.item.q;
  if (correct) {
    state.score += POINTS[type];
    state.correct += 1;
    els.feedback.className = "feedback ok";
    els.feedback.textContent = "Correct. Well played.";
  } else {
    els.feedback.className = "feedback bad";
    els.feedback.textContent = `Not quite. The accepted answer is: ${expected}`;
  }
  els.feedback.hidden = false;
  els.continueBtn.hidden = false;

  state.review.push({
    n: state.questionsAnswered + 1,
    type,
    question,
    given,
    expected,
    correct
  });
  state.questionsAnswered += 1;
  updateHud();
  logTurn(`${type}: ${correct ? "correct" : "incorrect"} (${given})`);
}

function finishIfNeeded() {
  els.questionModal.classList.remove("show");
  state.busy = false;
  const btn = document.getElementById("rollDice");
  if (state.questionsAnswered >= TOTAL_QUESTIONS) {
    if (btn) btn.disabled = true;
    showResults();
  } else if (btn) {
    btn.disabled = false;
  }
}

function showResults() {
  els.resultsSummary.textContent = `${state.name} finished the Wealth Wise round. Checking is done on this results board.`;
  els.finalScore.textContent = String(state.score);
  els.finalCorrect.textContent = `${state.correct} / ${TOTAL_QUESTIONS}`;
  els.reviewBody.innerHTML = state.review.map((row) => `
    <tr>
      <td>${row.n}</td>
      <td>${row.type}</td>
      <td>${row.question}</td>
      <td>${row.given}</td>
      <td class="${row.correct ? "ok-text" : "bad-text"}">${row.correct ? "Correct" : "Wrong"}</td>
    </tr>
  `).join("");
  els.gameOverModal.classList.add("show");
}

function resetGame(name) {
  state.name = name || "Player";
  state.position = 0;
  state.questionsAnswered = 0;
  state.score = 0;
  state.correct = 0;
  state.busy = false;
  state.used = { EASY: [], AVERAGE: [], DIFFICULT: [] };
  state.review = [];
  state.pending = null;
  els.turnLog.innerHTML = "";
  els.gameOverModal.classList.remove("show");
  els.questionModal.classList.remove("show");
  buildBoard();
  updateHud();
  logTurn(`${state.name} placed a token on START.`);
}

els.startGame.addEventListener("click", () => {
  const name = els.playerName.value.trim() || "Player";
  els.setupModal.classList.remove("show");
  resetGame(name);
});

els.playerName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") els.startGame.click();
});

els.continueBtn.addEventListener("click", finishIfNeeded);
els.playAgain.addEventListener("click", () => {
  els.setupModal.classList.add("show");
  els.gameOverModal.classList.remove("show");
});

buildBoard();
updateHud();
