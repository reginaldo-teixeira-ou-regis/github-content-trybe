function evenNumberTrueOrFalse(number1, number2, number3) {

    let evenNumber = false;

    if(number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
        return evenNumber =  true;
    } else {
        return evenNumber = false;
    }
}
console.log("Result of exercise 8:");
console.log(evenNumberTrueOrFalse(10,2,30));
console.log(evenNumberTrueOrFalse(1,2,30));
console.log(evenNumberTrueOrFalse(1,2,3));
console.log(evenNumberTrueOrFalse(1,23,3));
//-------------------------------------------
console.log(" ");
//-------------------------------------------
function oddNumberTrueOrFalse(number1, number2, number3) {

    let oddNumber = false;

    if(number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
        return oddNumber =  true;
    } else {
        return oddNumber = false;
    }
}
console.log("Result of exercise 9:");
console.log(oddNumberTrueOrFalse(10,2,30));
console.log(oddNumberTrueOrFalse(1,2,30));
console.log(oddNumberTrueOrFalse(1,2,3));
console.log(oddNumberTrueOrFalse(1,23,3));