import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <section>
        <h1>Pokedex</h1>
        <Pokemon poke={pokemons}/>
      </section>
    )
  }
}

export default Pokedex;
