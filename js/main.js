function randomIntFromInterval(min, max) {
    if (min < 0 || max < 0) {
      return NaN;
    }
  min = Math.floor(min);
  max = Math.ceil(max);
   if (min === max) {
    return min;
   }
   return min > max ?
    Math.floor(Math.random() * (min - max + 1) + max)
    :
      Math.floor(Math.random() * (max - min + 1) + min);
}
const rndInt = randomIntFromInterval(3,7);
console.log(rndInt);

function stringLength(inputtxt, maxlength) 
{
      if(inputtxt.length > maxlength)
      { 
      return false;
      }
      else
      { 
      return true;
      }
}
const inputtxt = 'dfdsfsdfsfsd';
const maxlength = 20;
const stringL = stringLength(inputtxt, maxlength);
console.log(stringL);