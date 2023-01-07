const myFizzBuzz = require("./script");

/* A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

describe("Receive a number is return 'fizzbuzz', 'fizz', 'buzz', or the number itself and case not be a number return false", () => {
  test("The function myFizzBuzz receive the parameter (15) and if are divisible by 3 and 5 return fizzbuzz", () => {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz");
  });
  
  test("The function myFizzBuzz receive the parameter (9) and if it is divisible only by 3 return fizz", () => {
    expect(myFizzBuzz(9)).toEqual("fizz");
  });

  test("The function myFizzBuzz receive the parameter (55) and if it is divisible only by 5 return buzz", () => {
    expect(myFizzBuzz(55)).toEqual("buzz");
  });

  test("The function myFizzBuzz receive the parameter (14) and if not are divisible by 3 and 5 return himself", () => {
    expect(myFizzBuzz(14)).toEqual(14);
  });

  test("The function myFizzBuzz receive the parameter that is not a number and return false", () => {
    expect(myFizzBuzz("one")).toEqual(false);
  });
});
