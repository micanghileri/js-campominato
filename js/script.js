// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue: (edited)

var nPc = [];
var i = 0;
var num = 100;

// numeri pc
while (nPc.length < 16) {
    var n = nRandom (1, num);
    if ( nPc.includes(n) == false) {
      nPc.push(n);
    }
}

var nRest = num - 16 ;
document.getElementById('arrPc').innerHTML = 'I numeri del computer ' + nPc;

// numeri utente
var nUt = [];
while (nUt.length < nRest && ceckRes(nPc,utente) != true) {
    var utente = parseInt(prompt('inserisci un numero da 1 a 100'));
    // errore numero < 0 o > 100
    if (utente>num || utente<=0) {
        alert('Qualcosa non va! Inserisci un numero da 1 a 100');
    } else if (ceckRes(nPc,utente) == true) {
        document.getElementById('result').innerHTML = 'Hai perso! Hai indovinato ' + nUt.length + '/84 numeri. Aggiorna la pagina e ritenta!';
    } else if (nUt.includes(utente) == false) {
        nUt.push(utente);
        if ( nUt.length == nRest) {
        document.getElementById('result').innerHTML = 'Hai vinto! Grandioso!';
        }
    // n già inserito
    } else if ( nUt.includes(utente)){
        alert("Mhhh... non barare! Hai già inserito questo numero!");
    }
}
document.getElementById('arrUt').innerHTML = 'I tuoi numeri ' + nUt;

// ******funzioni*******
function ceckRes(a, n){
  var ceck = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == n) {
      ceck = true;
    }
  }
  return ceck;
}

function nRandom (min, max) {
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}
