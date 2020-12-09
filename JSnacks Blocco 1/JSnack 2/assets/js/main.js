// L’utente inserisce due parole in successione, con due prompt.
//  Il software stampa prima la parola più corta, poi la parola più lunga.


var parolaUno = prompt("Inserisci prima parola");
var parolaDue = prompt("Inserisci seconda parola");

var a = parolaUno.length;
var b = parolaDue.length;

if (a<b) {
    console.log(parolaUno);
    console.log(parolaDue);
} else {
    console.log(parolaDue);
    console.log(parolaUno);
}