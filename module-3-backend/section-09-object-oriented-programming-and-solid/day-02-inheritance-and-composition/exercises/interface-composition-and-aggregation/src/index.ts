import Person from './entities/Person';
import Student from './entities/Student';
import Employee from './entities/Employee';
import Subject from './entities/Subject';
import Teacher from './entities/Teacher';

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log('EXERCICIO 1:\n');
console.log(maria);
console.log(luiza);
console.log('\n\n');

// deve retornar erro
// const invalidPersonName = new Person('An', new Date('2000/06/07'));
// deve retornar erro
// const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

console.log('EXERCICIO 2:\n');
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);
console.log('\n\n');

// deve retornar erro
// fernando.assignmentsGrades = [45, 45, 45];

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log('EXERCICIO 3:\n');
console.log(testInterfaceEmployee);
console.log('\n\n');

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log('EXERCICIO 4:\n');
console.log(math);
console.log(history);
console.log(philosophy);
console.log('\n\n');

// deve retornar erro
// const invalidSubjectName = new Subject('Po');

const marta = new Teacher(
  'Marta da Silva',
  new Date('1980/03/30'),
  2000,
  math,
);

const joao = new Teacher(
  'João Antônio da Costa',
  new Date('1982/04/21'),
  2000,
  history,
);

const lucio = new Teacher(
  'Lucio Teixeira',
  new Date('1986/01/29'),
  2000,
  philosophy,
);

console.log('EXERCICIO 5:\n');
console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
// const invalidTeacherSalary = new Teacher(
//   'Marta da Silva',
//   new Date('1980/03/30'),
//   2000,
//   math,
// );

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;