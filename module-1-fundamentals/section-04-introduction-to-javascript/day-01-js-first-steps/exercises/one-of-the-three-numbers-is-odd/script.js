function oddNumberTrueOrFalse(number1, number2, number3) {

    let oddNumber = false;

    if(number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
        return oddNumber =  true;
    } else {
        return oddNumber = false;
    }
}
console.log(oddNumberTrueOrFalse(1,2,30));
console.log(oddNumberTrueOrFalse(1,2,3));
console.log(oddNumberTrueOrFalse(1,23,3));
console.log(oddNumberTrueOrFalse(10,2,30));