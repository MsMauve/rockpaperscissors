// Div Assignment DONE
// Score Display Assignment DONE
const btnBox = document.querySelector("#player-selectors");
const resultsBox = document.querySelector("#game-results");
const roundResultsBox = document.querySelector("#round-results");
const finalResultsBox = document.querySelector("#final-tally");

const playerScoreDisplay = document.querySelector("#p-score");
const computerScoreDisplay = document.querySelector("#c-score");
const currentRoundDisplay = document.querySelector("#results");
const finalResultsDisplay = document.querySelector("#tally-text");

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

function decideWinner() {
    if (humanScore === 5) {
        finalResultsDisplay.textContent = "Congrats! You won; play again?";
        resetBtn = document.createElement("button");
        resetBtn.textContent = "Refresh Page";
        finalResultsBox.appendChild(resetBtn);

        resetBtn.addEventListener('click', () => {
            location.reload();
        });
    } else if (computerScore === 5) {
        finalResultsDisplay.textContent = "The Singularity is upon us! You lost; play again?";
        resetBtn = document.createElement("button");
        resetBtn.textContent = "Refresh Page";
        finalResultsBox.appendChild(resetBtn);

        resetBtn.addEventListener('click', () => {
            location.reload();
        });
    }
}

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
        decideWinner();
    } else {
        currentRoundDisplay.textContent = `You Lose! ${computerSelection} beats ${humanSelection}.`;
        computerScore++;
        updateScoreDisplay();
        decideWinner();
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