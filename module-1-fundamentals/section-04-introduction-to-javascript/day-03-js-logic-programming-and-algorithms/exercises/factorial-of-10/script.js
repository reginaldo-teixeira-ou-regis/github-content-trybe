/*Factorial 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800.*/

function factorialOf10(number) {

    if (number !== typeof "string" && number > 1) {
        for(let cont = number -1; cont >=1; cont--) {
            number = number * cont;
        }
        return number;
    } else {
        return "ERROR, digite um numero maior que 1."
    }
}
console.log(factorialOf10(10));
console.log(factorialOf10(5));
console.log(factorialOf10(100));
console.log(factorialOf10("10"));
console.log(factorialOf10("adrf"));