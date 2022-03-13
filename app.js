//randomely returns either Rock, Paper, or Scissors
function computerPlay() {
  const items = ["Rock", "Paper", "Scissors"];
  return items[~~(Math.random() * items.length)];
}

