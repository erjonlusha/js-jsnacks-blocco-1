//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati = [ "Fabio", "Erjon", "Raffaele", "Gabriele", "Alessandro"];
var utente = prompt("Inserisci il tuo nome");
var risultato = false;
for (var i = 0; i<invitati.length; i++) {
  if (utente === invitati[i]) {
     risultato = true;
     break;
  }    
}

if (risultato) {
   console.log("Puoi entrare");
} else {
   console.log("Non puoi entrare");
}