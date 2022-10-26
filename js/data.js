import {getRandomArrayElement} from './util.js';
import {randomIntFromInterval} from './util.js';
import {getPhotoId} from './util.js';
import {getPhotoUrl} from './util.js';


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
    likes: randomIntFromInterval(15,200),
    comments: randomIntFromInterval(0,200),
  }
);

const createSimilarPhotoObjects = () => Array.from({length: 25}, createNewObject);

export {createSimilarPhotoObjects};
