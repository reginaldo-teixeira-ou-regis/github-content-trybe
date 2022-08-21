let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function compararNumeros(a, b) {return a - b;}

numbers.sort(function(a, b) {return a - b;});

console.log("Result of exercise bonus 1 -> O array numbers foi ordenado em ordem crescente: " + numbers + ".");
//-----------------------------
console.log(" ");
//-----------------------------
let descendingOrder = [];

for(let cont = numbers.length - 1; cont > 0; cont--) {
    descendingOrder.push(numbers[cont]);
}
console.log("Result of exercise bonus 2 -> O array numbers foi ordenado em ordem decrescente: " + descendingOrder + ".");