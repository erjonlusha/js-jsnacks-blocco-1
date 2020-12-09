//inserisci un numero, se e pari stampa il numero, se e dispari stampa il numero successivo
var num1 = Number(prompt('Inserisci numero')), pari;

if (num1 %2===0){
  console.log(num1);
} else {
  console.log(num1 + 1);
}

