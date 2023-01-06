function biggerOfThree(firstNumber, secondNumber, thirdNumber) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
      return 'O maior número é: ' + firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
      return 'O maior número é: ' + secondNumber;
    } else {
      return 'O maior número é: ' + thirdNumber;
    }
  }
  console.log(biggerOfThree(88, 13, 32));