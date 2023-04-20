"use strict";
// EXERCICIO 6
// Crie um script para convertVolumeer unidades de medida de volume:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Esse script deverá se chamar volume.ts;
// Ele deverá possuir uma função chamada convertVolume que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.
// Tabela de conversão:
// Nome	                Símbolo	   Valor
// Quilômetro cúbico	    km³	     10⁹ m³
// Hectômetro cúbico	    hm³	     10⁶ m³
// Decâmetro cúbico	      dam³	   10³ m³
// Metro cúbico         	m³	     1m³
// Decímetro cúbico	      dm³	     10⁻³ m³
// Centímetro cúbico    	cm³	     10⁻⁶ m³
// Milímetro cúbico	      mm³	     10⁻⁹ m³
const unitsVolume = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convertVolume(value, fromUnit, toUnit) {
    const fromIndex = unitsVolume.indexOf(fromUnit);
    const toIndex = unitsVolume.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(1000, exponent);
}
console.log(convertVolume(2000, 'mm³', 'm³'));
// EXERCICIO 7
// Vamos tornar nossos scripts de unidades de medida mais interativos! 
// Vamos adicionar input de quem usa o script.
// Para isso, utilize o pacote readline - sync, documentação.
// Em cada script, crie uma função chamada exec que:
// 1. Capta as entradas da pessoa usuária via terminal;
// 2. Chama a função de conversão passando 
// as entradas da pessoa usuária como parâmetro;
// 3. Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”;
// 4. Não se esqueça de chamar a função exec(); ao final do script.
// lembrete: mudar o array units e a base para o cálculo em cada arquivo!
const readline_sync_1 = __importDefault(require("readline-sync")); // importamos o pacote readline-sync
const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convert(value, fromUnit, toUnit) {
    // pegamos o index da unidade base no array
    const fromIndex = units.indexOf(fromUnit);
    // pegamos o index da unidade para a conversão
    const toIndex = units.indexOf(toUnit);
    // calculamos o expoente a partir da diferença dos index
    const exponent = toIndex - fromIndex;
    return value * Math.pow(1000, exponent);
}
function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a unidade base:');
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a conversão:');
    const toUnitChoice = units[toUnitChoiceIndex];
    const fromUnitChoice = units[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é 
    // impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
