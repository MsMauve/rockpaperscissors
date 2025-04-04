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

// Div Assignment DONE
// Score Display Assignment DONE
const btnBox = document.querySelector("#player-selectors")
const resultsBox = document.querySelector("#results")

let humanScore = 0;
let computerScore = 0;

// Event Handlers for new buttons! Holy shit it worked
btnBox.addEventListener('click', (event) => {
    let targetBtn = event.target;


    switch(targetBtn.id) {
        case 'rock':
            playRound('Rock', getComputerChoice());
            break;
        case 'paper':
            playRound('Paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('Scissors', getComputerChoice());
            break;
    }
});
// function getHumanChoice() {
//    const humanChoice =  prompt("Rock, Paper, or Scissors?").toLowerCase();
//    return humanChoice[0].toUpperCase() + humanChoice.slice(1);
// }

function getHumanChoice() {

}

function displayScores(humanScore, computerScore) {
    console.log(`
        Player Score = ${humanScore}
        Computer Score = ${computerScore}
        `)
}
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("You Tied!");
    } else if (
        (humanSelection === 'Rock' && computerSelection === 'Scissors') ||
        (humanSelection === 'Paper' && computerSelection === 'Rock') ||
        (humanSelection === 'Scissors' && computerSelection == 'Paper')
    ) {
        console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
        humanScore++;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
        computerScore++;
    }
}
    // OLD VICTORY DECISION TREE (FUNCTION WRAP)
    // if (humanScore === computerScore) {
    //     console.log('You Tied the Computer! Congratulations?');
    // } else if (humanScore > computerScore) {
    //     console.log('You Beat the Computer! Congratulations!');
    // } else {
    //     console.log('The Computer Beat You! Try Again?');
    // }