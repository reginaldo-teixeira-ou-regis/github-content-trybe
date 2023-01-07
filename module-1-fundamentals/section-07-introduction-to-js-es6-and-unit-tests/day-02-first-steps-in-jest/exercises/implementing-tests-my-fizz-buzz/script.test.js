const myFizzBuzz = require("./script.js");

/* A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

describe("Receive a number is return 'fizzbuzz', 'fizz', 'buzz', or the number it self and case not be a number return false", () => {
  it("The function myFizzBuzz receive as parameter (15) and if are divisible by 3 and 5 return fizzbuzz", () => {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz");
  });
  
  it("The function myFizzBuzz receive as parameter (9) and if it is divisible only by 3 return fizz", () => {
    expect(myFizzBuzz(9)).toEqual("fizz");
  });

  it("The function myFizzBuzz receive as parameter (55) and if it is divisible only by 5 return buzz", () => {
    expect(myFizzBuzz(55)).toEqual("buzz");
  });

  it("The function myFizzBuzz receive as parameter (14) and if not are divisible by 3 and 5 return himself", () => {
    expect(myFizzBuzz(14)).toEqual(14);
  });

  it("The function myFizzBuzz receive as parameter something that is not a number return false", () => {
    expect(myFizzBuzz("one")).toEqual(false);
  });
});
