'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// reset the game
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').focus();
    document.querySelector('.number').style.wid`th = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

})

// check the guess
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (score > 1) {
        if (!guess) {
            document.querySelector('.message').textContent = '⛔️ Please enter a number';
        } else if (guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            highScore = score > highScore ? score : highScore;
            document.querySelector('.highscore').textContent = highScore;
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.message').textContent = '💀 Game Over!';
        document.querySelector('.check').disabled = true;
        document.querySelector('.score').textContent = 0;
    }
});