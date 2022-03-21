//Global Variables:
const state = {
    'playerWinCount': 0,
    'computerWinCount': 0
};

function computerPlay() {
    const comp_move = ['rock', 'paper', 'scissors'];

    let rand_index = Math.floor(Math.random() * 3);

    return comp_move[rand_index];
}

function playRound(playerSelection, computerSelection) {

    const roundResults = ['You win! Rock smashes scissors.', 'You win! Scissors cuts paper.', 'You win! Paper covers rock!', 'You lose! Paper covers rock!', 'You lose! Rock smashes scissors.', 'You lose! Scissors cuts paper.', 'It\'s a tie!'];

    const playerSelectionNorm = playerSelection.toLowerCase();

    switch (playerSelectionNorm) {
        case 'rock':
            if (computerSelection === 'scissors') {
                return [roundResults[0], 0];
            } else if (computerSelection === 'paper') {
                return [roundResults[3], 1];
            } else {
                return [roundResults[6], 2];
            }
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                return [roundResults[1], 0];
            } else if (computerSelection === 'rock') {
                return [roundResults[4], 1];
            }
            else {
                return [roundResults[6], 2];
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                return [roundResults[2], 0];
            } else if (computerSelection === 'scissors') {
                return [roundResults[5], 1];
            }
            else {
                return [roundResults[6], 2];
            }
            break;
    }
}

// Query Selectors for the buttons that call the playround
const playerChoice = document.querySelectorAll('button');

function removeTransition(e) {
    if (e.propertyName !== 'font-size') return;
    this.classList.remove('buttonClicked');
}

function resetScores() {
    state.computerWinCount = 0;
    state.playerWinCount = 0;

    document.getElementById('playerScore').innerText = state.playerWinCount;
    document.getElementById('computerScore').innerText = state.computerWinCount;
}

function reset() {
    const resetButton = document.createElement('button');
    resetButton.innerText = 'Play Again?';
    resetButton.addEventListener('click', e => {
        resetScores();
        const enableButtons = document.querySelectorAll('button');
        enableButtons.forEach(e => {
            e.removeAttribute('disabled');
        });
        const resetDiv = document.getElementById('resetButton');
        resetDiv.removeChild(resetButton);
        const resultDisplay = document.querySelector('.results');
        resultDisplay.innerText = 'Rocks, Paper, Scissors!';
    });
    document.getElementById('resetButton').appendChild(resetButton);
}

function disableButtons() {
    const buttonDisable = document.querySelectorAll('button');
    buttonDisable.forEach(button => {
        button.disabled = true;
    });
}

/***
 * Function: Increment score for either the computer or the Player.
 * Inputs: results - expecting to be an array containing who won the round,
 *    as well as an indicator for who won.
 */
function calculateScore(results) {
    if (results[1] === 0) {
        ++state.playerWinCount;
        document.getElementById('playerScore').innerText = state.playerWinCount;
    } else if (results[1] === 1) {
        ++state.computerWinCount;
        document.getElementById('computerScore').innerText = state.computerWinCount;
    } else {
        return;
    }

    if (state.playerWinCount === 5) {
        document.getElementsByClassName('results').item(0).innerText = 'You Win,\nCongratulations!';
        disableButtons();
        reset();
    } else if (state.computerWinCount === 5) {
        document.getElementsByClassName('results').item(0).innerText = 'The Computer Wins!\nTry again next time.';
        disableButtons();
        reset();
    }
}

playerChoice.forEach(element => {
    element.addEventListener('click', (e) => {
        const buttonClicked = document.querySelector(`#${e.target.id}`);
        buttonClicked.classList.add('buttonClicked');

        const result = (playRound(e.target.id, computerPlay()));
        document.getElementsByClassName('results').item(0).innerText = result[0];

        calculateScore(result);
    });

    element.addEventListener('transitionend', removeTransition);
});