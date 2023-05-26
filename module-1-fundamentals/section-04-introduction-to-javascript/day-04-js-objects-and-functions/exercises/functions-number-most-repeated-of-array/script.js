function numberMostRepeated(numbers) {
    let num = {};
  
    for (let index = 0; index < numbers.length; index += 1) {
      let value = numbers[index];
      if (num[value] === undefined) {
        num[value] = 1;
      } else {
        num[value] = num[value] + 1;
      }
    }
  
    let countRepeated = 0;
    let countNumbers = 0;
  
    for (let prop in num) {
      if (countRepeated < num[prop]) {
        countRepeated = num[prop];
        countNumbers = prop;
      }
    }
  
    return countNumbers;
  }
  
  console.log(numberMostRepeated([2, 3, 2, 5, 8, 2, 3])); // 2