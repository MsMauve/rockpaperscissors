function getComputerChoice() {
    const choiceSeed = Math.floor(Math.random() * 3) + 1;
    if (choiceSeed === 1) {
        return "Rock";
    } else if (choiceSeed === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
   const humanChoice =  prompt("Rock, Paper, or Scissors?").toLowerCase();
   return humanChoice[0].toUpperCase() + humanChoice.slice(1);
}