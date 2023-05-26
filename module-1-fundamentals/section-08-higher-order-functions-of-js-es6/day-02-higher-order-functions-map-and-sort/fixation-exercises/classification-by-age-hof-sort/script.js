const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  console.log('Classificação das pessoas por idade em ordem crescente:');
  people.sort((a, b) => a.age - b.age);
  console.log(people);
  console.log(' ');
  console.log('Classificação das pessoas por idade em ordem decrescente:');
  people.sort((a, b) => b.age - a.age);
  console.log(people);