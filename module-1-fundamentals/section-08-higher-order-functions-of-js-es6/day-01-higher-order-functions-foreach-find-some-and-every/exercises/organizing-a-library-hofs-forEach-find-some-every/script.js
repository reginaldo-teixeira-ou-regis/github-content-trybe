const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];

/* Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
De olho na dica 👀: use a função find. */

const authorBornIn1947 = () => books.find(book => book.author.birthYear === 1947).author.name;

console.log(`Resposta Exercicio 1 usando a HOF -> "find" - O autor nascido em 1947 é o ${authorBornIn1947()}.`);
console.log(' ');

/* Retorne o nome do livro de menor nome.
De olho na dica 👀: use a função forEach. */

function smallerName() {
    let nameBook;
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    });
    return nameBook;
}
console.log(`Resposta Exercicio 2 usando a HOF -> "forEach" - O livro de menor nome é o ${smallerName()}.`);
console.log(' ');

/* Encontre o primeiro livro cujo nome possui 26 caracteres. */

const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
          name: 'George R. R. Martin',
      birthYear: 1948,
    },
      releaseYear: 1991,
  };

  function getNamedBook() {
    return books.find((book) => book.name.length === 26)
  }
  console.log('Resposta Exercicio 3 usando a HOF -> "find":');
  console.log(getNamedBook());
  console.log(' ');

/* Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário. */

const expectedResult3 = false;

function everyoneWasBornOnSecXX() {
  return !books.every((book) => book.author.birthYear < 2000);
}
console.log('Resposta Exercicio 4 usando a HOF -> "every":');
console.log(everyoneWasBornOnSecXX());
console.log(' ');

/* Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. */

const expectedResult4 = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);
}
console.log('Resposta Exercicio 5 usando a HOF -> "some":');
console.log(someBookWasReleaseOnThe80s());
console.log(' ');

/* Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário. */

const expectedResult5 = false;

function authorUnique() {
  return books.every((book1) => 
    books.some((book2) => book2.author.birthYear === book1.author.birthYear && book1.name !== book2.name)
  )
}
console.log('Resposta Exercicio 6 usando a HOF -> "every":');
console.log(authorUnique());