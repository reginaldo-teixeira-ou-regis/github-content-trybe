function checkTheEndOfTheWord(word, endWord) {
    let reverseWord = word.split('').reverse().join('');
    let reverseEndWord = endWord.split('').reverse().join('');
    let result;
  
    for (let index = 0; index < reverseEndWord.length; index += 1) {
      if (reverseWord[index] !== reverseEndWord[index]) {
        result = false;
        break; // O "break" serve para encerrar o loop.
      } else {
        result = true;
      }
    }
    
    return result;
  }
  
  console.log(checkTheEndOfTheWord('trybe', 'be')); // true
  console.log(checkTheEndOfTheWord('joao fernando', 'fernan')); // false
  console.log(checkTheEndOfTheWord('Lucas', 'carro')); // false
  console.log(checkTheEndOfTheWord('Reginaldo', 'inaldo')); // true