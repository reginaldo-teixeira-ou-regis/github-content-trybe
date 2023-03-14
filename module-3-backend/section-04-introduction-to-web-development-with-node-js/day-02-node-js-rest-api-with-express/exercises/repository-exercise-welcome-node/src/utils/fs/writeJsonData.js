const fs = require('fs').promises;

const writeJsonData = async (path, json) => {
    try {
      const JSONStringify = JSON.stringify(json);
      await fs.writeFile(path, JSONStringify);
      console.log('Arquivo escrito com sucesso!');
    } catch (err) {
      console.error(`Erro ao escrever o arquivo: ${err.message}`);
    }
  };

module.exports = writeJsonData;