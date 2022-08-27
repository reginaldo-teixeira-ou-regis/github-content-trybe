/*1 - Acesse o elemento elementoOndeVoceEsta.
2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4 - Acesse o primeiroFilho a partir de pai.
5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
8 - Agora acesse o terceiroFilho a partir de pai.*/

/*1*/ document.getElementById("elementoOndeVoceEsta");

/*2*/ document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "purple";

/*3*/ document.querySelector("#elementoOndeVoceEsta").firstElementChild.innerText = "Assim se adiciona texto no primeiro filho do filho do elemento.";

/*4*/ document.getElementById("pai").firstElementChild;

/*5*/ document.querySelector("#elementoOndeVoceEsta").firstElementChild;

/*6*/ document.querySelector("#elementoOndeVoceEsta").nextSibling;

/*7*/ document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

/*8*/ document.getElementById("pai").lastElementChild.previousElementSibling;