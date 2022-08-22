let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//numbers = Math.max(5, 9, 3, 19, 70, 8, 100, 2, 35, 27);
//console.log(numbers);
//-----------------------------
//console.log(" ");
//-----------------------------
let higherNumber = 0;

for(let cont = 0; cont < numbers.length; cont++) { 
    
    let currentNumber = numbers[cont];

    if(currentNumber > higherNumber) { 

        higherNumber = currentNumber;
        
    }
}
console.log(higherNumber);