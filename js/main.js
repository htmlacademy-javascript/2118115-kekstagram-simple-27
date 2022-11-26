import './util.js';
import './user-photo.js';

import './user-modal.js';
import './user-slider.js';

import './server.js';
import './popup.js';
import {getData} from './server.js';
import {createPhotos} from './user-photo.js';
import {setUserFormSubmit, closeUserModal, closeFormEditingImgError} from './user-modal.js';

getData((photos) => {
  createPhotos(photos);
});

setUserFormSubmit(closeUserModal, closeFormEditingImgError);
