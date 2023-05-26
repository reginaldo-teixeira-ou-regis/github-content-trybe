import { Component } from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';
import Pokemon from './Pokemon';
import '../styles/PokemonDetails.css';

class PokemonDetails extends Component {
  render() {
    const { pokemons, match: { params: { id } }, hideLink } = this.props;

    const pokemonFound = pokemons.find((pok) => pok.id === Number(id));

    return (
      <section className="pokemon-details">
        <h1>
          {`${pokemonFound.name} details`}
        </h1>
        <Pokemon hideLink={ hideLink } pokemon={ pokemonFound } />
        <h2>Sumário:</h2>
        <p className="summaryP">{pokemonFound.summary}</p>
        <h2>Hábitat:</h2>
        <section className="pokemon-habitat">
          { pokemonFound.foundAt.map((location) => (
            <section key={ location.location }>
              <span>{ location.location }</span>
              <img src={ location.map } alt="mapa do pokemon" />
            </section>
          )) }
        </section>
      </section>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  hideLink: PropTypes.bool,
};

PokemonDetails.defaultProps = {
  hideLink: false,
};

export default PokemonDetails;
