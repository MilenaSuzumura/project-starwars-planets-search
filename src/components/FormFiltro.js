import React from 'react';

function FormFiltro() {
  return (
    <form>
      <select name="filtroTipo">
        <option value="population">population</option>
        <option value="orbital_period" selected>orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select name="ordem">
        <option value="menor">menor que</option>
        <option value="maior">maior que</option>
        <option value="igual">igual a</option>
      </select>
      <input type="number" />
      <button type="button">Filtrar</button>
    </form>
  );
}

export default FormFiltro;
