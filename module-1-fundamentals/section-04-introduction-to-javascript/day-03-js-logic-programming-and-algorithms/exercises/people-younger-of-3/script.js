let ageNoel = 18;
let ageEllen = 16;
let ageNasc = 19;

if (ageNoel < ageEllen && ageNoel < ageNasc) {
  console.log("Noel é o mais novo");
} else if (ageEllen < ageNoel && ageEllen < ageNasc) {
  console.log("Ellen é a mais nova");
} else {
  console.log("Nasc é é o mais novo");
}