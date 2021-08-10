'use strict';
const again = document.querySelector('.again');
const viewNumber = document.querySelector('.number');
const userGuess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let labelScore = 19;
let userScore = 1;

const random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const computerGuess = random(1, 20);
const guess = function () {
    // const computerGuess = random(1, 20);
    const user = userGuess.value;
    if (user >= 1 && user <= 20) {
        if (user > computerGuess) {
            message.innerHTML = 'Too High';
        } else if (user < computerGuess) {
            message.innerHTML = 'Too Low';
        } else {
            message.innerHTML = 'Correct Answer';
            highscore.innerHTML = userScore++;
            document.body.style.backgroundColor = 'green';
        }
        score.innerHTML = labelScore--;
    } else {
        alert('Number between 1 to 20');
    }
    viewNumber.innerHTML = userGuess.value;
}

const startAgain = function () {
    userGuess.value = '';
    score.innerHTML = 20;
    highscore.innerHTML = 0;
    message.innerHTML = 'Start guessing...';
    viewNumber.innerHTML = '?'
    document.body.style.backgroundColor = '#222';
}