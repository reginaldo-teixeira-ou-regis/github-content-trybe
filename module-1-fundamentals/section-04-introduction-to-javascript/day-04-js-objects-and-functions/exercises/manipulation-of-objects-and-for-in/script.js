let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  console.log("Result of exercise 1 -> Bem vinda, " + info.personagem + "!");
  console.log(" ");
  //-----------------------------
  info["recorrente"] = "sim";
  console.log("Result of exercise 2:");
  console.log(info);
  console.log(" ");
  //-----------------------------
  console.log("Result of exercise 3:");
  for(let index in info) {
      console.log(index);
  }
  console.log(" ");
  //-----------------------------
  console.log("Result of exercise 4:");
  for(let index in info) {
      console.log(info[index]);
  }
  console.log(" ");
  //-----------------------------
  let info2 = {
      personagem: "Tio Patinhas", 
      origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
      nota: "O último MacPatinhas",
      recorrente: "sim",
  }
  info2["recorrente"] = "Ambos recorrentes";
  console.log("Result of exercise 5:");
  console.log(info.personagem + " e " + info2.personagem);
  console.log(info.origem + " e " + info2.origem);
  console.log(info.nota + " e " + info2.nota);
  console.log(info2.recorrente);