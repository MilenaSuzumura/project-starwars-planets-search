const filter = (planetsAPI) => {
  const semResidents = planetsAPI.reduce((acc, planets) => {
    const planet = {
      name: planets.name,
      climate: planets.climate,
      created: planets.created,
      diameter: planets.diameter,
      edited: planets.edited,
      films: planets.films,
      gravity: planets.gravity,
      orbital_period: planets.orbital_period,
      population: planets.population,
      rotation_period: planets.rotation_period,
      surface_water: planets.surface_water,
      terrain: planets.terrain,
      url: planets.url,
    };
    acc.push(planet);
    return acc;
  }, []);
  return semResidents;
};

export default async function fetchPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const promise = await fetch(url);
  const api = await promise.json();
  const result = await filter(api.results);
  return result;
}
