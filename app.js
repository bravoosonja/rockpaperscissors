//randomly returns either Rock, Paper, or Scissors
function computerPlay() {
  const items = ["rock", "paper", "scissors"];
  return items[~~(Math.random() * items.length)].toString();
}

//event listener to the buttons that call playRound function with the correct playerSelection
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  playRound.playerSelection === "rock";
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  playRound.playerSelection === "paper";
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  playRound.playerSelection === "scissors";
});

//add a div for displaying results
const results = document.createElement("div");
results.setAttribute("id", "results");
results.textContent = playRound.computerScore + playRound.playerScore;

//plays a single round (main game logic)
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
      computerScore += 1;
      return computerScore;
    } else {
      console.log("Player won");
      playerScore += 1;
      return playerScore;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("Computer won");
      computerScore += 1;
      return computerScore;
    } else {
      console.log("Player won");
      playerScore += 1;
      return playerScore;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("Computer won");
      computerScore += 1;
      return computerScore;
    } else {
      console.log("Player won");
      playerScore += 1;
      return playerScore;
    }
  }
}
