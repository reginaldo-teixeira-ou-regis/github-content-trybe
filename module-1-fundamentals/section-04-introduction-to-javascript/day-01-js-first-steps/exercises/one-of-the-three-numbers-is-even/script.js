function evenNumberTrueOrFalse(number1, number2, number3) {

    let evenNumber = false;

    if(number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
        return evenNumber =  true;
    } else {
        return evenNumber = false;
    }
}
console.log(evenNumberTrueOrFalse(10,2,30));
console.log(evenNumberTrueOrFalse(1,2,30));
console.log(evenNumberTrueOrFalse(1,2,3));
console.log(evenNumberTrueOrFalse(1,23,3));