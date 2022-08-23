import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Table({ filterByName, filterByNumericValues, filterOrdem }) {
  const planets = useContext(PlanetsContext);

  function filtroUnico(planet, comparison, column, value) {
    if (comparison === 'menor que') {
      return parseFloat(planet[column]) < parseFloat(value);
    } if (comparison === 'maior que') {
      return parseFloat(planet[column]) > parseFloat(value);
    } if (comparison === 'igual a') {
      return planet[column] === value;
    }
  }

  function variosFiltros(filterValue, planet) {
    return filterValue.reduce((acc, filtro) => {
      const { comparison, column, value } = filtro;
      let valor = false;
      if (comparison === 'menor que') {
        valor = parseFloat(planet[column]) < parseFloat(value);
      } if (comparison === 'maior que') {
        valor = parseFloat(planet[column]) > parseFloat(value);
      } if (comparison === 'igual a') {
        valor = planet[column] === value;
      }
      if (valor === true) {
        acc.push(planet);
      }
      return acc;
    }, []);
  }

  return (
    <table>
      <tr>
        {
          planets.length !== 0
          && Object.keys(planets[0]).map((key) => <th key={ key }>{key}</th>)
        }
      </tr>
      {
        planets.length !== undefined
        && planets.filter(
          (planet) => planet.name.toLowerCase()
            .includes(filterByName.name.toLowerCase()),
        ).filter((planet) => {
          if (filterByNumericValues.length === 1) {
            const { comparison, column, value } = filterByNumericValues[0];
            return filtroUnico(planet, comparison, column, value);
          }
          if (filterByNumericValues.length > 1) {
            const result = variosFiltros(filterByNumericValues, planet);
            if (result.length === filterByNumericValues.length) {
              return planet;
            }
            return '';
          }
          return planet;
        }).reduce((acc, planet) => {
          acc.push(planet);
          if (Object.values(filterOrdem).length !== 0) {
            const { sort, column } = filterOrdem.order;
            if (sort === 'ASC') {
              acc.sort((a, b) => a[column] - b[column]);
            }
            acc.sort((a, b) => b[column] - a[column]);
          }
          return acc;
        }, [])
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.films}</td>
              <td>{planet.gravity}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.population}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
              <td>{planet.url}</td>
            </tr>
          ))
      }
    </table>
  );
}

Table.propTypes = {
  filterByName: PropTypes.objectOf.isRequired,
  filterByNumericValues: PropTypes.objectOf.isRequired,
  filterOrdem: PropTypes.objectOf.isRequired,
};

export default Table;
