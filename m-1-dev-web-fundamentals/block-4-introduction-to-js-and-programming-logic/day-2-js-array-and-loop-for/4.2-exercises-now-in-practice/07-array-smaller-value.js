let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [5, 9, -3, -19, 70, -8, 100, 2, -35, 27];

/*numbers = Math.min(5, 9, 3, 19, 70, 8, 100, 2, 35, 27);
console.log(numbers);*/
//-----------------------------
let smallestNumber = 5000000000000000000000;

for(let cont = 0; cont < numbers.length; cont++) { 
    
    let currentNumber = numbers[cont];

    if(currentNumber < smallestNumber) { 

        smallestNumber = currentNumber;
        
    }
}
console.log(smallestNumber);