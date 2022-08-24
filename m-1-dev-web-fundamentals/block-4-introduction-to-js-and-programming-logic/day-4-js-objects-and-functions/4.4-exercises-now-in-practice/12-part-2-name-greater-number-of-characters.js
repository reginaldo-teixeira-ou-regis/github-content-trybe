function returnLargeWord(word) {
    let largeWord = word[0];
    for (let index in word) {
      if (largeWord.length < word[index].length) {
        largeWord = word[index];
      }
    }
  
    return largeWord;
  }
  
  console.log(returnLargeWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda