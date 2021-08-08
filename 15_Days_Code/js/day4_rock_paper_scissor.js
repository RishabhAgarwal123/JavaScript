let userScore = 0;
let computerScore = 0;
const gameWinner = document.querySelector('#userChoice');
const score = document.querySelector('#score');

const decideWinner = function (user, computer) {
    if (user === computer) return `It's a tie!`;
    else if (user === 'rock') {
        if (computer === 'scissors') {
            userScore++;
            return 'User';
        } else if (computer === 'paper') {
            computerScore++;
            return 'Computer';
        }
    } else if (user === 'paper') {
        if (computer === 'scissors') {
            computerScore++;
            return 'Computer';
        } else if (computer === 'rock') {
            userScore++;
            return 'User';
        }
    } else if (user === 'scissors') {
        if (computer === 'paper') {
            userScore++;
            return 'User';
        } else if (computer === 'rock') {
            computerScore++;
            return 'Computer';
        }
    }
}

const game = function (value) {
    let choice = value;
    let computerChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    let winner = decideWinner(choice, computerChoice);

    if (winner === 'User') {
        gameWinner.innerHTML = winner + ' wins';
        gameWinner.classList.add('win');
    } else if (winner === 'Computer') {
        gameWinner.innerHTML = winner + ' wins';
        gameWinner.classList.add('lose');
    } else {
        gameWinner.innerHTML = winner;
        gameWinner.classList.add('tie');
    }

    score.innerHTML = `
        <span class="sides">User: ${userScore}</span>
        <span class="sides">Computer: ${computerScore}</span>
    `
}