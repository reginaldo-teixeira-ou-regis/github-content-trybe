let player = 
    {
        name: 'Marta',
        lastName: 'Silva',
        age: 34,
        medals: { golden: 2, silver: 3 },
    };
console.log("Result of exercise 1:");
console.log(player);
console.log(" ");
console.log(player.name);
console.log(" ");
console.log(player.medals["golden"]);
console.log(" ");
//-----------------------------
console.log("Result of exercise 2 -> A jogadora " + player.name + " " + player["lastName"] + " tem " + player.age + " anos de idade.");
console.log(" ");
//-----------------------------
player["fullName"] = player.name + " " + player.lastName;
player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log("Result of exercise 3:");
console.log(player);
console.log(" ");
//-----------------------------
console.log("Result of exercise 4 -> A jogadora " + player.fullName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");
console.log(" ");
//-----------------------------
console.log("Result of exercise 5 -> A jogadora possui " + player.medals["golden"] + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");