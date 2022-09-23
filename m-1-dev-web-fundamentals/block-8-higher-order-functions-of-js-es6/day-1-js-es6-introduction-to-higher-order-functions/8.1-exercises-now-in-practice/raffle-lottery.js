/* Sorteador de loteria
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”). */

const lotteryNumber = (betNumber, callback) => {
    const generateNumber = Math.floor((Math.random() * 5) + 1);
    console.log(`Numero Apostado: ${betNumber} / Numero sorteado: ${generateNumber}`);
    console.log(' ');
    return callback(betNumber, generateNumber);
}

const checkedBet = (betNumber, generateNumber) => {
    if(betNumber === generateNumber) {
        return '“Parabéns você ganhou”';
    } else {
        return '“Tente novamente”';
    }
}

console.log(lotteryNumber(3, checkedBet));