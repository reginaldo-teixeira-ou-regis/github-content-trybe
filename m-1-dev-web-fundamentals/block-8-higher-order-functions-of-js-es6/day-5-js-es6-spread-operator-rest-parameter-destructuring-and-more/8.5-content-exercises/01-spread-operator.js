/* Vamos fazer uma salada de frutas com itens adicionais que você desejar.

Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread. */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'morango', 'laranja', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'iogurte'];

const fruitSalad = (fruit, additional) => dessert = ['abacate', ...fruit, 'melancia', ...additional, 'leite', 'creme de leite'];

console.log(fruitSalad(specialFruit, additionalItens));
console.log('====================================================');

const calculateImc = (weight, height) => (weight / (height * height)).toFixed(2);

function ImcAbove20Years(weight, height) {
    if(calculateImc(weight, height) <= 18.5) {
        return 'Abaixo do peso';
    } else if (calculateImc(weight, height) <= 24.9) {
        return 'Peso normal';
    } else if (calculateImc(weight, height) <= 29.9) {
        return 'Pré-obesidade';
    } else if (calculateImc(weight, height) <= 34.9) {
        return 'Obesidade Grau 1';
    } else if (calculateImc(weight, height) <= 39.9) {
        return 'Obesidade Grau 2';
    } else {
        return 'Obesidade Grau 3'
    }
}

const patientData01 = {
    nome1: 'Rogerio de Oliveira',
    idade1: 36,
    altura1: 1.75,
    peso1: 85,
    imc1: 0,
    resultadoImc1: '',
};

patientData01.imc1 = calculateImc(patientData01.peso1, patientData01.altura1);
patientData01.resultadoImc1 = ImcAbove20Years(patientData01.peso1, patientData01.altura1);

const patientData03 = {
    nome3: 'Bob Nelson',
    idade3: 57,
    altura3: 1.73,
    peso3: 110,
    imc3: 0,
    resultadoImc3: ImcAbove20Years(),
};

patientData03.imc3 = calculateImc(patientData03.peso3, patientData03.altura3);
patientData03.resultadoImc3 = ImcAbove20Years(patientData03.peso3, patientData03.altura3);

const patientDataUpdate = (patient1, patient2) => ({
    ...patientData01,
    patientData02: {
        nome2: 'Ana Julia',
        idade2: 29,
        altura2: 1.68,
        peso2: 98,
        imc2: 0,
        resultadoImc2: ImcAbove20Years(),
    },
    ...patientData03,
});

const {patientData02, patientData02: {peso2, altura2}} = patientDataUpdate();
patientData02.imc2 = calculateImc(peso2, altura2);
patientData02.resultadoImc2 = ImcAbove20Years(peso2, altura2);

console.log(patientData01, patientData02, patientData03);