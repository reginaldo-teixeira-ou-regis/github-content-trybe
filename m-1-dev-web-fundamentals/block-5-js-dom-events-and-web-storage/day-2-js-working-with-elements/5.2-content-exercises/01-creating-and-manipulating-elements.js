let arrayExercises1 = [
    "Acesse o elemento elementoOndeVoceEsta.",
    "Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.",
    "Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?",
    "Acesse o primeiroFilho a partir de pai.",
    "Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.",
    "Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.",
    "Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.",
    "Agora acesse o terceiroFilho a partir de pai.",
  ];
  
  let exercisesList1 = document.querySelector(".listExercises1");
  
  for (let index = 0; index < arrayExercises1.length; index += 1) {
    let exercise1 = arrayExercises1[index];
  
    let listOfExercises1 = document.createElement("li");
    listOfExercises1.innerText = exercise1;
  
    exercisesList1.appendChild(listOfExercises1);
  }

/*1*/
document.getElementById("elementoOndeVoceEsta");

/*2*/
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color =
  "brown";

/*3*/
document.querySelector("#elementoOndeVoceEsta").firstElementChild.innerText =
  "Exercicios de manipulação de elemento e nó:";

/*4*/
document.getElementById("pai").firstElementChild;

/*5*/
document.querySelector("#elementoOndeVoceEsta").previousElementSibling;

/*6*/
document.querySelector("#elementoOndeVoceEsta").nextSibling;

/*7*/
document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

/*8*/
document.getElementById("pai").firstElementChild.nextElementSibling.nextElementSibling;

let arrayExercises2 = [
    "Crie um irmão para elementoOndeVoceEsta.",
    "Crie um filho para elementoOndeVoceEsta.",
    "Crie um filho para primeiroFilhoDoFilho.",
    "A partir desse filho criado, acesse terceiroFilho.",
  ];
  
  let exercisesList2 = document.querySelector(".listExercises2");
  
  for (let index = 0; index < arrayExercises2.length; index += 1) {
    let exercise2 = arrayExercises2[index];
  
    let listOfExercises2 = document.createElement("li");
    listOfExercises2.innerText = exercise2;
  
    exercisesList2.appendChild(listOfExercises2);
  }

/*1*/
const container = document.getElementById("pai");
const newSection = document.createElement("section");
newSection.className = "New Section";
container.appendChild(newSection);

/*2*/
const sonElement = document.getElementById("elementoOndeVoceEsta");
const newSon = document.createElement("section");
newSon.className = "New Son";
sonElement.appendChild(newSon);

/*3*/
const son3x = document.getElementById("primeiroFilhoDoFilho");
const newSonOfSon = document.createElement("section");
newSonOfSon.className = "New Son of Son";
son3x.appendChild(newSonOfSon);

/*4*/
document.getElementsByClassName("New Son of Son")[0].parentNode.parentNode.nextElementSibling;