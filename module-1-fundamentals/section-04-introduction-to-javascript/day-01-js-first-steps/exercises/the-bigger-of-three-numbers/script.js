const number1 = 44;
const number2 = 22;
const number3 = 120;

let largerNumber;

if(number1 > number2 && number1 > number3) {
    largerNumber = "O numero " + number1 + " é o maior entre os três numeros apresentados.";
} else if(number2 > number1 && number2 > number3) {
    largerNumber = "O numero " + number2 + " é o maior entre os três numeros apresentados.";
} else {
    largerNumber = "O numero " + number3 + " é o maior entre os três numeros apresentados.";
}
console.log(largerNumber);