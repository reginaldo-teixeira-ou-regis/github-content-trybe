let counter = 0;

for (let index = 2; index <= 150; index += 1) {
  if (index % 3 === 0) {
    counter += 1;
  }
}

if (counter === 50) {
  console.log("secret Message!");
}