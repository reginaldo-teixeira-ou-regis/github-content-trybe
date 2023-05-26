const vowels = ["a", "e", "i", "o", "u"];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split("");
  caracters.forEach((letter, i) => {
    vowels.forEach((vowel, k) => {
      caracters[i] = letter === vowel ? code[k] : caracters[i];
    });
  });

  return caracters.join("");
}
console.log(encode("Trybers com muito orgulho"));
console.log(" ");

function decode(text) {
  const caracters = text.split("");
  caracters.forEach((caracter, i) => {
    code.forEach((number, k) => {
      caracters[i] = caracter === number.toString() ? vowels[k] : caracters[i];
    });
  });

  return caracters.join("");
}
console.log(decode("Tryb2rs c4m m53t4 4rg5lh4"));

const functions = { encode, decode };
module.exports = functions;