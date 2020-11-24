// scelta livello difficolta 
sceltaUtente = prompt("Scrivi un livello di difficolta tra quelli consigliati", "FACILE-MEDIO-DIFFICILE");
sceltaUtente = sceltaUtente.toUpperCase();
difficolta = sceltaUtente;

switch (difficolta) {
    case "DIFFICILE":
        // Il computer deve generare 16 numeri casuali tra 1 e 50.
    listaSedici = [];
    var num;
    //ciclo for per generre 16 numeri casuali
    for(i= 0; i <= 15; i++){
        while ( listaSedici.includes( num = Math.floor(Math.random()*50) + 1 ) );
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
    
    //var possibilita = 50 - 16;
    var possibilita = 33;
    
    //ciclo for che genera il gioco
    for (var i= 0; i<= possibilita; i++) {
        var numeroUtente = prompt("Inserisci un numero da 1 e 50");
        numeroUtente = erroriUtenteDifficile(numeroUtente, listaNumeriUtente);
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
    
    //creata funzione contenente le casistiche in cui l'utente scrive qualcosa diverso di un numero compreso tra 1 e 100
    function erroriUtenteDifficile(numero, lista) {
        while ((numero != Number(numero)) || (numero < 1 || numero > 50) || (arrayIndexOf(lista, numero) !== -1)) {
            if (numero != Number(numero)) {
                alert(" Devi inserire un numero");
                numero = prompt("Inserisci un numero da 1 e 50")
            } else if(numero < 1 || numero > 50){
                alert(" Il numero non è compreso tra 1 e 50");
                numero = prompt("Inserisci un numero da 1 e 50");
            } else if(arrayIndexOf(lista, numero) !== -1){
                alert(" Il numero è già stato inserito, inserisci un numero diverso");
                numero = prompt("Inserisci un numero da 1 e 50");
            }
        }
        return numero
    };
        break;
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    case "MEDIO":
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

    //var possibilita = 80 - 16;
    var possibilita = 83;

    //ciclo for che genera il gioco
    for (var i= 0; i<= possibilita; i++) {
        var numeroUtente = prompt("Inserisci un numero da 1 e 80");
        numeroUtente = erroriUtenteMedio(numeroUtente, listaNumeriUtente);
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
    function erroriUtenteMedio(numero, lista) {
        while ((numero != Number(numero)) || (numero < 1 || numero > 80) || (arrayIndexOf(lista, numero) !== -1)) {
            if (numero != Number(numero)) {
                alert(" Devi inserire un numero");
                numero = prompt("Inserisci un numero da 1 e 80")
            } else if(numero < 1 || numero > 80){
                alert(" Il numero non è compreso tra 1 e 80");
                numero = prompt("Inserisci un numero da 1 e 80");
            } else if(arrayIndexOf(lista, numero) !== -1){
                alert(" Il numero è già stato inserito, inserisci un numero diverso");
                numero = prompt("Inserisci un numero da 1 e 80");
            }
        }
        return numero
    };
    break;
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    case "FACILE":
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
        numeroUtente = erroriUtenteFacile(numeroUtente, listaNumeriUtente);
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
    function erroriUtenteFacile(numero, lista) {
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
    break;
    default:
        alert("Hai terminato il gioco senza giocare, ricarica la pagina e scrivi uno dei livelli di difficolta tra quelli consigliati")
    break;
}
