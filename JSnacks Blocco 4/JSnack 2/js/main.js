// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.


var oggetti = [
  {
    nome : "Mx100",
    peso : 10
  },
  {
    nome : "Mx200",
    peso : 12
  }
];
//console.log(oggetti[key]);

var pesoMin = oggetti[0].peso;
var x;
for (var i = 0; i < oggetti.length; i++) {
  if (oggetti[i].peso < pesoMin) {
    pesoMin = oggetti[i].peso;
    x = i
  };
}
console.log("La bici più leggera e: ", oggetti[x]);