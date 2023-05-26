function biggerValueArray(numbers) {
    let biggerValue = 0;
    for (let index in numbers) {
      if (numbers[biggerValue] < numbers[index]) {
        biggerValue = index;
      }
    }
    return biggerValue;
  }
  console.log('O maior numero do array esta na posição ' + biggerValueArray([2, 3, 6, 7, 10, 1]));
  console.log('O maior numero do array esta na posição ' + biggerValueArray([2, 30, 6, 7, 10, 100]));
  console.log('O maior numero do array esta na posição ' + biggerValueArray([2, 30, 6, 70, 10, 1]));