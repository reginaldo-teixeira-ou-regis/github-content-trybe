let reader = {
    name: "Julia",
    lastname: "Pessoa",
    age: 21,
    favoriteBooks: [
        {
            title: "'O Pior Dia de Todos'",
            author: "Daniela Kopsch",
            publishingCompany: "Tordesilhas",
        },
    ],
};
for (key in reader.favoriteBooks) {
    console.log("Result of exercise 1 -> O livro favorito de " + reader.name + " " + reader.lastname + " se chama " + reader.favoriteBooks[key].title + ".");
}
console.log(" ");
//-----------------------------
reader.favoriteBooks.push({
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publishingCompany: 'Rocco',
});
console.log("Result of exercise 2:");
console.log(reader);
console.log(" ");
//-----------------------------
console.log("Result of exercise 3 -> " + reader["name"] + " tem " + reader["favoriteBooks"].length + " livros favoritos.");