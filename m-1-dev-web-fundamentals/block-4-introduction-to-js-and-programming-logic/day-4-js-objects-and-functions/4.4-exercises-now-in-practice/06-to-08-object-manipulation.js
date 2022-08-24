let leitor = {
    nome: "Julia",
    sobrenome: "Pessoa",
    idade: 21,
    livrosFavoritos: [
        {
            titulo: "'O Pior Dia de Todos'",
            autor: "Daniela Kopsch",
            editora: "Tordesilhas",
        },
    ],
};
for (key in leitor.livrosFavoritos) {
    console.log("Result of exercise 6 -> O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[key].titulo + ".");
}
//-----------------------------
console.log(" ");
//-----------------------------
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
});
console.log("Result of exercise 7:");
console.log(leitor);
//-----------------------------
console.log(" ");
//-----------------------------
console.log("Result of exercise 8 -> " + leitor["nome"] + " tem " + leitor["livrosFavoritos"].length + " livros favoritos.");
