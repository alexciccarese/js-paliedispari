/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//creazione funzione
function palindrome(word) {

  // scomponiamo la parola nei suoi caratteri
  let splitWord = word.split('')
  let reverseWord = splitWord.reverse()
  let joinWord = reverseWord.join('')

  if (joinWord === word) {
    return true

  } return false

}

const userWord = prompt('Inserisci una parola per verificare che sia palindroma')

if (palindrome(userWord)) {
  alert('La parola è palindroma')

} else {
  alert('La parola non è palindroma')
}

