import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const poke = this.props.poke;

    return poke.map((p) => {
      return (
        <div>
          <p>{p.name}</p>
          <p>{p.type}</p>
          <p>averageWeight: {p.averageWeight.value} {p.averageWeight.measurementUnit}</p>
          <img src={p.image} alt="" />
        </div>
      )
    })
  }
}

export default Pokemon;