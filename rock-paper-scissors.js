// Div Assignment DONE
// Score Display Assignment DONE
const btnBox = document.querySelector("#player-selectors");
const resultsBox = document.querySelector("#game-results");
const roundResultsBox = document.querySelector("#round-results");

const playerScoreDisplay = document.querySelector("#p-score");
const computerScoreDisplay = document.querySelector("#c-score");
const currentRoundDisplay = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

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

function updateScoreDisplay() {
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
};

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

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        currentRoundDisplay.textContent = "You Tied!";
    } else if (
        (humanSelection === 'Rock' && computerSelection === 'Scissors') ||
        (humanSelection === 'Paper' && computerSelection === 'Rock') ||
        (humanSelection === 'Scissors' && computerSelection == 'Paper')
    ) {
        currentRoundDisplay.textContent = `You Win! ${humanSelection} beats ${computerSelection}.`;
        humanScore++;
        updateScoreDisplay();
    } else {
        currentRoundDisplay.textContent = `You Lose! ${computerSelection} beats ${humanSelection}.`;
        computerScore++;
        updateScoreDisplay();
    }
}

updateScoreDisplay();
    // OLD VICTORY DECISION TREE (FUNCTION WRAP)
    // if (humanScore === computerScore) {
    //     console.log('You Tied the Computer! Congratulations?');
    // } else if (humanScore > computerScore) {
    //     console.log('You Beat the Computer! Congratulations!');
    // } else {
    //     console.log('The Computer Beat You! Try Again?');
    // }