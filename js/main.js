function randomIntFromInterval(min, max) {
    if (min < 0 || max < 0) {
      return NaN;
    }
  min = Math.floor(min);
  max = Math.ceil(max);
   if (min === max) {
    return min;
   }
} 

function randomIntFromInterval2(min, max) {
return min > max ?  Math.floor(Math.random() * (min - max + 1) + max)
                 :  Math.floor(Math.random() * (max - min + 1) + min);
}

randomIntFromInterval2(3,7);
console.log(randomIntFromInterval2(3,7))

function stringLength(inputtxt, maxlength) 
{
      if(inputtxt.length > maxlength)
      { 
      return false;
      }
      else
      return !(inputtxt.length > maxlength)
}

let inputtxt = 'Ура-ура!';
let maxlength = 20;

stringLength(inputtxt, maxlength);
console.log(stringLength(inputtxt, maxlength));