const paragraph = document.getElementsByTagName("p");

for(let i = 0; i < paragraph.length; i += 1) {
    paragraph[1].innerText = "Espero ter 38 anos rsrs";
    paragraph[i].innerText.toUpperCase();
    console.log(paragraph[i]);
}

document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)'

const h1text = document.getElementsByTagName("h1");

for(let i = 0; i < h1text.length; i += 1) {
    h1text[0].innerText = "Exercício 5.1 - JavaScript";
}