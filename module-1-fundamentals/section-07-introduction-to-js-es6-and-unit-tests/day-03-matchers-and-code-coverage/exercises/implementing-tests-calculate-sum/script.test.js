const sum = require("./script.js");

describe("Test the function sum", () => {
  it("Should return the sum result", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  
  it("Should trigger an error if it receives a string as parameter", () => {
    expect(() => sum(4, "5")).toThrowError();
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});
