function sumAllTheNumbers(number) {
    let total = 0;
  
    for (let index = 1; index <= number; index += 1) {
      total = total + index;
    }
    return total;
  }
  
  console.log(sumAllTheNumbers(5)); //15