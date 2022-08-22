import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FormFiltro({ filterByNumericValues, setfilterByNumericValues }) {
  const [filterValues, setfilterValues] = useState({
    column: '',
    comparison: 'maior que',
    value: 0,
  });
  const columns = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const columsResult = columns.map((columnValue) => {
    const columnExist = filterByNumericValues.filter((values) => values.column
        === columnValue);
    if (columnExist.length === 0) {
      return (
        <option key={ columnValue } value={ columnValue }>
          {columnValue}
        </option>
      );
    }
    return '';
  });

  function validaValue() {
    setfilterValues({ ...filterValues, column: columsResult[1].props.value });
  }

  function handleClick() {
    setfilterByNumericValues([...filterByNumericValues, { ...filterValues }]);
    validaValue();
  }

  useEffect(() => {
    setfilterValues({ ...filterValues, column: columsResult[0].props.value });
  }, []);

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
        {
          columsResult.length === 0
            ? <option value=""> </option>
            : columsResult
        }
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
