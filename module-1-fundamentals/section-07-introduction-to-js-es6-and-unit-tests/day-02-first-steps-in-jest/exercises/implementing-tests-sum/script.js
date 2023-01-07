function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("parameters must be numbers");
  }

  return a + b;
}
console.log(sum(4, 5));
/* console.log(sum(4, '5')); */

module.exports = sum;
