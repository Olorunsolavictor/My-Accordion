'use strict';
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const rotate = document.querySelectorAll('.rotate');

const showAnswer = function (i) {
  answers[i].classList.toggle('hidden');
};
const arrowRotate = function (i) {
  rotate[i].classList.toggle('rotate');
};
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', () => {
    showAnswer(i);
    arrowRotate(i);
  });
}
