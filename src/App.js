import React, { useState } from 'react';
import './App.css';
import Table from './components/ Table';
import FormFiltro from './components/FormFiltro';
import FormOrdenar from './components/FormOrdenar';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  const [filterByName, setfilterByName] = useState({ name: '' });
  const { name } = filterByName;

  function handleChange({ target }) {
    const { value } = target;
    setfilterByName({ name: value });
  }

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
      <FormFiltro />
      <FormOrdenar />
      <Table filterByName={ filterByName } />
    </PlanetsProvider>
  );
}

export default App;
