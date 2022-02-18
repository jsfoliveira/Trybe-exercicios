import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    // const { pokemon: { type, averageWeight, image } } = this.props;
    // console.log(this.props.pokemon.name)
    return (
      <div className="pokemon">
        <div>
          <p>{ this.props.pokemon.name }</p>
          <p>{ this.props.pokemon.type }</p>
          <p>
            {`Average weight: ${this.props.pokemon.averageWeight.value} ${this.props.pokemon.averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ this.props.pokemon.image } alt={ `${this.props.pokemon.name} sprite` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };


export default Pokemon;