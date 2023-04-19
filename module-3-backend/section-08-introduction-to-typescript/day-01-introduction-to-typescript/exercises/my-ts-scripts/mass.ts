// EXERCICIO 3
// Crie um script para convertMasser unidades de medida de massa:

// Esse script deverá se chamar mass.ts;
// Ele deverá possuir uma função chamada convertMass que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string

// Tabela de conversão:

// Nome	      Símbolo	  Valor
// Quilograma	   kg	    1000g
// Hectograma	   hg	    100g
// Decagrama	   dag	  10g
// Grama	       g	    1g
// Decigrama	   dg	    0,1g
// Centigrama	   cg	    0,01g
// Miligrama	   mg	    0,001g

const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsMass.indexOf(fromUnit);
  const toIndex = unitsMass.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

console.log(convertMass(85, 'kg', 'g'));

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
import readline from 'readline-sync'; // importamos o pacote readline-sync
const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert(value: number, fromUnit: string, toUnit: string): number {
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
  const value = readline.questionFloat(
    'Digite o valor a ser convertido: \n'
  );

  // pedimos que a pessoa usuária escolha a unidade base
  const fromUnitChoiceIndex = readline.keyInSelect(
    units, 'Escolha um número para a unidade base:'
  );

  // pedimos que a pessoa usuária escolha a unidade para conversão
  const toUnitChoiceIndex = readline.keyInSelect(
    units, 'Escolha um número para a conversão:'
  );

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