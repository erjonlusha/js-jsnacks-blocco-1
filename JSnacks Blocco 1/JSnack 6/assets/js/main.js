//Stampa il cubo dei primi N numeri, 
//dove N è un numero indicato dall’utente.
// Math.pow(base, esponente)

var numeroUtente = Number(prompt("Inserisci un numero"));

 for (var i = 0; i < numeroUtente; i++) {
   var potenza = Math.pow(i, 3);
   console.log(potenza);
 }
