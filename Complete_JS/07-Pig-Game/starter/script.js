'use strict';

const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.querySelector('#score--1');
const currentPlayer0 = document.querySelector('#current--0');
const currentPlayer1 = document.querySelector('#current--1');

const playerElement0 = document.querySelector('.player--0');
const playerElement1 = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;
let gameStatus = true;
let finalScores = [0, 0];

const init = function() {
    currentScore = 0;
    scoreElement0.textContent = 0;
    scoreElement1.textContent = 0;
    playerElement0.classList.add('player--active');
    playerElement1.classList.remove('player--active');
    playerElement0.classList.remove('player--winner');
    playerElement1.classList.remove('player--winner');
    diceElement.classList.add('hidden');
    currentPlayer0.textContent = 0;
    currentPlayer1.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    gameStatus = true;
    finalScores = [0, 0];
};

init();

const generateRandomDiceNumber = function () {
    return Math.trunc(Math.random() * 6) + 1;
}

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerElement0.classList.toggle('player--active');
    playerElement1.classList.toggle('player--active');
}

buttonRoll.addEventListener('click', () => {
    if (gameStatus) {
        const randomThrow = generateRandomDiceNumber();

        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${randomThrow}.png`;

        if (randomThrow !== 1) {
            currentScore += randomThrow;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

buttonHold.addEventListener('click', () => {
    if (gameStatus) {
        finalScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = finalScores[activePlayer];
        if (finalScores[activePlayer] >= 100) {
            gameStatus = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

buttonNew.addEventListener('click', init);