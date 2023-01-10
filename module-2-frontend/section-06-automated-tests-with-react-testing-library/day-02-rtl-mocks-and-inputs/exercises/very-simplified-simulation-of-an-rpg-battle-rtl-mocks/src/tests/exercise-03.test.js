import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

/*
 fazer o mock do módulo `rollMultipleDice`
 usando jest.mock
*/
jest.mock('../service/rollMultipleDice');

/*
  Vamos criar um objeto `enemy` com pontos de defesa
  Nesse caso, vamos, arbitrariamente atribuir 30 pontos:
*/
const enemy = {
  name: 'Chapolin Colorado',
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  /*
    Aqui, vamos mockar o retorno da função `rollMultipleDice` para que ela
    traga o resultado de 40
  */
  rollMultipleDice.mockReturnValueOnce(40);

  /*
    A função `attackEnemy` retorna um objeto...
  */
  const resultObject = attackEnemy(2, 20, enemy);
  /*
    ... cuja chave success, nesse caso, deverá ser true
  */
  expect(resultObject.success).toBe(true);
  /*
    E a função rollMultipleDice deve ter sido chamada 1, e apenas 1 vez.
  */
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa uma derrota na função `attackEnemy`', () => {
  /*
    Aqui, vamos mockar o retorno da função `rollMultipleDice` para que ela
    traga o resultado de 20
  */
  rollMultipleDice.mockReturnValueOnce(20);

  const resultObject = attackEnemy(2, 20, enemy);
  /*
    Como nosso resultado dos dados (20) é menor que a defesa do Chapolin (30)
    isso significa que o resultado deverá ser false (derrota).
  */
  expect(resultObject.success).toBe(false);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});

it('testa um empate nos dados', () => {
  /*
    Aqui, vamos mockar o retorno da função `rollMultipleDice` para que ela
    traga o resultado de 30, exatamente igual aos pontos de defesa do Chapolin
  */
  rollMultipleDice.mockReturnValueOnce(30);

  const resultObject = attackEnemy(2, 20, enemy);
  /*
    Como nosso resultado dos dados é igual à defesa do Chapolin
    isso significa que o resultado deverá ser false (derrota).
  */
  expect(resultObject.success).toBe(false);
  expect(rollMultipleDice).toHaveBeenCalledTimes(1);
});