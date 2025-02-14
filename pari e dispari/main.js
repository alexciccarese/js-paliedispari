/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// scelta utente 
const userChoise = prompt('Scegli pari o dispari')
console.log(userChoise);


const userNumber = Number(prompt('Scegli un numero da 1 a 5'))
console.log(`${userNumber} è il tuo numero`);


// il pc genera i suoi numeri (funzione)
function pcRandom() {
  const pcNumber = Math.ceil(Math.random() * 5)
  return pcNumber
}
const pcNumber = pcRandom()
console.log(`${pcNumber} è il numero generato dal PC`);


// somma di numero utente più pc
const sum = pcNumber + userNumber
console.log(`La somma dei numeri è ${sum}`);

// Determiniamo se la somma è pari o dispari
function ifEven (num) {
  if (num % 2 === 0) {
    return 'pari'

  } return 'dispari'

}

// aggiungiamo sum alla funzione fatta 
const result = ifEven(sum)

// richiamiamo gli if per verificare le scelte dell'utente 

if (userChoise === result) {
  console.log('Hai vinto');
  
} else {
  console.log('Hai persooooo');
  
}