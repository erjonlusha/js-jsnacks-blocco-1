// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var squadre = [
{
    nome : "Juve",
    puntiFatti : 0,
    falliSubiti : 0
},
{
    nome : "Milan",
    puntiFatti : "10",
    falliSubiti : 0
},
{
    nome : "Inter",
    puntiFatti : "10",
    falliSubiti : 0
},{
    nome : "Roma",
    puntiFatti : "10",
    falliSubiti : 0
}
]


// Generare numeri random al posto degli 0 nelle proprietà:punti fatti e falli subiti

for (var key in squadre) {
   squadre[key].puntiFatti = Number(Math.floor(Math.random()*10));
   squadre[key].falliSubiti = Number(Math.floor(Math.random()*10));
}

// var rand = Number(Math.floor(Math.random()*10));
// console.log(rand);