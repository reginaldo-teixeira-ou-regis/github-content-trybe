import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Test of input field', () => {
  it('Testing the addition of various items to the application', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(btnAdd);
      expect(screen.getByText(task)).toBeInTheDocument();
    });

    /* listTodo.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    }); */
  });
});

describe('Test of Item component', () => {
  it('When receiving a string as a prop it needs to appear on the screen', () => {
    render(<Item content="content igual ao getByText" />);

    expect(screen.getByText('content igual ao getByText')).toBeInTheDocument();
  });
});
