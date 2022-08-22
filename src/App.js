import React, { useState } from 'react';
import './App.css';
import Table from './components/ Table';
import FormFiltro from './components/FormFiltro';
import FormOrdenar from './components/FormOrdenar';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  const [filterByName, setfilterByName] = useState({ name: '' });
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  function removeUmaFiltragem(column) {
    const filtroNovo = filterByNumericValues.reduce((acc, filtro) => {
      if (filtro.column === column) {
        return acc;
      }
      acc.push(filtro);
      return acc;
    }, []);
    setfilterByNumericValues(filtroNovo);
  }

  function removeTodasFiltragens() {
    setfilterByNumericValues([]);
  }

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
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeTodasFiltragens }
      >
        Remover todas filtragens
      </button>
      {
        filterByNumericValues.length !== 0
        && filterByNumericValues.map((filtro, index) => (
          <div key={ index } data-testid="filter">
            <p>{`${filtro.column} ${filtro.comparison} ${filtro.value}`}</p>
            <button
              type="button"
              onClick={ () => {
                removeUmaFiltragem(filtro.column);
              } }
            >
              X
            </button>
          </div>
        ))
      }
      <Table
        filterByName={ filterByName }
        filterByNumericValues={ filterByNumericValues }
      />
    </PlanetsProvider>
  );
}

export default App;
