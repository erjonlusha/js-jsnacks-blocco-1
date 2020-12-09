// Scrivi una funzione per stabilire se un numero e primo.
//Chiedi un numero all'utente e utilizza la funzione per comunicargli se il numero inserito e primo oppure no.

var num = Number(prompt('Inserisci un numero: '));
while (num < 0){
 num = Number(prompt('Inserisci un numero: '));
 }
 
 var div=1;
 var contaDiv=0;

function numeriPrimi(contaDiv, div, num)   {
    while(contaDiv<=1 && div<=num/2) {
	    if(num%div==0)  {
		    contaDiv++;	
	    }
	    div++;
        }
	
    if (contaDiv==1){
	    alert('Il numero è primo ');
        }   
    else {
	    alert('Il numero non è primo ');
    }

    return(contaDiv, div, num);
};

numeriPrimi(contaDiv, div, num);