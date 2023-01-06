const elementH1 = document.createElement("h1");
      elementH1.innerText = "Add and Removing Elements Dynamically - JavaScript DOM";
      ///*1*/elementH1.className = "title";
      document.body.appendChild(elementH1);

      const elementMain = document.createElement("main");
      elementMain.className = "main-content";
      document.body.appendChild(elementMain);

      const elementSectionCenter = document.createElement("section");
      elementSectionCenter.className = "center-content";
      elementMain.appendChild(elementSectionCenter);

      const elementP = document.createElement("p");
      elementP.innerText = "Criando HTML dinamico!";
      elementSectionCenter.appendChild(elementP);

      const elementSectionLeft = document.createElement("section");
      elementSectionLeft.className = "left-content";
      elementMain.appendChild(elementSectionLeft);

      const elementSectionRight = document.createElement("section");
      elementSectionRight.className = "right-content";
      elementMain.appendChild(elementSectionRight);

      const elementImg = document.createElement("img");
      elementImg.className = "small-image";
      elementImg.src = "https://picsum.photos/200";
      elementSectionLeft.appendChild(elementImg);

      const elementOl = document.createElement("ol");
      elementSectionRight.appendChild(elementOl);
      const arrayNumbers = [
        '🚀 Adicione a classe title na tag h1 criada;',
        '🚀 Adicione a classe description nas 3 tags h3 criadas;',
        '🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();',
        '🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;',
        '🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;',
        '🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.',
        "Sete",
        "Oito",
        "Nove",
        "Dez",
      ];
      for (let num in arrayNumbers) {
        const elementLi = document.createElement("li");
        elementLi.innerHTML = arrayNumbers[num];
        elementOl.appendChild(elementLi);
      }

      for (let index = 1; index <= 3; index += 1) {
        const elementH3 = document.createElement("h3");
        elementH3.innerHTML = "Show " + index;
        elementMain.appendChild(elementH3);
      }

      /*1*/
      const title = document.querySelector("h1");
      title.className = "title";

      /*2*/
      const elementsH3 = document.getElementsByTagName("h3");
      for (let index = 0; index < 3; index += 1) {
        elementsH3[index].className = "description";
      }

      /*3*/
      const sectionLeftContent = document.getElementsByClassName('left-content')[0];
      elementMain.removeChild(sectionLeftContent);

      /*4*/
      const sectionRightContent = document.getElementsByClassName('right-content')[0];
      sectionRightContent.style.marginRight = 'auto';

      /*5*/
      const sectionCenterContent = document.getElementsByClassName('center-content')[0];
      sectionCenterContent.parentNode.style.backgroundColor = 'green';

      /*6*/
      const ul = document.getElementsByTagName('ol')[0];
      ul.lastChild.remove();
      ul.lastChild.remove();
      ul.lastChild.remove();
      ul.lastChild.remove();