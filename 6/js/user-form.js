const userForm = document.querySelector('.img-upload__form');

const pristine = new Pristine (userForm, {
  classTo: 'img-upload__wrapper',
  errorClass: 'img-upload__wrapper--invalid',
  successClass: 'img-upload__wrapper--valid',
  errorTextParent: 'img-upload__wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__form--error'
});

function validateComment (value) {
  return value.length >= 20 && value.length <= 140;
}

pristine.addValidator(
  userForm.querySelector('.text__description'), 
  validateComment,
  'От 20 до 140 символов'
);

userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    pristine.validate();
});

