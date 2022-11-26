const ALERT_SHOW_TIME = 3000;

let lastGeneratedPhotoId = 0;
let lastGeneratedUrlId = 0;

function getPhotoId () {
  return ++lastGeneratedPhotoId;
}

function getPhotoUrl () {
  return ++lastGeneratedUrlId;
}

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.bottom = '200px';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '100px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.color = 'white';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = 'Ошибка загрузки данных';
  alertContainer.style.width = '500px';
  alertContainer.style.margin = '0 auto';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {

  getPhotoId,
  getPhotoUrl,
  isEscapeKey,
  showAlert
};
