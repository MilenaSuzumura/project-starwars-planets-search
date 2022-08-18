import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  // const [infoPlanets, setInfoPlanets] = useState(fetchPlanets());
  const planets = useContext(PlanetsContext);
  console.log(planets[0]);
  return (
    <table>
      <tr>
        { Object.keys(planets[0]).map((key) => <td key={ key }>{key}</td>) }
      </tr>
      {
        planets.map((planet) => (
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

export default Table;
