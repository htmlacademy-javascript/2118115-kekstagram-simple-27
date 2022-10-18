const MIN_NUMBER = 1;
const MAX_NUMBER =25;
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
console.log(randomIntFromInterval(MIN_NUMBER, MAX_NUMBER));

function stringLength(input, line) {
  return !(input.length > line)
}

stringLength(INPUT_TXT, MAX_LENGHT);
console.log(stringLength(INPUT_TXT, MAX_LENGHT));

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

const createNewObject = () => {
  const RANDOM_ID_INDEX = randomIntFromInterval(1,25);
  const RANDOM_URL_INDEX = randomIntFromInterval(1,25);
  const RANDOM_DESCRIPTION_INDEX = randomIntFromInterval(0, TRAVEL.length - 1);
  const RANDOM_LIKES_INDEX = randomIntFromInterval(15,200);
  const RANDOM_COMMENTS_INDEX = randomIntFromInterval(0,200);
  return {
    id: RANDOM_ID_INDEX,
    url: 'photos/' + RANDOM_URL_INDEX + '.jpg',
    description: TRAVEL[RANDOM_DESCRIPTION_INDEX],
    likes: RANDOM_LIKES_INDEX,
    comments: RANDOM_COMMENTS_INDEX,
  }
}

const SIMILAR_OBJECT = Array.from({length: 25}, createNewObject);

console.log(SIMILAR_OBJECT);
