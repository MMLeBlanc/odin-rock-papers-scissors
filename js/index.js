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
                return roundResults[6, 2];
            }
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                return [roundResults[2], 0];
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

    for (let i = 0; i < 5; i++) {

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
        if (playerWinCount === 3 || computerWinCount === 3) {
            break;
        }
    }
    if (playerWinCount > computerWinCount) {
        console.log('Player Wins! Congratulations!');
    } else {
        console.log('Computer Wins! Try again next time.');
    }
}

game();