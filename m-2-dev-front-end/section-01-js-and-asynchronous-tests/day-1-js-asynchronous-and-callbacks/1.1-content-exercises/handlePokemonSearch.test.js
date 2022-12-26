/* - A fim de evitar que futuros treinadores de Pokémon sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui esses Pokémon. Para isso, você deve criar um novo arquivo .test.js ou .spec.js e copiar o código abaixo. Lembre-se de completar os testes para a função getPokemonDetails de acordo com as especificações.

OBS: Lembre-se de exportar o arquivo do exercício 08 para que possamos utilizá-lo em nossos testes. */

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./handlePokemonSearch');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :('); // 1. Criamos o erro esperado

    getPokemonDetails('Pikachu', (error, _message) => { // 2, 3. Chamamos a função passando os parâmetros
      try { // 4. Adiciona um `try/catch`
        expect(error).toEqual(expectedError); // 5. Criamos o expect
        done(); // 6. Chamamos a função `done()`
      } catch (error) {
        done(error); // 7. Chamamos a função `done()` com o parâmetro `error`
      }
    });
  });

  it('retorna um pokémon que existe no banco de dados', (done) => { // 8. Os mesmos processos do primeira `it` com seus ajustes
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});