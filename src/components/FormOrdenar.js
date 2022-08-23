import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FormOrdenar({ filterOrdem, setfilterOrdem }) {
  const [order, setOrder] = useState({
    column: 'population', sort: '' });

  const columns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  function handleClick() {
    setfilterOrdem({ ...filterOrdem, order });
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setOrder({ ...order, [name]: value });
  }

  return (
    <form>
      <select name="column" onChange={ handleChange }>
        {
          columns.length !== 0 && columns.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          ))
        }
      </select>
      <label htmlFor="sort" onChange={ handleChange }>
        <input name="sort" type="radio" value="ASC" />
        Ascendente
        <input name="sort" type="radio" value="DESC" />
        Decrescente
      </label>
      <button type="button" onClick={ handleClick }>Ordenar</button>
    </form>
  );
}

FormOrdenar.propTypes = {
  filterOrdem: PropTypes.objectOf.isRequired,
  setfilterOrdem: PropTypes.func.isRequired,
};

export default FormOrdenar;
