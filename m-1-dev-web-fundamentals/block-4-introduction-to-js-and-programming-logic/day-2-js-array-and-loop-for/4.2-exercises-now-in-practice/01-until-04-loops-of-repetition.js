let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let average = 0;

console.log("Result of exercise 1:");

for(let cont = 0; cont < numbers.length; cont++) {
    console.log(numbers[cont]);
    sum = sum + numbers[cont];
}
//-----------------------------
console.log(" ");
//-----------------------------
console.log("Result of exercise 2 -> " + sum);
//-----------------------------
    console.log(" ");
//-----------------------------
average = sum / numbers.length;
console.log("Result of exercise 3 -> " + average);
//-----------------------------
console.log(" ");
//-----------------------------
if(average > 20) {
    console.log("Result of exercise 4 -> valor maior que 20");
} else {
    console.log("Result of exercise 4 -> valor menor ou igual a 20");
}