import './userphoto.js';
import { isEscapeKey } from './util.js';
import { isEnterKey } from './util.js';
import { picturesForTemplateBlock } from './userphoto.js';

const userModalElement = document.querySelector('.img-upload__overlay')
const userModalOpenElement = document.querySelector('#upload-file')
const userModalCloseElement = userModalElement.querySelector('.img-upload__cancel')

const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  };

function openUserModal () {
    userModalElement.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');

    document.addEventListener('keydown', onPopupEscKeydown);
};

function closeUserModal () {
    userModalElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');

    document.removeEventListener('keydown', onPopupEscKeydown);
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
