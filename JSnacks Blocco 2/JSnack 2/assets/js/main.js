// Generatore di 'Nomi cognomi' casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati

var numeroInvitati= Number(prompt("Gatsby quanti invitati vuoi alla tua festa?"))

var nomi = ['Matteo', 'Marco', 'Luca', 'Giulio', 'Marta', 'Federica', 'Maria', 'Vanessa', 'Francesca'];
var cognomi = ['De Luca', 'Rossi', 'Ferri', 'Del Acqua', 'Pippo', 'Pluto', 'Topolino', 'Savastano', 'SangueBlu'];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

var massimo = nomi.length;

for(var i = 0; i<numeroInvitati; i++) {
    var indice = getRandom(0, massimo);
    console.log(nomi[indice], cognomi[indice]); 
}