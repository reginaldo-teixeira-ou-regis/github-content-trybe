// Exemplo 1
// const makeGreetingsMessage = (user = 'pessoa') => {
//   return `Olá, ${user}`;
// }
// console.log(makeGreetingsMessage('oliva'));
// console.log(makeGreetingsMessage());

// Evoluindo a função... exemplo 2
const makeGreetingsMessage = ({ user = 'pessoa' } = { }) => {
  return `Olá, ${user}`;
}
console.log(makeGreetingsMessage({ user: 'oliva' }));
console.log(makeGreetingsMessage({ }));
console.log(makeGreetingsMessage());

