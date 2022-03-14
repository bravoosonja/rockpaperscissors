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
  let computerScore = 0;
  let playerScore = 0;

  if (playerSelection === computerSelection) {
    console.log("Tie");
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("Computer won");
      ++computerScore;
      return computerScore;
    } else {
      console.log("Player won");
      ++playerScore;
      return playerScore;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("Computer won");
      ++computerScore;
      return computerScore;
    } else {
      console.log("Player won");
      ++playerScore;
      return playerScore;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("Computer won");
      ++computerScore;
      return computerScore;
    } else {
      console.log("Player won");
      ++playerScore;
      return playerScore;
    }
  }
}

//plays 5 round of playRound and displays result for each round
function game(computerScore, playerScore) {
  for (let round = 1; round < 6; round++) {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (computerScore > playerScore) {
    console.log("Winner for this game: COMPUTER");
  }
  if (playerScore > computerScore) {
    console.log("Winner for this game: PLAYER");
  }
  if (computerScore === playerScore) {
    console.log("There is no winner for this game: TIE GAME");
  }
}
