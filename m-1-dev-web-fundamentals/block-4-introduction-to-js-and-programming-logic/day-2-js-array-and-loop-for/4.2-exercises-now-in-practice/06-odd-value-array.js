let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [50, 90, 30, 190, 70, 8, 100, 2, 350, 270];

let oddValues = [];

for(let cont = 0; cont < numbers.length; cont++) { 
    
    if(numbers[cont] % 2 === 1) { 
        oddValues.push(numbers[cont]);
    }
}
if(oddValues.length <= 0) {
    oddValues = "nenhum valor ímpar encontrado";
}
console.log(oddValues);