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

let humanScore = 0;
let computerScore = 0;

function displayScores(humanScore, computerScore) {
    console.log(`
        Player Score = ${humanScore}
        Computer Score = ${computerScore}
        `)
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("You Tied!");
        displayScores(humanScore, computerScore);
    } else if (
        (humanSelection === 'Rock' && computerSelection === 'Scissors') ||
        (humanSelection === 'Paper' && computerSelection === 'Rock') ||
        (humanSelection === 'Scissors' && computerSelection == 'Paper')
    ) {
        console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
        humanScore++;
        displayScores(humanScore, computerScore);
    } else {
        console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
        computerScore++;
        displayScores(humanScore, computerScore);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);