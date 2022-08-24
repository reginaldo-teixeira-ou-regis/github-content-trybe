function indexSmallerValue(numbers) {
    let indexSmaller = 0;
    for (let index in numbers) {
      if (numbers[indexSmaller] > numbers[index]) {
        indexSmaller = index;
      }
    }
    return indexSmaller;
  }
  console.log(indexSmallerValue([2, 30, 6, 7, 10, 100]));
  console.log(indexSmallerValue([20, 30, 6, 7, 10, 100]));
  console.log(indexSmallerValue([2, 30, 6, 70, 10, 1]));