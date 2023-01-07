const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

const searchEmployee = (id, objOption) => {
  let employee = "";

  for (let index = 0; index < professionalBoard.length; index += 1) {
    const currentEmployee = professionalBoard[index];

    if (currentEmployee.id === id) {
      employee = currentEmployee;
    }
  }

  if (!employee) {
    throw new Error("ID não identificada");
  }

  if (!employee[objOption]) {
    throw new Error("Informação indisponível");
  }

  return employee[objOption];
};
console.log(searchEmployee('8579-6', 'specialities'));
console.log(' ');
console.log(searchEmployee('5569-4', 'firstName'));
console.log(' ');
console.log(searchEmployee('4456-4', 'lastName'));
console.log(' ');
console.log(searchEmployee('1256-4', 'specialities'));
console.log(' ');
console.log(searchEmployee('9852-2-2', 'firstName'));
console.log(' ');
console.log(searchEmployee('4678-2', 'lastName'));

module.exports = searchEmployee;
