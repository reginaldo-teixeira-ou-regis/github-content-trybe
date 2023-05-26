let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [50, 90, 30, 190, 70, 8, 100, 2, 350, 270];
// let numbers = [5, 9, -3, -19, 70, -8, 100, 2, -35, 27];

let sum = 0;
let average = 0;

console.log("Result of exercise 1:");

for(let cont = 0; cont < numbers.length; cont++) {
    console.log(numbers[cont]);
    sum = sum + numbers[cont];
}
console.log(" ");
//-----------------------------
console.log("Result of exercise 2 -> " + sum);
console.log(" ");
//-----------------------------
average = sum / numbers.length;
console.log("Result of exercise 3 -> " + average);
console.log(" ");
//-----------------------------
if(average > 20) {
    console.log("Result of exercise 4 -> valor maior que 20");
} else {
    console.log("Result of exercise 4 -> valor menor ou igual a 20");
}
console.log(" ");
//-----------------------------
let higherNumber = 0;

for(let cont = 0; cont < numbers.length; cont++) { 
    
    let currentNumber = numbers[cont];

    if(currentNumber > higherNumber) { 

        higherNumber = currentNumber;
        
    }
}
console.log("Result of exercise 5 -> o maior valor contido no array é " + higherNumber);
console.log(" ");
//-----------------------------
let oddValues = [];

for(let cont = 0; cont < numbers.length; cont++) { 
    
    if(numbers[cont] % 2 === 1) { 
        oddValues.push(numbers[cont]);
    }
}
if(oddValues.length <= 0) {
    oddValues = "nenhum valor ímpar encontrado";
}
console.log("Result of exercise 6:");
console.log(oddValues);
console.log(" ");
//-----------------------------
/*numbers = Math.min(5, 9, 3, 19, 70, 8, 100, 2, 35, 27);
console.log(numbers);*/
//-----------------------------
let smallestNumber = numbers[0];

for(let cont = 1; cont < numbers.length; cont++) { 
    if(numbers[cont] < smallestNumber) { 
        smallestNumber = numbers[cont];
    }
}
console.log("Result of exercise 7 -> o menor valor contido no array é " + smallestNumber);
console.log(" ");
//-----------------------------
let result = [];

for(let cont = 1; cont <= 25; cont++) {
    result.push(cont);
}
console.log("Result of exercise 8:");
console.log(result);

console.log(" ");

let result2 = [];

for(let cont = 1; cont <= 25; cont++) {
    result2.push(cont / 2);
}
console.log("Result of exercise 9:");
console.log(result2);