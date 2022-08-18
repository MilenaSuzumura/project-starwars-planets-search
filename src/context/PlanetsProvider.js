import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../api/fetchPlanets';

class PlanetsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: [],
    };
  }

  componentDidMount = async () => {
    const planets = await fetchPlanets();
    this.setState({
      planets,
    });
  }

  render() {
    const { Provider } = PlanetsContext;
    const { children } = this.props;
    const { planets } = this.state;
    return (
      <Provider value={ planets }>
        {children}
      </Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
