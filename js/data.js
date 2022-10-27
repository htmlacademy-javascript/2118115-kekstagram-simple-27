import {getRandomArrayElement, randomIntFromInterval, getPhotoId, getPhotoUrl, stringLength} from './util.js';

const MIN_NUMBER = 15;
const MAX_NUMBER = 200;
const INPUT_TXT = 'Ура-ура!';
const MAX_LENGHT = 20;

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

const createNewObject = () => (
  {
    id: getPhotoId(),
    url: `photos/${getPhotoUrl()}.jpg`,
    description: getRandomArrayElement(TRAVEL),
    likes: randomIntFromInterval(MIN_NUMBER,MAX_NUMBER),
    comments: randomIntFromInterval(0,MAX_NUMBER),
  }
);

const createSimilarPhotoObjects = () => Array.from({length: 25}, createNewObject);

export {createSimilarPhotoObjects};
