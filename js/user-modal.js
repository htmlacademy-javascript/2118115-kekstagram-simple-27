import './userphoto.js';
import './user-form.js';
import { isEscapeKey } from './util.js';
import { isEnterKey } from './util.js';
import { picturesForTemplateBlock } from './userphoto.js';
import {resetFilterValues, isOriginalEffect} from './user-slider.js';


const SCALE_CONTROL = {
  MIN: 25,
  MIDDLE: 50,
  HIGH: 75,
  MAX: 100,
  STEP: 25,
};

const userModalElement = document.querySelector('.img-upload__overlay')
const userModalOpenElement = document.querySelector('#upload-file')
const userModalCloseElement = userModalElement.querySelector('.img-upload__cancel')

const btnSmallerScale = document.querySelector('.scale__control--smaller');
const btnBiggerScale = document.querySelector('.scale__control--bigger');
const valueScaleInput = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const setScale = (value) => {
  if (value === SCALE_CONTROL.MIN) {
    imgUploadPreview.style.transform = 'scale(0.25)';
  } else if (value === SCALE_CONTROL.MIDDLE) {
    imgUploadPreview.style.transform = 'scale(0.50)';
  } else if (value === SCALE_CONTROL.HIGH) {
    imgUploadPreview.style.transform = 'scale(0.75)';
  } else if (value === SCALE_CONTROL.MAX){
    imgUploadPreview.style.transform = 'scale(1)';
  }
};

const onBtnSmallerScaleClick = () => {
  const currentValue = Number(valueScaleInput.getAttribute('value').replace('%', ''));
  let valueMin = '';
  if (currentValue <= SCALE_CONTROL.MAX && currentValue > SCALE_CONTROL.MIN) {
    valueMin = currentValue - SCALE_CONTROL.STEP;
    valueScaleInput.setAttribute('value', `${valueMin}%`);
    setScale(valueMin);
  }
};
const onBtnBiggerScaleClick = () => {
  const currentValue = Number(valueScaleInput.getAttribute('value').replace('%', ''));
  let valueMax = '';
  if (currentValue >= SCALE_CONTROL.MIN && currentValue < SCALE_CONTROL.MAX) {
    valueMax = currentValue + SCALE_CONTROL.STEP;
    valueScaleInput.setAttribute('value', `${valueMax}%`);
    setScale(valueMax);
  }
};

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
    btnSmallerScale.addEventListener('click', onBtnSmallerScaleClick);
    btnBiggerScale.addEventListener('click', onBtnBiggerScaleClick);
};

function closeUserModal () {
    userModalElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    resetFilterValues();

    document.removeEventListener('keydown', onPopupEscKeydown);
    btnSmallerScale.removeEventListener('click', onBtnSmallerScaleClick);
    btnBiggerScale.removeEventListener('click', onBtnBiggerScaleClick);
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

  export {imgUploadPreview, valueScaleInput, SCALE_CONTROL};
