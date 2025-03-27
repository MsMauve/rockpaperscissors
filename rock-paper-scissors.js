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

function displayScores(humanScore, computerScore) {
    console.log(`
        Player Score = ${humanScore}
        Computer Score = ${computerScore}
        `)
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

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

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore === computerScore) {
        console.log('You Tied the Computer! Congratulations?');
    } else if (humanScore > computerScore) {
        console.log('You Beat the Computer! Congratulations!');
    } else {
        console.log('The Computer Beat You! Try Again?');
    }
}

playGame();