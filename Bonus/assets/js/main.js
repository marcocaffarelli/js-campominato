///////////////////////////////////////////// Lista variabilii /////////////////////////////////////////////
var sceltaUtente, difficolta, listaSedici, num, listaNumeriUtente, possibilita, i, numeroUtente
////////////////////////////////////////////// lista funzioni //////////////////////////////////////////////
// funzione che verifica la presenza di un elemento all'interno di un array
function arrayIndexOf(array, search) {
    var indice; 
    for (indice = 0; indice < array.length; indice++) {
        if (array[indice] == search)
            return indice;
    }	
    return -1;
};

//creata funzione contenente le casistiche in cui l'utente scrive qualcosa di strano
function erroriUtente(numero, lista, opzioni) {
while ((numero != Number(numero)) || (numero < 1 || numero > opzioni) || (arrayIndexOf(lista, numero) !== -1)) {
    if (numero != Number(numero)) {
        alert(" Devi inserire un numero");
        numero = prompt("Inserisci un numero diverso")
    } else if(numero < 1 || numero > opzioni){
        alert(" Il numero non è compreso nella lista");
        numero = prompt("Inserisci un numero diverso");
    } else if(arrayIndexOf(lista, numero) !== -1){
        alert(" Il numero è già stato inserito, inserisci un numero diverso");
        numero = prompt("Inserisci un numero diverso");
    }
}
    return numero
};

// scelta livello difficolta 
sceltaUtente = prompt("Scrivi un livello di difficolta tra quelli consigliati", "FACILE-MEDIO-DIFFICILE");
sceltaUtente = sceltaUtente.toUpperCase();
difficolta = sceltaUtente;

switch (difficolta) {
    case "DIFFICILE":
    // Il computer deve generare 16 numeri casuali tra 1 e 50.
    listaSedici = [];
    //ciclo for per generre 16 numeri casuali
    for(i= 0; i <= 15; i++){
        while ( listaSedici.includes( num = Math.floor(Math.random()*50) + 1 ) );
        listaSedici[i] = num;
    };
    //console.log(listaSedici);

    //lista numeri inseriti dall'utente
    listaNumeriUtente = [];
    
    //var possibilita 
    possibilita = 33;
    
    //ciclo for che genera il gioco
    for (i= 0; i<= possibilita; i++) {
        numeroUtente = prompt("Inserisci un numero da 1 e 50");
        numeroUtente = erroriUtente(numeroUtente, listaNumeriUtente, 50);
        if (arrayIndexOf(listaSedici, numeroUtente) !== -1) {
        alert("Hai perso");
        break;
        };
        listaNumeriUtente.push(numeroUtente);
    };
    
    // Aggiunti messaggi a seconda dell'esito del gioco
    if (listaNumeriUtente.length === 34) {
        alert("Complimenti sei riuscito a completare il Gioco");
    } else {
        alert(listaNumeriUtente.length + " questo è il numero delle volte che hai evitato una bomba");
    };

    break;
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    case "MEDIO":
   // Il computer deve generare 16 numeri casuali tra 1 e 100.
    listaSedici = [];
    //ciclo for per generare 16 numeri casuali
    for(i= 0; i <= 15; i++){
        while ( listaSedici.includes( num = Math.floor(Math.random()*80) + 1 ) );
        listaSedici[i] = num;
    };
    //console.log(listaSedici);

    //lista numeri inseriti dall'utente
    listaNumeriUtente = [];

    //var possibilita
    possibilita = 63;

    //ciclo for che genera il gioco
    for (i= 0; i<= possibilita; i++) {
        numeroUtente = prompt("Inserisci un numero da 1 e 80");
        numeroUtente = erroriUtente(numeroUtente, listaNumeriUtente, 80);
        if (arrayIndexOf(listaSedici, numeroUtente) !== -1) {
        alert("Hai perso");
        break;
        };
        listaNumeriUtente.push(numeroUtente);
    };

    // Aggiunti messaggi a seconda dell'esito del gioco
    if (listaNumeriUtente.length === 64) {
        alert("Complimenti sei riuscito a completare il Gioco");
    } else {
        alert(listaNumeriUtente.length + " questo è il numero delle volte che hai evitato una bomba");
    };

    break;
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    case "FACILE":
    // Il computer deve generare 16 numeri casuali tra 1 e 100.
    listaSedici = [];
    //ciclo for per generre 16 numeri casuali
    for(i= 0; i <= 15; i++){
        while ( listaSedici.includes( num = Math.floor(Math.random()*100) + 1 ) );
        listaSedici[i] = num;
    };
    //console.log(listaSedici);

    //lista numeri inseriti dall'utente
    listaNumeriUtente = [];

    //var possibilita
    possibilita = 83;

    //ciclo for che genera il gioco
    for (i= 0; i<= possibilita; i++) {
        numeroUtente = prompt("Inserisci un numero da 1 e 100");
        numeroUtente = erroriUtente(numeroUtente, listaNumeriUtente, 100);
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
    break;
    default:
        alert("Hai terminato il gioco senza giocare, ricarica la pagina e scrivi uno dei livelli di difficolta tra quelli consigliati")
    break;
}
