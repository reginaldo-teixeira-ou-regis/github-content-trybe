const { info, printMessage } = require("./script.js");

describe('Test the function printMessage', () => {
  it('Test object info', () => {
    expect(info).toHaveProperty('character');
  });

  it('Test the function printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.character);
  });

  it('Test the exception flow of the printMessage function', () => {
    expect(printMessage('Margarida')).toThrow('objeto inválido');
  });
});