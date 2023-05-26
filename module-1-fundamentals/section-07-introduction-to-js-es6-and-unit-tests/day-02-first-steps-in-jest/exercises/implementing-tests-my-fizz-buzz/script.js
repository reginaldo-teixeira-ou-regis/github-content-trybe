function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}
console.log(myFizzBuzz(2));
console.log(myFizzBuzz(9));
console.log(myFizzBuzz(23));
console.log(myFizzBuzz(50));
console.log(myFizzBuzz(15));

module.exports = myFizzBuzz;
