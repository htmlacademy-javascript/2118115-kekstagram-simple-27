const MIN_NUMBER = 2;
const MAX_NUMBER = 7;
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
