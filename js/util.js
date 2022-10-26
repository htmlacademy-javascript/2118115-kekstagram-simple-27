const MIN_NUMBER = 1;
const MAX_NUMBER = 25;
const INPUT_TXT = 'Ура-ура!';
const MAX_LENGHT = 20;

function randomIntFromInterval(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  min = Math.floor(min);
  max = Math.ceil(max);
  if (min === max) {
    return min;
  }
  return min > max ? random(max, min) : random(min, max);
}

function random(min, max) {
  return (Math.round(Math.random() * (max - min)) + min);
}

randomIntFromInterval(MIN_NUMBER, MAX_NUMBER);

function stringLength(input, line) {
  return !(input.length > line);
}

stringLength(INPUT_TXT, MAX_LENGHT);


let lastGeneratedPhotoId = 0;
let lastGeneratedUrlId = 0;

function getPhotoId () {
  return ++lastGeneratedPhotoId;
}

function getPhotoUrl () {
  return ++lastGeneratedUrlId;
}

const getRandomArrayElement = (elements) => elements[randomIntFromInterval(0, elements.length - 1)];

export {getRandomArrayElement};
export {randomIntFromInterval};
export {getPhotoId};
export {getPhotoUrl};
