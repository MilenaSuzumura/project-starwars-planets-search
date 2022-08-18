import React, { useState } from 'react';
import './App.css';
import Table from './components/ Table';
import FormFiltro from './components/FormFiltro';
import FormOrdenar from './components/FormOrdenar';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  const [filterByName, setfilterByName] = useState({ name: '' });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  function handleChange({ target }) {
    const { value } = target;
    setfilterByName({ name: value });
  }

  const { name } = filterByName;
  return (
    <PlanetsProvider>
      <h1>Starwars Planets Search</h1>
      <input
        type="text"
        data-testid="name-filter"
        name="name"
        value={ name }
        onChange={ handleChange }
      />
      <FormFiltro
        filterByNumericValues={ filterByNumericValues }
        setfilterByNumericValues={ setfilterByNumericValues }
      />
      <FormOrdenar />
      <Table
        filterByName={ filterByName }
        filterByNumericValues={ filterByNumericValues }
      />
    </PlanetsProvider>
  );
}

export default App;
