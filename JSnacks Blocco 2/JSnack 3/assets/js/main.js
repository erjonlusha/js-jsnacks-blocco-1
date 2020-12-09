//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
var numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var somma = 0;
var i=1;
while (i < numeriInteri.length) {
  somma = somma + numeriInteri[i];
  i=i+2;
  console.log(somma);
}
