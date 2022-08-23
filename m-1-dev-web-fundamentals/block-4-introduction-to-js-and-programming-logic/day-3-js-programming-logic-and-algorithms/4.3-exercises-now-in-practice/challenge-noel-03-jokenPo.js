let person1 = "scissors";
let person2 = "stone";

if (person1 === "paper" && person2 == "stone") {
  console.log("Player 1 won");
} else if (person1 === "stone" && person2 === "scissors") {
  console.log("Player 1 won");
} else if (person1 === "scissors" && person2 === "paper") {
  console.log("Player 1 won");
} else if (person1 === person2) {
  console.log("A Ties");
} else {
  console.log("Player 2 won");
}