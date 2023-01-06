function biggerNum(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
      return firstNumber + ' é maior que ' + secondNumber;
    } else {
      return secondNumber + ' é maior que ' + firstNumber;
    }
  }
  console.log(biggerNum(14, 23));