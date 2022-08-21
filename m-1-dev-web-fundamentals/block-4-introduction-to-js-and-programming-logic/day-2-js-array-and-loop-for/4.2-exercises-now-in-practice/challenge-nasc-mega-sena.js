let numerosMegaSena = [];

for (let index = 0; index < 6; index += 1) {
  numerosMegaSena.push(Math.floor(Math.random() * 60) + 1)
}

let numerosMinhaAposta = [12, 41, 7, 33, 45, 11];
let apostaDoGrilo = [34, 10, 25, 7, 59, 30]

let numeroDeAcertos = 0;

for (let indexAposta = 0; indexAposta < apostaDoGrilo.length; indexAposta += 1) {
  // console.log('Número aposta', numerosMinhaAposta[indexAposta])
  for (let indexMega = 0; indexMega < numerosMegaSena.length; indexMega += 1) {
    // console.log('Número Mega Sena', numerosMegaSena[indexMega])
    if (apostaDoGrilo[indexAposta] === numerosMegaSena[indexMega]) {
      numeroDeAcertos += 1
    }
  }
}

console.log(numeroDeAcertos);