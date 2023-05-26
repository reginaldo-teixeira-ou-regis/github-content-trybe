const createItem = require('./script.js');

describe('Test the function createItem', () => {
  it('Create a valid item', () => {
    const expected = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    const actual = createItem('banana', 'kg', 1.99, 20);
    expect(actual).toEqual(expected);
  });

  it('Use zero as default quantity', () => {
    const expected = 0;
    const actual = createItem('banana', 'kg', 1.99); // undefined quantity
    expect(actual).toHaveProperty('quantity', expected);
  });

  it('Throws an error when not receive parameters', () => {
    expect(() => createItem()).toThrow();
  });

  it('Throws an error if item name is not a string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20))
      .toThrow('O nome do item deve ser uma string');
  });

  it('Throws an error if the price is negative', () => {
    expect(() => createItem('banana', 'kg', -0.01))
      .toThrow('O preço do item deve ser maior que zero');
  });
  
  it('Throws an error if price is zero', () => {
    expect(() => createItem('banana', 'kg', 0.00))
      .toThrow('O preço do item deve ser maior que zero');
  });
});