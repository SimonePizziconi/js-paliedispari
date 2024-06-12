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

// somma i due numeri 
let addNumber = userNumber + pcNumber;
console.log(addNumber);

// crea una funzione per stabilire se il numero è pari o dispari
function evenOdd (number){
    return (number % 2 === 0) ? `il ${number} è pari` : `il ${number} è dispari`;
}

// stabilisci se il numero è pari o dispari
const result = evenOdd(addNumber);
console.log(result);