const userForm = document.querySelector('.img-upload__form');

const pristine = new pristineMin(userForm, {
  classTo: 'img-upload__text',
  errorTextParrent: 'img-upload_text',
  errorTextClass: 'img-upload_error-text',
});

userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    const isValid = pristine.validate();
    if (isValid) {
      console.log('Можно отправлять');
    } else {
      console.log('Форма невалидна');
    }
  });