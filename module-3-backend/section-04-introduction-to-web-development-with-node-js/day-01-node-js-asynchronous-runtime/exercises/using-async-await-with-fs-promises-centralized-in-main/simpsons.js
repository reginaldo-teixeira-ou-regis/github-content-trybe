// Importe o módulo fs/promises
const fs = require('fs').promises;

async function readAll() {
  // realizar a leitura do arquivo dentro da função readAll
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  // Converta o conteúdo do arquivo de JSON para um array utilizando JSON.parse
  const simpsons = JSON.parse(fileContent);

  // Mapeie cada objeto do array para uma string no formato correto
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  // Exiba as strings na tela.
  strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) {
    /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.
    * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,
    * tendo como motivo o que passarmos para o `throw`.
    * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'
    */
    throw new Error('id não encontrado');
  }

  return chosenSimpson;
}

async function removeSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  // Filtre o array para remover as personagens que devem ser removidas
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  // Escreva no arquivo o novo array filtrado
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray, null, 2));
}

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];

  // Crie um array com os IDs da família e filtrar apenas com os membros com esses IDs
  const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));

  // Escreva o novo arquivo no disco
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily, null, 2));
}

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz
async function addNelsonToFamily() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);

  // Adicione uma nova pessoa ao array de simpsonsFamily
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  // Escreva o novo conteúdo no arquivo
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily, null, 2));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie, null, 2));
}

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
async function main() {
  await readAll();

  const simpson = await getSimpsonById(1);
  console.log(simpson);

  await removeSimpsons();

  await createSimpsonsFamily();

  await addNelsonToFamily();

  await replaceNelson();
}

main();