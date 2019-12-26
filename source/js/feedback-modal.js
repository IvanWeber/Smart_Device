'use strict';

var feedbackButton = document.querySelector('.advertising__get-free-cons');
var modalFeedback = document.querySelector('.modal-feedback');
var feedbackCloseButton = document.querySelector('.close-button');

var feedbackButtonClickHandler = function () {
  modalFeedback.classList.remove('visually-hidden');
};

var feedbackCloseButtonClickHandler = function () {
  modalFeedback.classList.add('visually-hidden');
};

var modalFeedbackEscKeydownHandler = function (evt) {
  if (evt.keyCode === 27) {
    modalFeedback.classList.add('visually-hidden');
  }
};

feedbackButton.addEventListener('click', feedbackButtonClickHandler);
feedbackCloseButton.addEventListener('click', feedbackCloseButtonClickHandler);
document.addEventListener('keydown', modalFeedbackEscKeydownHandler);
