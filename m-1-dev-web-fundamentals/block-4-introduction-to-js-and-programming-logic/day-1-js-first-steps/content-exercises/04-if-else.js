const pessoaCandidata = 88;

if(pessoaCandidata <= 100 && pessoaCandidata >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} else if(pessoaCandidata < 80 && pessoaCandidata >= 60) {
    console.log("Você está na nossa lista de espera");
} else if(pessoaCandidata < 60 && pessoaCandidata >= 0) {
    console.log("Você foi reprovada(o)");
} else {
    console.log("ERROR, por favor informe sua nota corretamente");
}
