"use strict";
// EXERCICIO 4
// Crie um script para converter unidades de medida de capacidade:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Esse script deverá se chamar capacity.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Tabela de conversão:
// Nome       	Símbolo	   Valor
// Quilolitro	     kl	     1000l
// Hectolitro	     hl	     100l
// Decalitro	     dal	   10l
// Litro	         l	     1l
// Decilitro	     dl	     0,1l
// Centilitro	     cl	     0,01l
// Mililitro	     ml	     0,001l
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convertCapacity(value, fromUnit, toUnit) {
    const fromIndex = unitsCapacity.indexOf(fromUnit);
    const toIndex = unitsCapacity.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
console.log(convertCapacity(20, 'l', 'ml'));
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
const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(value, fromUnit, toUnit) {
    // pegamos o index da unidade base no array
    const fromIndex = units.indexOf(fromUnit);
    // pegamos o index da unidade para a conversão
    const toIndex = units.indexOf(toUnit);
    // calculamos o expoente a partir da diferença dos index
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
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
