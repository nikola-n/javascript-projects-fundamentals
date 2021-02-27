'use strict';


let numberToGuess = Math.trunc(Math.random() * 20) + 1;
let score         = 20;
let highScore     = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    let inputNumber = Number(document.querySelector('.guess').value);
    if (!inputNumber) {
        displayMessage('⛔️ No number!');
    } else if (inputNumber === numberToGuess) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width        = '15rem';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = inputNumber;
        if (score > highScore) {
            highScore                                        = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (inputNumber !== numberToGuess) {
        if (score < 1) {
            displayMessage('You Lost the game!');
            document.querySelector('.score').textContent = 0;
        } else {
            displayMessage(inputNumber > numberToGuess ? 'Too High' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '';
    score                                                = 20;
    document.querySelector('.score').textContent         = score;
    document.querySelector('.number').textContent        = '?';
    document.querySelector('.guess').value               = '';
    numberToGuess                                        = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';

});