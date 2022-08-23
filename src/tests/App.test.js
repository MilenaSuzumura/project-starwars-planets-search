import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa o App', () => {
  test('Testa se o título e o input de pesquisa aparecem na tela', () => {
    render(<App />);
    const tittle = screen.getByText(/Starwars Planets Search/i);
    expect(tittle).toBeInTheDocument();
    const filter = screen.getByTestId('name-filter');
    expect(filter).toBeInTheDocument();
  });

  test('Testa se dá para digitar no input de pesquisa', () => {
    render(<App />);
    const filter = screen.getByTestId('name-filter');
    userEvent.type(filter, 'Tatooine');
    const row = screen.getByRole('row', { name: '' });
    expect(row).toBeInTheDocument();
  });
  
  test('Testa se o botão de remover filtros está na tela', () => {
    render(<App />);
    const buttonRemove = screen.getByTestId('button-remove-filters');
    expect(buttonRemove).toBeInTheDocument();
  });

  test('Testa se dá para selecionar os filtros', () => {
    render(<App />);
    const optionPopulation = screen.getAllByRole('option', { value: /population/i });
    const optionOrbital = screen.getAllByRole('option', { value: /orbital_period/i });
    const optionMaiorQue = screen.getByRole('option', { name: /maior que/i });
    const optionValue = screen.getByRole('spinbutton', { name: "" });
    userEvent.click(optionPopulation[0]);
    userEvent.click(optionOrbital[0]);
    userEvent.click(optionMaiorQue);
    userEvent.type(optionValue, 2000);
    const buttonFiltro = screen.getByTestId('button-filter');
    userEvent.click(buttonFiltro);
    const row = screen.getByRole('row', { name: '' });
    expect(row).toBeInTheDocument();
  });

  test('Testa se dá para apagar um filtro', () => {
    render(<App />);
    const optionPopulation = screen.getAllByRole('option', { value: /population/i });
    const optionMaiorQue = screen.getByRole('option', { name: /maior que/i });
    const optionValue = screen.getByRole('spinbutton', { name: "" });
    userEvent.click(optionPopulation[0]);
    userEvent.click(optionMaiorQue);
    userEvent.type(optionValue, 2000);
    const buttonFiltro = screen.getByTestId('button-filter');
    userEvent.click(buttonFiltro);
    const removeFiltro = screen.getByRole('button', { name: /x/i });
    userEvent.click(removeFiltro);
    expect(removeFiltro).not.toBeInTheDocument();
  });

  test('Testa se apaga todos os filtros', () => {
    render(<App />);
    const optionPopulation = screen.getAllByRole('option', { value: /population/i });
    const optionMaiorQue = screen.getByRole('option', { name: /maior que/i });
    const optionValue = screen.getByRole('spinbutton', { name: "" });
    userEvent.click(optionPopulation[0]);
    userEvent.click(optionMaiorQue);
    userEvent.type(optionValue, 2000);
    const buttonFiltro = screen.getByTestId('button-filter');
    userEvent.click(buttonFiltro);
    const optionOrbital = screen.getAllByRole('option', { value: /orbital_period/i });
    userEvent.click(optionOrbital[0]);
    userEvent.click(optionMaiorQue);
    userEvent.type(optionValue, 5000);
    userEvent.click(buttonFiltro);
    const removeFiltro = screen.getAllByRole('button', { name: /x/i });
    const removeFiltroTudo = screen.getByTestId('button-remove-filters');
    userEvent.click(removeFiltroTudo);
    expect(removeFiltro[0]).not.toBeInTheDocument();
  });
})

/* 

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
});

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
});

test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
});

 */