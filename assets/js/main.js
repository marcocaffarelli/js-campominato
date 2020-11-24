// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:

// Il computer deve generare 16 numeri casuali tra 1 e 100.
listaSedici = [];
var num;
//ciclo for per generre 16 numeri casuali
for(i= 0; i <= 15; i++){
    while ( listaSedici.includes( num = Math.floor(Math.random()*100) + 1 ) );
    listaSedici[i] = num;
};
//console.log(listaSedici);

// funzione che verifica la presenza di un elemento all'interno di un array
function arrayIndexOf(array, search) {
	var indice; 
	for (indice = 0; indice < array.length; indice++) {
		if (array[indice] == search)
			return indice;
	}	
	return -1;
};

//lista numeri inseriti dall'utente
listaNumeriUtente = [];

//var possibilita = 100 - 16;
var possibilita = 83;

//ciclo for che genera il gioco
for (var i= 0; i<= possibilita; i++) {
    var numeroUtente = prompt("Inserisci un numero da 1 e 100");
    numeroUtente = erroriUtente(numeroUtente, listaNumeriUtente);
    if (arrayIndexOf(listaSedici, numeroUtente) !== -1) {
    alert("Hai perso");
    break;
    };
    listaNumeriUtente.push(numeroUtente);
};

// Aggiunti messaggi a seconda dell'esito del gioco
if (listaNumeriUtente.length === 84) {
    alert("Complimenti sei riuscito a completare il Gioco");
} else {
    alert(listaNumeriUtente.length + " questo è il numero delle volte che hai evitato una bomba");
};

//creata funzione contenente le casistiche in cui l'utente scrive qualcosa diverso di un numero compreso tra 1 e 100
function erroriUtente(numero, lista) {
    while ((numero != Number(numero)) || (numero < 1 || numero > 100) || (arrayIndexOf(lista, numero) !== -1)) {
        if (numero != Number(numero)) {
            alert(" Devi inserire un numero");
            numero = prompt("Inserisci un numero da 1 e 100")
        } else if(numero < 1 || numero > 100){
            alert(" Il numero non è compreso tra 1 e 100");
            numero = prompt("Inserisci un numero da 1 e 100");
        } else if(arrayIndexOf(lista, numero) !== -1){
            alert(" Il numero è già stato inserito, inserisci un numero diverso");
            numero = prompt("Inserisci un numero da 1 e 100");
        }
    }
    return numero
};