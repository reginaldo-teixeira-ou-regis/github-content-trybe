/* Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:
De olho na dica 👀: use o default params. */

const greet = (namePerson, saudacao = 'Hi') => `${saudacao} ${namePerson}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(' ');
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(' ');
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'