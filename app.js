//randomly returns either Rock, Paper, or Scissors
function computerPlay() {
  const items = ["rock", "paper", "scissors"];
  return items[~~(Math.random() * items.length)].toString();
}

//plays a single round
function playRound(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "Computer won";
    } else {
      return "Player won";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "Computer won";
    } else {
      return "Player won";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "Computer won";
    } else {
      return "Player won";
    }
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(`Computer play: ${computerSelection}`);
console.log(`Player selection: ${playerSelection}`);
console.log(playRound(playerSelection, computerSelection));
