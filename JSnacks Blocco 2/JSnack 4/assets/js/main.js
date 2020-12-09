// crea 2 array che hanno un numero di elementi diversi. Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avra tanti quanto l'altro.

var ar1 = [1, 2, 3, 4, 5, 6];
var ar2 = [1, 2, 3];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}


for (var i=0; ar2.length < ar1.length; i++) {
  ar2.push(getRandom(1, 10));
}

console.log("Array uno " + ar1);
console.log("Array due " + ar2);