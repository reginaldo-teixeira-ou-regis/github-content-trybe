const hydrate = require('./script.js');

describe('Test the function hydrate', () => {
  it('Test if the function hydrate is defined', () => {
    expect(hydrate).toBeDefined();
  });
  
  it('Test if hydrate is a function', () => {
    expect(typeof hydrate).toBe('function');
  });

  it('When receiving a string, return the suggestion of how many glasses of water to drink', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});