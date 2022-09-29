/* Vamos fazer uma salada de frutas com itens adicionais que você desejar.

Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread. */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'morango', 'laranja', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'iogurte'];

const fruitSalad = (fruit, additional) => dessert = ['abacate', ...fruit, 'melancia', ...additional, 'leite', 'creme de leite'];

console.log(fruitSalad(specialFruit, additionalItens));
console.log('====================================================');

const calculateImc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

function ImcAbove20Years(peso, altura) {
    if(calculateImc(peso, altura) <= 18.5) {
        return 'Abaixo do peso';
    } else if (calculateImc(peso, altura) <= 24.9) {
        return 'Peso normal';
    } else if (calculateImc(peso, altura) <= 29.9) {
        return 'Pré-obesidade';
    } else if (calculateImc(peso, altura) <= 34.9) {
        return 'Obesidade Grau 1';
    } else if (calculateImc(peso, altura) <= 39.9) {
        return 'Obesidade Grau 2';
    } else if (calculateImc(peso, altura) > 40) {
        return 'Obesidade Grau 3';
    } else {
        return null;
    }
}

const patientData01 = {
    nome: 'Rogerio de Oliveira',
    idade: 36,
    altura1: 1.75,
    peso1: 85,
    imc: 0,
    resultadoImc: ImcAbove20Years(),
};

const { peso1, altura1 } = patientData01
patientData01.imc = calculateImc(peso1, altura1);
patientData01.resultadoImc = ImcAbove20Years(peso1, altura1);

const patientData03 = {
    nome: 'Bob Nelson',
    idade: 57,
    altura3: 1.73,
    peso3: 110,
    imc: 0,
    resultadoImc: ImcAbove20Years(),
};

const { peso3, altura3 } = patientData03
patientData03.imc = calculateImc(peso3, altura3);
patientData03.resultadoImc = ImcAbove20Years(peso3, altura3);

const patientData04 = {
    nome: 'Mel Lisboa',
    idade: 14,
    altura4: 1.43,
    peso4: 50,
    imc: 0,
    resultadoImc: ImcAbove20Years(),
};

const { peso4, altura4 } = patientData04
patientData04.imc = calculateImc(peso4, altura4);
patientData04.resultadoImc = ImcAbove20Years(peso4, altura4);

const patientData05 = {
    nome: 'Julio Manson',
    idade: 20,
    altura5: 1.70,
    peso5: 53,
    imc: 0,
    resultadoImc: ImcAbove20Years(),
};

const { peso5, altura5 } = patientData05
patientData05.imc = calculateImc(peso5, altura5);
patientData05.resultadoImc = ImcAbove20Years(peso5, altura5);

const patientData06 = {
    nome: 'Jorge Dickson',
    idade: 20,
    altura6: 1.80,
    peso6: 150,
    imc: 0,
    resultadoImc: ImcAbove20Years(),
};

const { peso6, altura6 } = patientData06
patientData06.imc = calculateImc(peso6, altura6);
patientData06.resultadoImc = ImcAbove20Years(peso6, altura6);

const patientDataUpdate = () => ({
    ...patientData01,
    patientData02: {
        nome: 'Ana Julia',
        idade: 29,
        altura: 1.68,
        peso: 98,
        imc: 0,
        resultadoImc: ImcAbove20Years(),
    },
    ...patientData03,
});

const {patientData02, patientData02: {peso, altura}} = patientDataUpdate();
patientData02.imc = calculateImc(peso, altura);
patientData02.resultadoImc = ImcAbove20Years(peso, altura);

console.log(patientData01, patientData02, patientData03, patientData04, patientData05, patientData06);