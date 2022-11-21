import './userphoto.js';
import './user-form.js';
import { isEscapeKey } from './util.js';
import { isEnterKey } from './util.js';
import { picturesForTemplateBlock } from './userphoto.js';
import {resetFilterValues, isOriginalEffect} from './user-slider.js';


const SCALE_CONTROL_MAX = 100
const SCALE_STEP = 25;

const userModalElement = document.querySelector('.img-upload__overlay')
const userModalOpenElement = document.querySelector('#upload-file')
const userModalCloseElement = userModalElement.querySelector('.img-upload__cancel')

const btnSmallerScale = document.querySelector('.scale__control--smaller');
const btnBiggerScale = document.querySelector('.scale__control--bigger');
const valueScaleInput = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

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
      closeUserModal();
    }
  };

function openUserModal () {
    userModalElement.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    valueScaleInput.setAttribute('value', '100%');
   
    isOriginalEffect();
    document.addEventListener('keydown', onPopupEscKeydown);
    btnSmallerScale.addEventListener('click', btnSmallerScale);
    btnBiggerScale.addEventListener('click', btnBiggerScale);
};

function closeUserModal () {
    userModalElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    resetFilterValues();

    document.removeEventListener('keydown', onPopupEscKeydown);
    btnSmallerScale.removeEventListener('click', btnSmallerScale);
    btnBiggerScale.removeEventListener('click', btnBiggerScale);
};

userModalOpenElement.addEventListener('click', () => {
    openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
    openUserModal();
  });
  

userModalCloseElement.addEventListener('click', () => {
    closeUserModal();
  });

userModalCloseElement.addEventListener('keydown', (evt) => {
    closeUserModal();
  });  

  export {imgUploadPreview, valueScaleInput, SCALE_CONTROL_MAX};
