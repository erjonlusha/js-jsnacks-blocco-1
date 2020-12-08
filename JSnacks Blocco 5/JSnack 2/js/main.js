// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata 
// (es. Ciao -> oaiC)


var parola = prompt("inserisci una parola");


function girata(parola) {
    return parola.split("").reverse().join("")
}

parolaGirata = girata(parola);

console.log(parolaGirata);