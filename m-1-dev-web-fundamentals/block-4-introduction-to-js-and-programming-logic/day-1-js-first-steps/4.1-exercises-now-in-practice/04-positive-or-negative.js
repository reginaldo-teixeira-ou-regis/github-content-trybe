function positiveOrNegative(numero) {

    if(numero > 0) {
        return "positive";
    } else if(numero < 0) {
        return "negative";
    } else {
        return "zero";
    }
}
console.log(positiveOrNegative(8));
console.log(positiveOrNegative(0));
console.log(positiveOrNegative(-7));