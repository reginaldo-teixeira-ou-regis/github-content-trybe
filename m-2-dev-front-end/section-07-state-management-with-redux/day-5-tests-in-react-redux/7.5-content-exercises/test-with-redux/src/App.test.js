import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import counterReducer from './redux/reducers/counterReducer';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});


describe('Testa o clique dos botões', () => {
  test('Com o valor padrão do reducer, os botões devem incrementar os valores corretamente', () => {
    renderWithRedux(<App />);

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);

    expect(screen.getByRole('heading', { name: /0/i, level: 2 })).toBeDefined();

    userEvent.click(buttons[0]);
    expect(screen.getByRole('heading', { name: /1/i, level: 2 })).toBeDefined();

    userEvent.click(buttons[1]);
    expect(screen.getByRole('heading', { name: /6/i, level: 2 })).toBeDefined();
  });

  test('Iniciando o estado global com um valor personalizado, os botões devem incrementar os valores corretamente', () => {
    const initialState = {
      counterReducer: {
        count: 5,
      }
    }
    renderWithRedux(<App />, { initialState });

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);

    expect(screen.getByText('5')).toBeDefined();

    userEvent.click(buttons[0]);
    expect(screen.getByText('6')).toBeDefined();

    userEvent.click(buttons[1]);
    expect(screen.getByText('11')).toBeDefined();
  })
})
