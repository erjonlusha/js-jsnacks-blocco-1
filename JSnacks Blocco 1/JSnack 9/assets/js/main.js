//Calcola la somma e la media dei primi 10 numeri

var sum=0;
var numero = 10; //Number(prompt("Inserisci un numero per fare la somma e la media"));
for (var i = 0; i <= numero; i++) {
  sum= sum + i;
  console.log(sum);
}

var media = sum / numero;
console.log(media);