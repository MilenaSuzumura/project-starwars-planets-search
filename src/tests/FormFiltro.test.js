import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa o Table', () => {
  test('Testa se os filtros aparecem na tela', () => {
    render(<App />);
    const optionPopulation = screen.getAllByRole('option', { value: /population/i });
    const optionMaiorQue = screen.getByRole('option', { name: /maior que/i });
    const optionValue = screen.getByRole('spinbutton', { name: "" });
    const optionOrbital = screen.getAllByRole('option', { value: /orbital_period/i });
    userEvent.click(optionPopulation[0]);
    userEvent.click(optionOrbital[0]);
    userEvent.click(optionMaiorQue);
    userEvent.type(optionValue, 2000);
    const buttonFiltro = screen.getByTestId('button-filter');
    userEvent.click(buttonFiltro);
    userEvent.click(optionOrbital[0]);
    userEvent.click(optionMaiorQue);
    userEvent.type(optionValue, 5000);
    userEvent.type(optionValue, 2000);
    userEvent.click(buttonFiltro);
    const removeFiltro = screen.getAllByRole('button', { name: /x/i });
    expect(removeFiltro.length).toBe(2);
  })
})
