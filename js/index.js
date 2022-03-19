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

function game() {

    let playerWinCount = 0;
    let computerWinCount = 0;

    //get input from user
    let playerChoice = window.prompt("Please choose rock, paper, or scissors: ");
    let compChoice = computerPlay();

    let results = playRound(playerChoice, compChoice);

    console.log(results[0]);

    if (results[1] === 0) {
        ++playerWinCount;
    } else if (results[1] === 1) {
        ++computerWinCount;
    } else {
        i--;
    }
}


// Query Selectors for the buttons that call the playround
const playerChoice = document.querySelectorAll('button');

playerChoice.forEach(element => {
    element.addEventListener('click', (e) => {
        const result = (playRound(e.target.id, computerPlay()));
        document.getElementsByClassName('results').item(0).innerText = result[0];
    });
});
//playerChoice.addEventListener('click', playRound(playerChoice[]))