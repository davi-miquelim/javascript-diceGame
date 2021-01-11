'use strict';

//  selecting elements
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
const score1El = document.getElementById(`score--0`);
const score2El = document.getElementById(`score--1`);
const current1El = document.getElementById(`current--0`);
const current2El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const roll = document.querySelector(`.btn--roll`);
const btnNew = document.querySelector(`.btn--new`);
const hold = document.querySelector(`.btn--hold`);

//Starting coditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const isActive = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle(`player--active`);
  player1.classList.toggle(`player--active`);
};

// Rolling dice functionality

roll.addEventListener(`click`, function () {
  if (playing) {
    //1 Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2 Display dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      isActive();
    }
  }

  //3 Check for 1 if true switch player
});
hold.addEventListener(`click`, function () {
  if (playing) {
    // 1. Add current socre to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2 Chek if player score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      diceEl.classList.add(`hidden`);
    } else {
      isActive();
    }
  } else {
  }
});
btnNew.addEventListener(`click`, function () {
  location.reload();
});
