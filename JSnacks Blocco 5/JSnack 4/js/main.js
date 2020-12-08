// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function unioneArray(primo, secondo) {
  var fusion = [];
  for (var i = 0; i < primo.length; i++) {
    fusion.push(primo[i]);
    fusion.push(secondo[i]);
  }
  return fusion;
;}

var lettere = ["a", "b", "c"];
var numeri = [1, 2, 3];
var arrayUnito = unioneArray(lettere, numeri);

console.log("Il primo array " + numeri);
console.log("Il secondo array " + lettere);
console.log("La fusione dei due array " + arrayUnito);