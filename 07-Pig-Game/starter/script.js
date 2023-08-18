'use strict';

// define elements
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');
imgDice.classList.add('hidden');
const goal = 10;
let playable = true;
// define functions
const roll = () => Math.trunc(Math.random() * 6 + 1);
const getCurrentPlayer = () =>
  document.querySelector('.player--0').classList.contains('player--active')
    ? 0
    : 1;
const highlight = current => {
  const previous = 1 - current;
  document
    .querySelector(`.player--${previous}`)
    .classList.toggle('player--active');
  document
    .querySelector(`.player--${current}`)
    .classList.toggle('player--active');
};
const settle = player => {
  const current = document.querySelector(`#current--${player}`);
  const total = document.querySelector(`#score--${player}`);
  // if (!imgDice.src)
  if (!imgDice.src.includes('-1'))
    total.textContent = Number(total.textContent) + Number(current.textContent);
  current.textContent = 0;
};
const switchSides = (current, next) => {
  settle(current);
  highlight(next);
};
const cleanup = () => {
  playable = true;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  imgDice.classList.add('hidden');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--1`).classList.remove('player--winner');
};

// add listeners
btnRoll.addEventListener('click', function () {
  if (!playable) return;
  imgDice.classList.remove('hidden');
  const dice = roll();
  imgDice.src = `dice-${dice}.png`;

  const current = getCurrentPlayer();
  const next = 1 - current;

  if (dice === 1) {
    switchSides(current, next);
    return;
  }

  document.querySelector(`#current--${current}`).textContent =
    document.querySelector(`#current--${current}`).textContent - 0 + dice;
});
btnHold.addEventListener('click', function () {
  if (!playable) return;
  const current = getCurrentPlayer();
  const next = 1 - current;
  settle(current);
  console.log(document.querySelector(`#score--${current}`));
  // switchSides(current, next);
  if (document.querySelector(`#score--${current}`).textContent - 0 >= goal) {
    document
      .querySelector(`.player--${current}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${current}`)
      .classList.add('player--winner');
    playable = false;
    imgDice.classList.add('hidden');
    setTimeout(cleanup, 5000);
  } else {
    highlight(next);
  }
});
btnNewGame.addEventListener('click', cleanup);
