/* Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.

De olho na dica 👀: use o parâmetro rest. */

const sum = (...param) => param.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum(4,5,6));
console.log(' ');
console.log(sum(4,5,6,40,70,10,25,35,5));