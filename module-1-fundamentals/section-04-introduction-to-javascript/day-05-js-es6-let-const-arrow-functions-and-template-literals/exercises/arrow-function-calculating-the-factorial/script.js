const calculateFactorial = (number) => {
    if (isNaN(number)) {
        return 'Não existe fatorial de um texto';
    }
     
    if (!Number.isInteger(number) || number < 0) {
        return 'Não existe fatorial de um número não natural';
    }
     
    if (number === 0 || number === 1) {
        return `O fatorial de ${number} é 1`;
    }
     
    let result = number;
    let firstMultiplier = number - 1;
    for (let i = firstMultiplier; i > 1; i--) {
        result *= i;
    }
    return `O fatorial de ${number} é ${result}`;
}
 
console.log(calculateFactorial(5));
console.log(calculateFactorial(4));
console.log(calculateFactorial(3));
console.log(calculateFactorial(2));
console.log(calculateFactorial(1));
console.log(calculateFactorial(0));
console.log(calculateFactorial(-10));
console.log(calculateFactorial(1000));
console.log(calculateFactorial(100));
console.log(calculateFactorial(10));
console.log(calculateFactorial('v'));