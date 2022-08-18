import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormFiltro({ filterByNumericValues, setfilterByNumericValues }) {
  const [filterValues, setfilterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  function handleClick() {
    setfilterByNumericValues([...filterByNumericValues, { ...filterValues }]);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setfilterValues({ ...filterValues, [name]: value });
  }

  const { column, comparison, value } = filterValues;
  return (
    <form>
      <select
        name="column"
        data-testid="column-filter"
        value={ column }
        onChange={ handleChange }
      >
        column
        <option value="population">population</option>
        <option value="orbital_period" selected>orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ handleChange }
      >
        comparison
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        value={ value }
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Filtrar
      </button>
    </form>
  );
}

FormFiltro.propTypes = {
  filterByNumericValues: PropTypes.arrayOf.isRequired,
  setfilterByNumericValues: PropTypes.func.isRequired,
};

export default FormFiltro;
