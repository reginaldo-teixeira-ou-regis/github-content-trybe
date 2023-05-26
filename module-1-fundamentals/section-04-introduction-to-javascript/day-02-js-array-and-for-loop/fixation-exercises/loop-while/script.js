let counter = 0;
while (counter !== 5) {
  counter += 1;
}
console.log(counter);
console.log(" ");
//----------------------------
function dice() {
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
console.log("O resultado da primeira rolagem do dado é: " + d1 +
    " e o resultado da segunda rolagem do dado é: " + d2);
console.log(" ");
//----------------------------
while (d1 === d2) {
  d1 = dice();
  d2 = dice();
}
if (d1 > d2) {
  console.log("O numero " + d1 + " é maior que o numero " + d2);
} else {
  console.log("O numero " + d2 + " é maior que o numero " + d1);
}
