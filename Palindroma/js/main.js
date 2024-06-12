// chiedi all'utente di inserire una parola
let userWord = prompt("Inserisci una parola");
console.log(userWord);

// crea una funzione per verificare che la parola si palindroma
function palindromeWord(word) {
    // Confronta la parola pulita con la sua versione invertita
    const reverseWord = word.split('').reverse().join('');
    
    return word === reverseWord;
}

// usiamo la funzione
if (palindromeWord(userWord)) {
    // Stampa un messaggio appropiato
    console.log(`La parola '${userWord}' è un palindromo.`);
} else {
    // Stampa un messaggio appropiato
    console.log(`La parola '${userWord}' non è un palindromo.`);
}










