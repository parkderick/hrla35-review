import React from 'react';
import axios from 'axios';

class Poke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      name: ''
    }
    this.updatePokemon = this.updatePokemon.bind(this);
    this.deletePokemon = this.deletePokemon.bind(this);
  }
  
  updatePokemon(name) {
    axios.put(`/pokemons/${this.props.pokemon.id}`, {
        name,
    })
    .then(() => console.log('Success updating pokemon name'))
    .catch(() => console.log('Error updating pokemon name'))
  }

  deletePokemon() {
    axios.delete(`/pokemons/${this.props.pokemon.id}`)
    .then(() => this.props.retrieveData())
    .then(() => console.log('Success deleting pokemon'))
    .catch(() => console.log('Error deleting pokemon'))
  }

  render() {
    return (
      <div>
        <h3 onClick={() => this.setState({toggle: true}, () => console.log(this.state.toggle))}>{this.props.pokemon.name}</h3>
        <img src={this.props.pokemon.img}/>
        <button onClick={this.deletePokemon}>Delete Me</button>
        {this.state.toggle ? (
          <form onSubmit={() => this.updatePokemon(this.state.name)}>
            <input placeholder="Enter New Name" onChange={(e) => this.setState({name: e.target.value})}/>
          </form>
        ) : (
          null
        )
        }
      </div>
    )
  }
}

export default Poke;