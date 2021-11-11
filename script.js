'use strict';

const getSecretNumber = (maxNumber) => {
    return Math.trunc(Math.random() * maxNumber) + 1;
}

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const displayScore = (score) => {
    document.querySelector('.score').textContent = score;
}

const displayNumber = (number) => {
    document.querySelector('.number').textContent = number;
}

const displayHighScore = (score) => {
    document.querySelector('.highscore').textContent = highScore;
}

const disableCheckButton = (disable) => {
    document.querySelector('.check').disabled = disable;
}

let secretNumber = getSecretNumber(20);
let score = 20;
let highScore = 0;

const resetInputGuessValue = (value) => {
    document.querySelector('.guess').value = value;
    document.querySelector('.guess').focus();
}

const setBackgroundColor = (color) => {
    document.querySelector('body').style.backgroundColor = color;
}

const setNumberWidth = (width) => {
    document.querySelector('.number').style.width = width;
}

const setGameOver = () => {
    displayMessage('💀 Game Over!');
    disableCheckButton(true);
    displayScore(0);
}

const setGameWon = () => {
    displayNumber(secretNumber);
    displayMessage('🎉 Correct Number!');
    highScore = score > highScore ? score : highScore;
    displayHighScore(highScore);
    setBackgroundColor('#60b347');
    setNumberWidth('30rem');
}

const setWrongNumber = (message) => {
    displayMessage(message);
    score--;
    displayScore(score);
}

// reset the game
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = getSecretNumber(20);
    displayScore(score);
    displayNumber('?');
    displayMessage('Start guessing...');
    disableCheckButton(false);

    // set styles
    resetInputGuessValue('');
    setNumberWidth('15rem');
    setBackgroundColor('#222');

})

// check the guess
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score > 1) {
        if (!guess) {
            displayMessage('⛔️ Please enter a number');
        } else if (guess === secretNumber) {
            setGameWon();
        } else if (guess !== secretNumber) {
            let message = (guess > secretNumber) ? '📈 Too high!' : '📉 Too low!';
            setWrongNumber(message);
        }
    } else {
        setGameOver();
    }
});``