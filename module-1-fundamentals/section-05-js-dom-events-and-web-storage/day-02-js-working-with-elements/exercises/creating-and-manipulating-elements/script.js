/*1*/
const elementH1 = document.createElement("h1");
elementH1.innerText = "Creating and Manipulating Elements - JavaScript DOM";
document.body.appendChild(elementH1);

/*2*/
const elementMain = document.createElement("main");
elementMain.className = "main-content";
document.body.appendChild(elementMain);

/*3*/
const elementSectionCenter = document.createElement("section");
elementSectionCenter.className = "center-content";
elementMain.appendChild(elementSectionCenter);

/*4*/
const elementP = document.createElement("p");
elementP.innerText = "Criando HTML dinamico!";
elementSectionCenter.appendChild(elementP);

/*5*/
const elementSectionLeft = document.createElement("section");
elementSectionLeft.className = "left-content";
elementMain.appendChild(elementSectionLeft);

/*6*/
const elementSectionRight = document.createElement("section");
elementSectionRight.className = "right-content";
elementMain.appendChild(elementSectionRight);

/*7*/
const elementImg = document.createElement("img");
elementImg.className = "small-image";
elementImg.src = "https://picsum.photos/200";
elementSectionLeft.appendChild(elementImg);

/*8*/
const elementOl = document.createElement("ol");
elementSectionRight.appendChild(elementOl);
const arrayNumbers = [
  '🚀 Adicione a tag h1 com o texto Creating and Manipulating Elements - JavaScript DOM como filho da tag body;',
  '🚀 Adicione a tag main com a classe main-content como filho da tag body;',
  '🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;',
  '🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;',
  '🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;',
  '🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;',
  '🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;',
  '🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;',
  '🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.',
];
for (let num in arrayNumbers) {
  const elementLi = document.createElement("li");
  elementLi.innerHTML = arrayNumbers[num];
  elementOl.appendChild(elementLi);
}

/*9*/
for (let index = 1; index <= 3; index += 1) {
  const elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'Show ' + index;
  elementMain.appendChild(elementH3);
}

const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'gray';