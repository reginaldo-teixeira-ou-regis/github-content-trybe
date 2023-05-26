let info = {
  character: 'Margarida',
  origin: 'Pato Donald',
  note: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (!characterInfo || characterInfo.character === undefined) {
    throw new Error('objeto inválido');
  }
  return ('Boas vindas, '+ characterInfo.character);
};

console.log(printMessage(info));
console.log(printMessage('Margarida'));

module.exports = { info, printMessage };