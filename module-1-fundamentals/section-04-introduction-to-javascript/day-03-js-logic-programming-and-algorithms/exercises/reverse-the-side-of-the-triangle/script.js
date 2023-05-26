let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size - 1;

for (let lineIndex = 0; lineIndex < size; lineIndex++) {
  for (let columnIndex = 0; columnIndex < size; columnIndex++) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition--;
};