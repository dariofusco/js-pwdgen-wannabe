// Dichiaro le costanti

const firstName = prompt ("Inserisci il tuo Nome")
const lastName = prompt ("Inserisci il tuo Cognome")
const favoriteColor = prompt ("Qual'è il tuo colore preferito?")
const yearOfBirth = prompt ("In che anno sei nato?")

// Dichiaro la variabile

let age = (2023 - yearOfBirth)
let number = (age + 21)

// Log per verificare la funzionalità delle mie costanti e variabili

console.log (firstName)
console.log (lastName)
console.log (yearOfBirth)
console.log (favoriteColor)
console.log (age)
console.log (number)

// Stampo sull'HTML il risultato dell'operazione

document.getElementById("password").innerHTML = (firstName + lastName + favoriteColor + number)

// Log per verificare il risultato dell'operazione

console.log (password)