const readline = require('readline-sync');

const calculatingTheIMC = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`);
  imc = weight / ((height / 100) ** 2);
  return imc;
};

const IMC_MAX_AND_MIN = {
  'Underweight': {
    minIMC: 0,
    maxIMC: 18.4,
  },
  'Normal Weight': {
    minIMC: 18.5,
    maxIMC: 24.9,
  },
  'Overweight': {
    minIMC: 25,
    maxIMC: 29.9,
  },
  'Obese Class I': {
    minIMC: 30.0,
    maxIMC: 34.9,
  },
  'Obese Class II': {
    minIMC: 35,
    maxIMC: 39.9,
  },
  'Obese Class III': {
    minIMC: 40,
    maxIMC: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function handleBMIResult(imc) {
  const statused = Object.keys(IMC_MAX_AND_MIN); // ['Underweight', 'Normal Weight', 'Overweight'...]

  const resultFind = statused.find((status) => {
    const { maxIMC, minIMC } = IMC_MAX_AND_MIN[status]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return imc >= minIMC && imc <= maxIMC;
  });

  return resultFind;
}

function main() {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');
  
  const imc = calculatingTheIMC(weight, height);

  const imcResult = handleBMIResult(imc);

  console.log(`IMC: ${imc.toFixed(2)}`);

  console.log(`Situation: ${imcResult}`);
}

main();