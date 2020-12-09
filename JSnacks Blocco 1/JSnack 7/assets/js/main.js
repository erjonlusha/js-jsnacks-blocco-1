//Stampa le potenze di 2 fino a 1000.
// Math.pow(base, esponente)

// for (var i = 0; potenza < 1000; i++) {
//   var potenza = Math.pow(i, 2);
//   console.log(potenza);
// };

 var j = 1;
do {
  // Codice
  var potenza = Math.pow(j, 2);
  console.log(potenza);
  // instruzione per cambiare 
  j++;
} while (potenza < 1000);

