// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )

/*****************************  PERIMETRO   **********************************/
// Math.sqrt(x)  RADICE QUADRATA
// Math.pow(base, esponente) POTENZA

// b+c+radice(potenza(b, 2) + potenza(c, 2)) PSEUDO CODICE PERIMETRO

var triangoloRettangolo = {
    base : 10,
    altezza : 10
}

var b = triangoloRettangolo.base; 
var c = triangoloRettangolo.altezza;

var perimetro = b + c + Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2) );
console.log(perimetro);

/*****************************  AREA   **********************************/
// (b*c)/2 FORMULA AREA

var area = (b+c)/2;