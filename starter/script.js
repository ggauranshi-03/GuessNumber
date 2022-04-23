'use strict';
const message = function (expression) {
  return (document.querySelector('.message').textContent = expression);
};
let highscore = 0;
let secnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  message('Start Guessing..');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    message('No Number');
  } else if (guess === secnumber) {
    document.querySelector('.number').textContent = secnumber;
    message('Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secnumber) {
    if (score > 1) {
      message(guess > secnumber ? 'Too High' : 'Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('You Lost');

      document.querySelector('.score').textContent = 0;
    }
  }
});
