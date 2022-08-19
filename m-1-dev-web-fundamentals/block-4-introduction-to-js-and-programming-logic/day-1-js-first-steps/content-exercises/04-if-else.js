function AprovadoOuNao(nota) {

    const pessoaCandidata = "";
    let resultado;

    if(nota >= 0 && nota < 60) {
        resultado = "Você foi reprovada(o)";
    } else if(nota >= 60 && nota < 80) {
        resultado = "Você está na nossa lista de espera";
    } else if(nota >= 80 && nota <= 100) {
        resultado = "Parabéns, você foi aprovada(o)!";
    } else {
        resultado = "ERROR, por favor informe sua nota corretamente";
    }
}
console.log(nota(69));
