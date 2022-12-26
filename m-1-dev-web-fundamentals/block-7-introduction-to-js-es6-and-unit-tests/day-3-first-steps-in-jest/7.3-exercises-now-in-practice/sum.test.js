const sum = require("./sum");

/* A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9

Teste se o retorno de sum(0, 0) é 0

Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)

Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5") */

describe('The function sum', () => {
  test("sum of 4 and 5 is 9", () => {
    expect(sum(4, 5)).toEqual(9);
  });
  test("sum of 0 and 0 is 0", () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it("sum of 4 and '5' is '5'", () => {
    expect(() => (sum(4, '5'))).toThrow(Error);
  });
  it('to throw error', () => {
    expect(() => (sum('4', 5))).toThrow('parameters must be numbers');
  });
});
