/* Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:

De olho na dica 👀: use o object destructuring. */

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
      // bornIn: nascido em
  ];
  
/* const filterPeople = ({ bornIn }) => (bornIn >= 2000).name; */

const filterPeople = (array) => {
    return people.filter(({ nationality, bornIn }) => {
      return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
    });
  }

console.log(filterPeople(people));