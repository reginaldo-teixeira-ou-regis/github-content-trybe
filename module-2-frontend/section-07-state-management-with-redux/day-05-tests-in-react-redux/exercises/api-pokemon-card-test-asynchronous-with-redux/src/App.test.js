import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import userEvent from '@testing-library/user-event';
import App from './App';
import randomNumber from './utils/randomNumber';

// Fazemos o mock da função randomNumber para controlar seu retorno durante os testes
jest.mock('./utils/randomNumber');

describe('Página principal', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  // Exercício 1
  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    // Primeiro passo: Utilizamos a renderWithRedux para renderizar o componente App e vamos esperar
    // que o loading... saia da tela.
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    // Segundo passo: Esperamos que o fetch tenha sido chamado 1 vez após o carregamento da página
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Terceiro passo: Esperamos que o botão responsável por trazer as
    // informações do próximo Pokémon esteja presente na tela
    const buttonEl = await screen.findByRole('button');
    expect(buttonEl).toBeInTheDocument();
  });

  // Exercício 2
  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    // Primeiro passo: Definimos qual será o id do primeiro Pokémon a ser renderizado
    // na tela e o endpoint que será utilizado para simular a requisição à API
    const firstPokemonId = 656;
    const firstEndpoint = 'https://pokeapi.co/api/v2/pokemon/656/';

    // Segundo passo: Definimos que a função mockada randomNumber
    // deverá retornar o id do primeiro Pokémon
    randomNumber.mockReturnValue(firstPokemonId);

    // Terceiro passo: Utilizamos a renderWithRedux para renderizar o componente App
    // Vamos esperar que o loading tenha saído da tela...
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    // Quarto passo: Esperamos que o fetch tenha sido chamado 1 vez após o carregamento
    // da página com o endpoint definido para o primeiro Pokémon
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndpoint);
  });

  // Exercício 3
  test('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    // Primeiro passo: Definimos qual será o id do primeiro Pokémon a ser renderizado
    // na tela e o endpoint que será utilizado para simular a requisição à API
    const firstPokemonId = 656;
    const firstEndpoint = 'https://pokeapi.co/api/v2/pokemon/656/';

    // Segundo passo: Definimos qual será o id do segundo Pokémon a ser renderizado
    // na tela e o endpoint que será utilizado para simular a requisição à API
    const secondPokemonId = 96;
    const secondEndpoint = 'https://pokeapi.co/api/v2/pokemon/96/';

    // Terceiro passo: Definimos que a função mockada randomNumber
    // deverá retornar por padrão o id do segundo Pokémon
    randomNumber.mockReturnValue(secondPokemonId);

    // Quarto passo: Definimos que, na sua primeira chamada, a função mockada 
    // randomNumber deverá retornar o id do primeiro Pokémon
    randomNumber.mockReturnValueOnce(firstPokemonId);

    // Quinto passo: Utilizamos a renderWithRedux para renderizar o componente App
    // Vamos esperar que o loading tenha saído da tela...
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    // Sexto passo: Esperamos que o fetch tenha sido chamado 1 vez após
    // o carregamento da página com o endpoint do primeiro Pokémon
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndpoint);

    // Sétimo passo: Simulamos o clique no botão com o userEvent
    // Aqui também vamos esperar que o loading tenha saído da tela...
    const buttonEl = await screen.findByRole('button');

    userEvent.click(buttonEl);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    // Oitavo passo: Esperamos que o fetch tenha sido chamado pela
    // segunda vez com o endpoint definido para o segundo Pokémon
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(secondEndpoint);
  });

  // Exercício 4
  test('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    // Primeiro passo: Utilizamos a renderWithRedux para renderizar o componente App
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    // Segundo passo: Selecionamos o elemento que exibe o nome do Pokémon pelo seu testid
    const pokemonName = screen.getByTestId('pokemon-name');

    // Terceiro passo: Selecionamos o elemento que exibe a imagem do Pokémon pelo seu texto alternativo
    const pokemonImage = screen.getByAltText('pokemon');

    // Quarto passo: Esperamos que os elementos que exibem o nome e a imagem estejam na tela
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
  });
});
