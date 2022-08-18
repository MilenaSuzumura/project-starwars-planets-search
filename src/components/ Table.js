import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Table({ filterByName }) {
  const planets = useContext(PlanetsContext);
  return (
    <table>
      <tr>
        {
          planets.length !== 0
          && Object.keys(planets[0]).map((key) => <th key={ key }>{key}</th>)
        }
      </tr>
      {
        planets.length !== 0
        && planets.filter(
          (planet) => planet.name.toLowerCase()
            .includes(filterByName.name.toLowerCase()),
        )
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
  filterByName: PropTypes.func.isRequired,
};

export default Table;
