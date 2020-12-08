// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

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

/*************************    FUNZIONI    **************************/
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function calcKg(zucchine) {
  var totaleKg = 0;
  for (var i = 0; i < zucchine.length; i++) {
    totaleKg += zucchine[i].peso;
  };
  return totaleKg;
};
/***********************    END FUNZIONI    ************************/



var meno15Cm = [];
var piu15Cm = [];

for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza < 15) {
    meno15Cm.push(zucchine[i]);
  } else {
    piu15Cm.push(zucchine[i]);
  };
};

var kgMeno15Cm = calcKg(meno15Cm);
console.log("Zucchine inferiori ai 15 cm", meno15Cm);
console.log("Totale kg:", kgMeno15Cm);


var kgPiu15Cm = calcKg(piu15Cm);
console.log("Zucchine maggiori di 15 cm", piu15Cm);
console.log("Totale kg:", kgPiu15Cm);