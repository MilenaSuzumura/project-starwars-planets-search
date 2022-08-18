import React from 'react';
import './App.css';
import Table from './components/ Table';
import FormFiltro from './components/FormFiltro';
import FormOrdenar from './components/FormOrdenar';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1>Starwars Planets Search</h1>
      <input type="text" />
      <FormFiltro />
      <FormOrdenar />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
