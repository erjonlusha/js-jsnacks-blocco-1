//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.



var numeriDispari = [];
for (var i = 0; i < 6; i++) {
   var numero = Number(prompt("Inserici un numero intero"));
   /*Verifico se num1 è pari o dispari*/
   if (numero %2!==0)
   {
      numeriDispari.push(numero);
      alert("Il numero è disPari");
   }
}

console.log(numeriDispari);