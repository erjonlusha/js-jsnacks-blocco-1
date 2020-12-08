// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchine = [
  {
    varietà: "Zucchino nero di Milano",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchino romanesco",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchino ortolano di Faenza",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchina lunga fiorentina",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchino siciliano",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchina striata di Napoli",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchina bianca triestina",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchina rigata pugliese",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchino tondo di Piacenza",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  },
  {
    varietà: "Zucchino tondo di Nizza",
    peso: getRandom(0, 400),
    lunghezza: getRandom(7, 28)
  }
];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var totaleKg = 0;
for (var i = 0; i < zucchine.length; i++) {
  totaleKg += zucchine[i].peso;
};

console.log("Il peso totale e di: " + totaleKg/1000 + "Kg");
