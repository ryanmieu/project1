'use strict';

let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

let dice = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.guesses').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.guesses').style.color = 'red';
    displayMessage('Please enter a valid guess!');
  } else if (dice > guess) {
    document.querySelector('.guesses').style.color = 'black';
    if (score > 0) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      displayMessage('Too low!');
    } else if (score === 0) {
      displayMessage('You lost the game! :(');
    }
  } else if (dice < guess) {
    document.querySelector('.guesses').style.color = 'black';
    if (score > 0) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      displayMessage('Too high!');
    } else if (score === 0) {
      displayMessage('You lost the game! :(');
    }
  } else if (dice === guess) {
    document.querySelector('.guesses').style.color = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }
    document.querySelector('.number').textContent = dice;
    displayMessage('🎉 Congrats!!! correct number!');
    document.querySelector('.number').style.color = 'green';
  }
});

document.querySelector('.newGame').addEventListener('click', function () {
  document.querySelector('.guesses').style.color = 'black';
  score = 20;
  dice = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.color = 'black';
  document.querySelector('.number').textContent = '[?]';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
});
