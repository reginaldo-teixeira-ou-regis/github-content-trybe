function smallerValueArray(numbers) {
    let smallerValue = 0;
    for (let index in numbers) {
      if (numbers[smallerValue] > numbers[index]) {
        smallerValue = index;
      }
    }
    return smallerValue;
  }
  console.log('O menor numero do array esta na posição ' + smallerValueArray([2, 30, 6, 7, 10, 100]));
  console.log('O menor numero do array esta na posição ' + smallerValueArray([20, 30, 6, 7, 10, 100]));
  console.log('O menor numero do array esta na posição ' + smallerValueArray([2, 30, 6, 70, 10, 1]));