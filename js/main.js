// Dichiaro le costanti

const firstName = prompt ("Inserisci il tuo Nome")
const lastName = prompt ("Inserisci il tuo Cognome")
const yearOfBirth = prompt ("In che anno sei nato?")

// Dichiaro la variabile

let age = (2023 - yearOfBirth)

// Log per verificare la funzionalità delle mie costanti e variabili

console.log (firstName)
console.log (lastName)
console.log (yearOfBirth)
console.log (age)

// Stampo sull'HTML il risultato dell'operazione

document.getElementById("password").innerHTML = (firstName + lastName + age)

// Log per verificare il risultato dell'operazione

console.log (password)