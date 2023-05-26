const { encode, decode } = require("./script.js");

describe("Test the functions encode and decode", () => {
  it("The functions encode is defined", () => {
    expect(encode).toBeDefined();
  });

  it("encode is a functions", () => {
    expect(typeof encode).toEqual("function");
  });

  it('Convert only the vowel "a" in number 1', () => {
    expect(encode("ana")).toEqual("1n1");
  });

  it('Convert only the vowel "e" in number 2', () => {
    expect(encode("ele")).toEqual("2l2");
  });

  it('Convert only the vowel "i" in number 3', () => {
    expect(encode("xixi")).toEqual("x3x3");
  });

  it('Convert only the vowel "o" in number 4', () => {
    expect(encode("ovo")).toEqual("4v4");
  });

  it('Convert only the vowel "u" in number 5', () => {
    expect(encode("nu")).toEqual("n5");
  });

  it("Check if the return of function has the same number of characters", () => {
    expect(encode("trybe").length).toEqual(5);
  });

  it("The functions decode is defined", () => {
    expect(decode).toBeDefined();
  });

  it("decode is a functions", () => {
    expect(typeof decode).toEqual("function");
  });

  it("Convert only the number 1 in vowel 'a'", () => {
    expect(decode("1n1")).toEqual("ana");
  });

  it("Convert only the number 2 in vowel 'e'", () => {
    expect(decode("2l2")).toEqual("ele");
  });

  it("Convert only the number 3 in vowel 'i'", () => {
    expect(decode("x3x3")).toEqual("xixi");
  });

  it("Convert only the number 4 in vowel 'o'", () => {
    expect(decode("4v4")).toEqual("ovo");
  });

  it("Convert only the number 5 in vowel 'u'", () => {
    expect(decode("n5")).toEqual("nu");
  });
  
  it("Check if the return of function has the same number of characters", () => {
    expect(decode("trybe").length).toEqual(5);
  });
});