const lesson1 = {
    schoolSubject: 'Matemática',
    numberStudents: 20,
    teacher: 'Maria Clara',
    turn: 'manhã',
  };
  
  const lesson2 = {
    schoolSubject: 'História',
    numberStudents: 20,
    teacher: 'Carlos',
  };
  
  const lesson3 = {
    schoolSubject: 'Matemática',
    numberStudents: 10,
    teacher: 'Maria Clara',
    turn: 'noite',
  };
  console.log('=============================================================================');
  
  // Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  
  const addTurnNight = (objMod, keyAdd, valueAdd) => objMod[keyAdd] = valueAdd;
  
  addTurnNight(lesson2, 'turn', 'noite');
  
  console.log(`Resposta do Exercio 1 - Adicionando o turno da noite ao objeto:`);
  console.log(lesson2);
  console.log('=============================================================================');
  
  // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  
  const listKeys = (obj) => Object.keys(obj);
  /* {
    let storeKeys = '';
    for (let keys in obj) {
      storeKeys += `${keys}
  `;
    }
    return storeKeys;
  } */
  console.log(`Resposta do Exercio 2 - Listando as chaves do objeto:`);
  console.log(listKeys(lesson2));
  console.log('=============================================================================');
  
  // Crie uma função para mostrar o tamanho de um objeto.
  
  const objectSize = (obj) => Object.keys(obj).length;
  
  console.log(`Resposta do Exercio 3 - O tamanho do objeto é ${objectSize(lesson2)}.`);
  console.log('=============================================================================');
  
  // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  
  const listValue = (obj) => Object.values(obj);
  
  console.log(`Resposta do Exercio 4 - Listando os valores do objeto:`);
  console.log(listValue(lesson2));
  console.log('=============================================================================');
  
  /* Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
  console.log(allLessons);
  {
    lesson1:
     { schoolSubject: 'Matemática',
       numberStudents: 20,
       teacher: 'Maria Clara',
       turn: 'manhã' },
    lesson2:
     { schoolSubject: 'História',
       numberStudents: 20,
       teacher: 'Carlos',
       turn: 'noite' },
    lesson3:
     { schoolSubject: 'Matemática',
       numberStudents: 10,
       teacher: 'Maria Clara',
       turn: 'noite' }
  }; */
  
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  
  console.log(`Resposta do Exercio 5 - Criando um novo objeto com outros objetos dentro:`);
  console.log(allLessons);
  console.log('=============================================================================');
  
  // Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
  
  const totalNumberOfStudents = (obj1) => lesson1.numberStudents + lesson2.numberStudents + lesson3.numberStudents;
  
  console.log(`(Resposta do Exercio 6 - Proposta só para essa questão)
  Somando todas as aulas temos um total de ${totalNumberOfStudents(allLessons)} alunos.`);
  console.log('=============================================================================');
  
  const getNumberOfStudents = (obj) => {
    let total = 0;
  
    const array = Object.keys(obj);
      
    for (index in array) {
      total += obj[array[index]].numberStudents; // incremente a variável total a cada iteração
    }
    return total; // a função retorna o total de alunos após as iterações do "for/in"
  };
  console.log(`Resposta do Exercio 7 - (Proposta global)
  Somando todas as aulas temos um total de ${getNumberOfStudents(allLessons)} alunos.`);
  console.log('=============================================================================');
  
  // Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
  
  // console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matemática'
  
  const theKeyValue = (obj, position) => Object.values(obj)[position];
  
  console.log(`Resposta do Exercio 8 - O valor do objeto na posição ${[2]} é: ${theKeyValue(lesson3, 2)}`);
  console.log('=============================================================================');
  
  // Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
  
  /* console.log(verifyPair(lesson3, 'turn', 'noite'));
  // Output: true,
  console.log(verifyPair(lesson3, 'schoolSubject', 'Maria Clara'));
  // Output: false */
  
  const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  }
  console.log('Resposta do Exercio 9:');
  console.log(verifyPair(lesson3, 'turn', 'noite'));
  console.log(' ');
  console.log(verifyPair(lesson3, 'schoolSubject', 'Maria Clara'));
  console.log('=============================================================================');
  
  // Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
  
  const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      if(obj[array[index]].schoolSubject === 'Matemática') {
      total += obj[array[index]].numberStudents;
      }
    }
    return total;
  }
  console.log(`Resposta do Exercio 10 - ${getNumberOfStudentsMath(allLessons)} estudantes assistiram às aulas de Matemática.`);
  console.log('=============================================================================');
  
  // Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do teacher ou teachera, as aulas que ele ou ela ministrou e o número total de estudantes.
  
  // console.log(createReport(allLessons, 'Maria Clara'));
  /* {
    teacher: 'Maria Clara',
    classes: [ 'Matemática', 'Matemática' ],
    students: 30
  } */
  
  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].teacher === name) {
        allLessons.push(array[index].schoolSubject)
        allStudent += array[index].numberStudents;
      }
    }
    return { lessons: allLessons, students: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.teacher = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log('Resposta do Exercio 11 - O relatório do(a) professor(a) é:')
  console.log(createReport(allLessons, 'Maria Clara'));
  console.log('=============================================================================');