import React from 'react';

function FormOrdenar() {
  return (
    <form>
      <select name="filtroTipo">
        <option value="population">population</option>
        <option value="orbital_period" selected>orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="ordem">
        <input name="ordem" type="radio" value="ascendente" />
        Ascendente
        <input name="ordem" type="radio" value="decrescente" />
        Decrescente
      </label>
      <button type="button">Ordenar</button>
    </form>
  );
}

export default FormOrdenar;
