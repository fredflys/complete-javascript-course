'use strict';

// document object model: tree structured, a bridge between html and js
// DOM !== JS, even not a part of JS

const elmtHScore = document.querySelector('.highscore');
const elmtGuess = document.querySelector('.guess');
const elmtCheckBtn = document.querySelector('.check');
const elmtMsg = document.querySelector('.message');
const elmtNumber = document.querySelector('.number');
const elmtScore = document.querySelector('.score');
const elmtBody = document.querySelector('body');
const elmtAgainBtn = document.querySelector('.again');

const roll = () => Math.trunc(Math.random() * 20 + 1);

let result = roll();
let highScore = elmtHScore.textContent - 0;
let currentScore = 20;

console.log(result, highScore);

elmtCheckBtn.addEventListener('click', function () {
  // game is already lost
  if (currentScore == 0) return;

  const guess = Number(elmtGuess.value);
  // user checks but provides no number
  if (!Number(guess)) {
    elmtMsg.textContent = '🚫 No number!';
    return;
  }

  // correct guess
  if (guess === result) {
    elmtNumber.textContent = result;
    elmtMsg.textContent = '🎇 You got it!';
    elmtBody.style.backgroundColor = '#60b347';
    elmtNumber.style.width = '30rem';
    if (currentScore > highScore) {
      highScore = currentScore;
      elmtHScore.textContent = highScore;
    }
    return;
  }

  // wrong guess
  if (currentScore > 0) {
    currentScore--;
    elmtScore.textContent = currentScore;
  }

  if (currentScore == 0) {
    elmtMsg.textContent = '🤡 You lost!';
    return;
  }

  if (guess > result) {
    elmtMsg.textContent = '🤺 Too high!';
  } else {
    elmtMsg.textContent = '🤺 Too low!';
  }
});

elmtAgainBtn.addEventListener('click', function () {
  currentScore = 20;
  elmtScore.textContent = currentScore;
  elmtGuess.value = '';
  elmtNumber.textContent = '?';
  elmtBody.style.backgroundColor = '#222';
  elmtNumber.style.width = '15rem';
  elmtMsg.textContent = 'Start guessing...';
  result = roll();
  console.log(result);
});
