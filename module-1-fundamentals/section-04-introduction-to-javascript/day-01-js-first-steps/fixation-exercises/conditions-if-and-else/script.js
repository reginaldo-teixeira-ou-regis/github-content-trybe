const pessoaCandidata1 = 88;

if(pessoaCandidata1 <= 100 && pessoaCandidata1 >= 80) {
    console.log('Parabéns, você fez ' + pessoaCandidata1 + ' pontos e foi aprovada(o)!');
} else if(pessoaCandidata1 < 80 && pessoaCandidata1 >= 60) {
    console.log('Você fez ' + pessoaCandidata1 + ' pontos e está na nossa lista de espera!');
} else if(pessoaCandidata1 < 60 && pessoaCandidata1 >= 0) {
    console.log('Você fez ' + pessoaCandidata1 + ' pontos e infelizmente foi reprovada(o)!');
} else {
    console.log("ERROR, por favor informe sua nota corretamente");
}