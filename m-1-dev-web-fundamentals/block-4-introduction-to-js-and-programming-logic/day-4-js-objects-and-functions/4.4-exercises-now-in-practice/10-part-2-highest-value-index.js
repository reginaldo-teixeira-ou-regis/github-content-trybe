function indexLargeValue(numbers) {
  let indexLarge = 0;
  for (let index in numbers) {
    if (numbers[indexLarge] < numbers[index]) {
      indexLarge = index;
    }
  }
  return indexLarge;
}
console.log(indexLargeValue([2, 30, 6, 7, 10, 1]));
console.log(indexLargeValue([2, 30, 6, 7, 10, 100]));
console.log(indexLargeValue([2, 30, 6, 70, 10, 1]));