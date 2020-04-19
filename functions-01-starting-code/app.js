/** @format */

const startGameBtn = document.getElementById("start-game-btn");
const showLogsBtn = document.getElementById("log-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";

let gameIsRunning = false;
let matchCount = 0;

let scoreLogDatas = [];

const getPlayerChoice = function () {
  const selection = prompt(
    `What will you choose ? ${ROCK}, ${PAPER} or ${SCISSOR}`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(
      `Invalid string entered, we are chosing ${DEFAULT_PLAYER_CHOICE} for you`
    );
    return DEFAULT_PLAYER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.37) {
    return ROCK;
  } else if (randomValue < 0.64) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = (cChoice, pChoice = cChoice === ROCK ? SCISSOR : DEFAULT_PLAYER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === PAPER && pChoice === SCISSOR) ||
    (cChoice === SCISSOR && pChoice === ROCK) ||
    (cChoice === ROCK && pChoice === PAPER)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

function writeLog(cC, pC, W) {
  matchCount += 1;
  let scoreLogs = {
    computerChoice: cC,
    playerChoice: pC,
    winnerResult: W,
    partyNumber: matchCount,
  };

  scoreLogDatas.push(scoreLogs);
}

startGameBtn.addEventListener("click", function start() {
  if (gameIsRunning) {
    return;
  }

  console.log("Game is starting...");
  gameIsRunning = true;

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);

  console.log("Winner is ▸ ", winner);

  // Run the function eachtime the button is pressed
  writeLog(computerChoice, playerChoice, winner);

  gameIsRunning = false;
});

showLogsBtn.addEventListener("click", function () {
  console.log(scoreLogDatas);
});
