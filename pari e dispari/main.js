/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// scelta utente 
const userChoise = prompt('Scegli pari o dispari')

const userNumber = Number(prompt('Scegli un numero da 1 a 5'))


// il pc genera i suoi numeri (funzione)
function pcRandom() {
  const pcNumber = Math.ceil(Math.random() * 5)
  return pcNumber
}
const pcNumber = pcRandom()
console.log(pcNumber);


// somma di numero utente più pc



