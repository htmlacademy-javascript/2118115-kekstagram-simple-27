import './util.js';
import './data.js';
import './userphoto.js';

import './user-modal.js';
import './user-form.js';
import './user-slider.js';

import './server.js';
import './popup.js';
import {getData} from './server.js';
import {createPhoto} from './userphoto.js';
import {setUserFormSubmit, closeUserModal, closeFormEditingImgError} from './user-modal.js';

getData((photo) => {
  createPhoto(photo);
});

setUserFormSubmit(closeUserModal, closeFormEditingImgError);
