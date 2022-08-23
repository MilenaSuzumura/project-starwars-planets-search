import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa o App', () => {
  test('Testa se o título e o input de pesquisa aparecem na tela', () => {
    render(<App />);
  })
})
