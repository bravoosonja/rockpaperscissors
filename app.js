let playerScore = 0;
let computerScore = 0;

//randomly returns either Rock, Paper, or Scissors
function computerPlay() {
  const items = ["rock", "paper", "scissors"];
  return items[~~(Math.random() * items.length)].toString();
}

function playerPlay() {
  const playerChoice = prompt("Choose either rock, paper, or scissors");
  return playerChoice;
}

//plays a single round
function playRound(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      ++computerScore;
      return "Computer won";
    } else {
      ++playerScore;
      return "Player won";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      ++computerScore;
      return "Computer won";
    } else {
      ++playerScore;
      return "Player won";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      ++computerScore;
      return "Computer won";
    } else {
      ++playerScore;
      return "Player won";
    }
  }
}

//plays 5 round of playRound and displays result for each round
function game(playerScore, computerScore) {
  for (let round = 1; round < 6; round++) {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    console.log(
      `Round ${round} Result: ${playRound(playerSelection, computerSelection)}`
    );
  }
  if (computerScore > playerScore) {
    console.log("The winner for this round is COMPUTER");
  } else if (computerScore === playerScore) {
    console.log("Tie game");
  } else {
    console.log("The winner for this round is PLAYER");
  }
}
