//displays computer and player's selection UI
const selection = document.querySelector(".selection");
const pChoice = document.createElement("p");
const cChoice = document.createElement("p");
selection.appendChild(cChoice);
selection.appendChild(pChoice);

//displays score UI
const scoreBox = document.querySelector(".score-box");
const pScore = document.createElement("h4");
const cScore = document.createElement("h4");
scoreBox.appendChild(pScore);
scoreBox.appendChild(cScore);

//displays round result UI
const resultBox = document.querySelector(".result-box");
const gameResult = document.createElement("p");
resultBox.appendChild(gameResult);

//game logic
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

//computer selection - randomly selects either rock, paper, or scissors
function computerPlay() {
  const items = ["rock", "paper", "scissors"];
  return items[~~(Math.random() * items.length)].toString();
}

//player selection buttons
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

//event listener to the buttons that call playRound function with the correct playerSelection
rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

//initiates computer selection and update player selection and update score when a player clicks a button
function handleClick(playerSelection) {
  const computerSelection = computerPlay();
  updateChoices(playerSelection, computerSelection);
  updateScore();
}

//displays player selection and computer selection
function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      pChoice.textContent = "Player chose ✊";
      break;
    case "paper":
      pChoice.textContent = "Player chose 🖐️";
      break;
    case "scissors":
      pChoice.textContent = "Player chose ✌️";
      break;
  }

  switch (computerSelection) {
    case "rock":
      cChoice.textContent = "Computer chose ✊";
      break;
    case "paper":
      cChoice.textContent = "Computer chose 🖐️";
      break;
    case "scissors":
      cChoice.textContent = "Computer chose ✌️";
      break;
  }
  playRound(playerSelection, computerSelection);
}

//plays a single round (main game logic)
function playRound(playerSelection, computerSelection) {
  //tie
  if (playerSelection === computerSelection) {
    roundWinner == "tie";
  }
  //player wins
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    ++playerScore;
    roundWinner = "player";
  }
  //computer wins
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    ++computerScore;
    roundWinner = "computer";
  }
  updateScore(roundWinner, computerScore, playerScore);
  isGameOver();
}

function updateScore() {
  if (roundWinner === "tie") {
    gameResult.textContent = "Tie!";
  } else if (roundWinner === "player") {
    gameResult.textContent === "Player won!";
  } else if (roundWinner === "computer") {
    gameResult.textContent === "Computer Won!";
  }
  pScore.textContent = `Player: ${playerScore}`;
  cScore.textContent = `Computer: ${computerScore}`;
}

function isGameOver() {
  return playerScore === 5 || computerScore == 5;
}
