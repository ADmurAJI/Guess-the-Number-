'use strict';

/*Закомментированные строки кода- строки, от которых можно избавиться. Они стали лишними после рефакторинга. Оставил для наглядности. */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let bestScore = 0;
const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.number-input').value);

  // Число не введено или больше 20
  if (!guessNumber) {
    //document.querySelector('.guess-message').textContent =
    //'Введите число от 1 до 20!';
    displayGuessMessage('Введите число от 1 до 20!');
  } else if (guessNumber > 20) {
    // document.querySelector('.guess-message').textContent =
    //   'Введите число от 1 до 20!';
    displayGuessMessage('Введите число от 1 до 20!');

    // Число угадано
  } else if (guessNumber === secretNumber) {
    //document.querySelector('.guess-message').textContent = 'Правильно!!!';
    displayGuessMessage('Правильно!!!');
    document.querySelector('body').style.backgroundColor = 'rgb(18, 219, 226)';
    document.querySelector('.question').style.width = '75rem';
    document.querySelector('.question').textContent = secretNumber;
    if (score > bestScore) {
      bestScore = score;
      document.querySelector('.highscore').textContent = bestScore;
    }

    // Число не угадано!
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.guess-message').textContent =
      //     guessNumber < secretNumber ? 'Слишком мало :(' : 'Слишком много :(';
      displayGuessMessage(
        guessNumber < secretNumber ? 'Слишком мало :(' : 'Слишком много :('
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.guess-message').textContent =
      //     'Удивительно, но ты проиграл!';
      displayGuessMessage('Удивительно, но ты проиграл!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // Число меньше загаданного

  //  else if (guessNumber < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.guess-message').textContent = 'Слишком мало :(';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guess-message').textContent =
  //         'Удивительно, но ты проиграл!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     // Число больше загаданного
  //   } else if (guessNumber > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.guess-message').textContent = 'Слишком много :(';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guess-message').textContent =
  //         'Удивительно, но ты проиграл!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  //   document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
});
