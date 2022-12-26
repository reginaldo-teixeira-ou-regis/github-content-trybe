/*const paragraph = document.getElementsByTagName("p");

for(let i = 0; i < paragraph.length; i += 1) {
    paragraph[1].innerText = "Espero ter 38 anos rsrs";
    paragraph[i].innerText.toUpperCase();
    console.log(paragraph[i]);
}

document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';

document.getElementByClassName("main-content")[1].style.backgroundColor = 'white';

const h1text = document.getElementsByTagName("h1");

for(let i = 0; i < h1text.length; i += 1) {
    h1text[0].innerText = "Exercício 5.1 - JavaScript";
}*/

function changeText() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "Ganhar 3.500 e estar em um empresa cabulosa!!";
  };
  changeText();

  function changeSquareToGreen() {
    let squareYellow = document.getElementsByClassName('main-content')[0];
    squareYellow.style.background = "rgb(76,164,109)";
  }
  changeSquareToGreen();

  function changeSquareToWhite() {
    let squareRed = document.getElementsByClassName('center-content')[0];
    squareRed.style.background = "white";
  }
  changeSquareToWhite();

  function correctTitle() {
    let title = document.getElementsByTagName('h1')[0];
    title.innerHTML = "Exercício 5.1 - JavaScript";
  }
  correctTitle();

  function paragraphUpperCase() {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
  }
  paragraphUpperCase();

  function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);
    }
  }
  showParagraphs();