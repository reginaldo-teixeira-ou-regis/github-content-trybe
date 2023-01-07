const personStudent = {};

const addProperty = (object, newProperty, value) => {
  object[newProperty] = value
};

addProperty(personStudent, `nome`, `Fulano da Silva`);
console.log('Add nome:');
console.log(personStudent);
console.log(' ');

addProperty(personStudent, `email`, `exemplo-fulano.silva@email.com`);
console.log('Add email:');
console.log(personStudent);
console.log(' ');

addProperty(personStudent, `telefone`, `11 1111-1111`);
console.log('Add telefone:');
console.log(personStudent);
console.log(' ');

addProperty(personStudent, `github`, `github.com/exemplo-fulano-da-silva`);
console.log('Add github:');
console.log(personStudent);
console.log(' ');

addProperty(personStudent, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);
console.log('Add linkedIn:');
console.log(personStudent);
console.log(' ');