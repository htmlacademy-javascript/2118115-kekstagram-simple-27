import './userphoto.js';
//import './user-form.js';
import { isEscapeKey } from './util.js';

import { picturesForTemplateBlock } from './userphoto.js';
import {resetFilterValues, isOriginalEffect, sliderElement, elementEffectNone, createSlider} from './user-slider.js';
import {sendData} from './server.js';

import {showPopupSuccess, showPopupError} from './popup.js';

const SCALE_CONTROL_MAX = 100
const SCALE_STEP = 25;

const userModalOpenElement = document.querySelector('#upload-file');
const userModalElement = picturesForTemplateBlock.querySelector('.img-upload__overlay');
const userModalCloseElement = userModalElement.querySelector('#upload-cancel');
const inputDescription = userModalElement.querySelector('.text__description');
const radioEffectsItems = document.querySelectorAll('.effects__radio');

const btnSmallerScale = document.querySelector('.scale__control--smaller');
const btnBiggerScale = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const imgUploadForm = picturesForTemplateBlock.querySelector('.img-upload__form');

const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');
const imageCore = imageContainer.querySelector('img');




const setScale = (scale) => {
  scaleValue.value = `${scale}%`;
  imageCore.style.transform = `scale(${scale / 100})`;
};

btnBiggerScale.addEventListener('click', () => {
  const scale = parseInt(scaleValue.value, 10);
  if (scale < 100 && scale >= SCALE_STEP) {
    setScale(scale + SCALE_STEP);
  }
});

btnSmallerScale.addEventListener('click', () => {
  const scale = parseInt(scaleValue.value, 10);
  if (scale <= SCALE_CONTROL_MAX && scale > SCALE_STEP) {
    setScale(scale - SCALE_STEP);
  }
});

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const inputInFocus = document.activeElement;

    if (inputInFocus === inputDescription) {
      return;
    }
    closeUserModal();
  }
};

function openUserModal () {
    userModalElement.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    scaleValue.value = '100%';
    elementEffectNone.checked = true;
    createSlider();
    isOriginalEffect();

    document.addEventListener('keydown', onPopupEscKeydown);
    btnSmallerScale.addEventListener('click', btnSmallerScale);
    btnBiggerScale.addEventListener('click', btnBiggerScale);
    userModalCloseElement.addEventListener('click', closeUserModal);
};

const removeEffect = () => {
  radioEffectsItems.forEach((effect) => {
    effect.removeAttribute('checked');
  });
};

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  clearFormEditing();
  resetFilterValues();
  removeEffect();

  document.removeEventListener('keydown', onPopupEscKeydown);
  btnSmallerScale.removeEventListener('click', btnSmallerScale);
  btnBiggerScale.removeEventListener('click', btnBiggerScale);
  userModalCloseElement.removeEventListener('click', closeUserModal);
}

function closeFormEditingImgError () {
  userModalElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  userModalOpenElement.value = '';
}

userModalOpenElement.addEventListener('change', openUserModal);

function clearFormEditing () {
  userModalOpenElement.value = '';
  inputDescription.value = '';
  imgUploadPreview.style.transform = 'scale(1)';
  // Уничтожить слайдер
  sliderElement.noUiSlider.destroy();
}


const pristine = new Pristine (imgUploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

function validateComment (value) {
  return value.length >= 20 && value.length <= 140;
}

pristine.addValidator(
  userModalElement.querySelector('.text__description'),
  validateComment,
  'От 20 до 140 символов'
);


inputDescription.addEventListener('input', validateComment);

const openFormEditingImgAgain = () => {
  userModalElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
  btnSmallerScale.addEventListener('click', btnSmallerScale);
  btnBiggerScale.addEventListener('click', btnBiggerScale);
  userModalCloseElement.addEventListener('click', closeUserModal);
};

const uploadImgAgain = () => {
  userModalOpenElement.removeEventListener('change', openUserModal);
  userModalOpenElement.addEventListener('change', openFormEditingImgAgain);
};

const setUserFormSubmit = (onSuccess, onFail) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(pristine.validate()){
      sendData(
        () => {
          onSuccess();
          showPopupSuccess();
        },
        () => {
          onFail();
          showPopupError();
          uploadImgAgain();
        },
        new FormData(evt.target),
      );
    }
  });
};





/*

function closeUserModal () {
    userModalElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    resetFilterValues();
 onPopupEscKeydown);
    btnSmallerScale.removeEventListener('click', btnSmallerScale);
    btnBiggerScale.removeEventListener('click', btnBiggerScale);
};

userModalOpenElement.addEventListener('click', () => {
    openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
    openUserModal();
  });
  

    document.removeEventListener('keydown',
userModalCloseElement.addEventListener('click', () => {
    closeUserModal();
  });

userModalCloseElement.addEventListener('keydown', (evt) => {
    closeUserModal();
  });  
*/



  export {imgUploadPreview, userModalOpenElement, userModalElement, scaleValue, SCALE_CONTROL_MAX, setUserFormSubmit, closeUserModal, closeFormEditingImgError};
