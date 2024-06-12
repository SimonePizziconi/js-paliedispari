// chiedi all'utente di scegliere pari o dispari
let userChoice = prompt("pari o dispari?");

//  e di scegliere un numero da 1 a 5
let userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(userChoice, userNumber);

// crea funzione per generare un numero casuale da 1 a 5
function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// genera un numero casuale per il pc
let pcNumber = randomNumber(1, 5);
console.log(pcNumber);