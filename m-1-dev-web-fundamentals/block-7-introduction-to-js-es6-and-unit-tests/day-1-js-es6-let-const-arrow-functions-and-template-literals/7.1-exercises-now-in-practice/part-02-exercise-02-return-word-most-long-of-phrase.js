const longestWord = (phrase) => {
    let arrayPhrase = phrase.split(' ');
    let largerWord = '';
    for (let i of arrayPhrase) {
        if (i.length > largerWord.length) {
            largerWord = i;
        }
    }
    return largerWord;
}

console.log(``);
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'
console.log('');
console.log(longestWord('O santastico jogou até bem hoje, mas perdeu o jogo')); // retorna 'santastico'
console.log('');
console.log(longestWord('Hoje pare de estudar só para ver o classico paulista')); // retorna 'classico'

console.log(``);
console.log(`============================================================`);
console.log(``);

const longestWord2 = (phrase) => {
    phrase = phrase.split(' ');
    return phrase.sort((a, b) => b.length - a.length)[0];
}

console.log(longestWord2('Antônio foi ao banheiro e ficou impressionado com o que viu')); // retorna 'impressionado'
console.log('');
console.log(longestWord2('O santos jogou até bem hoje, mas se perdeu em campo quando expulsaram um jogador do time rival')); // retorna 'expulsaram'
console.log('');
console.log(longestWord2('Hoje estudei quase o dia todo')); // retorna 'estudei'