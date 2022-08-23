import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from '../components/ Table';

describe('Testa o Table', () => {
  test('Testa se dá para apagar um filtro', () => {
    render(<Table />);
    expect(removeFiltro).not.toBeInTheDocument();
  });
})
