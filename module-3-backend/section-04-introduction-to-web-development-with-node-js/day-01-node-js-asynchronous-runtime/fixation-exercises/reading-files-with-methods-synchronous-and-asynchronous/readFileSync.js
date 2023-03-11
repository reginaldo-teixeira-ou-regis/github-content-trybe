const fs = require('fs');

const fileName = 'myFile.txt';

try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}