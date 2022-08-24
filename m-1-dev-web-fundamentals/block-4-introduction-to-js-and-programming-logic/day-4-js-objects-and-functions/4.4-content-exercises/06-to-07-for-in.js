let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

console.log("Result of exercise 6:");
for (let index in names) {
  console.log("Olá " + names[index] + "!");
}
//-----------------------------
console.log(" ");
//-----------------------------
let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

console.log("Result of exercise 7:");
for (let index in car) {
    console.log(index, car[index]);
}