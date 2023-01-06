function biggerNameArray(names) {
    let biggerName = names[0];
    for (let index in names) {
      if (biggerName.length < names[index].length) {
        biggerName = names[index];
      }
    }
  
    return biggerName;
  }
  
  console.log(biggerNameArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda