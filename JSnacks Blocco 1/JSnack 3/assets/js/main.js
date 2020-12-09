// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. 
// Esegui questo programma in due versioni, con il for e con il while.

// var risultato = 0;
//  for (var i = 0; i < 5; i++) {
//     var numero = Number(prompt('Inserisci numero'));
//     risultato = numero + risultato; //riultato += numero
//  }


//while loop
var risultato = 0;
var counter = 0;
while (counter < 5) {
    var numero = Number(prompt('Inserisci numero'));
    risultato = numero + risultato; //riultato += numero
    counter++;
}

 console.log(risultato);
