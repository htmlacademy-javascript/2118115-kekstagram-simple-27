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

const TRAVEL = [
  'beach',
  'goToTheBeach',
  'sea',
  'girlwithTits',
  'soup',
  'blackCar',
  'strawberry',
  'juice',
  'airplane',
  'shoes',
  'road',
  'whiteCar',
  'salad',
  'sushiCat',
  'uggBoots',
  'sky',
  'choir',
  'redCar',
  'slippers',
  'palmTrees',
  'dinner',
  'sunset',
  'crab',
  'concert',
  'bigCar',
];

let lastGeneratedPhotoId = 0;
let lastGeneratedUrlId = 0;

function getPhotoId () {
  return ++lastGeneratedPhotoId;
}

function getPhotoUrl () {
  return ++lastGeneratedUrlId;
}

const getRandomArrayElement = (elements) => elements[randomIntFromInterval(0, elements.length - 1)];

const createNewObject = () => (
  {
    id: getPhotoId(),
    url: `photos/${getPhotoUrl()}.jpg`,
    description: getRandomArrayElement(TRAVEL),
    likes: randomIntFromInterval(15,200),
    comments: randomIntFromInterval(0,200),
  }
);

const createSimilarPhotoObjects = Array.from({length: 25}, createNewObject);
