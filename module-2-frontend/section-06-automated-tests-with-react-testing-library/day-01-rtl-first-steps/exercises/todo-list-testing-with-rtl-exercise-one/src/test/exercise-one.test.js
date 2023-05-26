import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const valueTask = 'Um texto qualquer';
// colocamos a string 'Um texto qualquer' em uma variavel porque usaremos ela varias vezes durante o teste.

describe('Testing the application, testing the button and its functionality', () => {
  it('Checks if the button is on the screen with the text "Adicionar"', () => {
    render(<App />);
    const bntAdd = screen.getByText('Adicionar');
    // getByText retorna um erro caso não encontre o texto especificado no parametro.
    expect(bntAdd).toBeInTheDocument();
    expect(bntAdd.type).toBe('button');
    // type fora do userEvent é o tipo do elemento(ex: tipo button, tipo input e etc).
  });
  it(
    'By clicking on the "Adicionar" button the task should be added on the screen',
    () => {
      render(<App />);
      const inputTask = screen.getByLabelText('Tarefa:');
      // getByLabelText procura uma label com o texto especificado colocado de parametro.
      const btnAdd = screen.getByText('Adicionar');

      userEvent.type(inputTask, valueTask);
      // o type do userEvent é do verbo escrever.
      // o primeiro parametro é onde escrever e o segundo é o valor(o que esta/estará ecrito).
      expect(screen.queryByText(valueTask)).not.toBeInTheDocument();
      // queryByText retorna null caso não encontre o texto especificado no parametro.

      userEvent.click(btnAdd);
      expect(screen.queryByText(valueTask)).toBeInTheDocument();
      // depois de clicar no botão queremos garantir que o texto apareça na tela.
      expect(inputTask).toHaveValue('');
      // depois de clicar no botão queremos tbm garantir que o input tenha um valor vazio.
    },
  );
});
