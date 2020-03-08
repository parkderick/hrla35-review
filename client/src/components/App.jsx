import React from 'react';
import axios from 'axios';
import Poke from './Poke';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    axios.get('/pokemons')
    .then(({data}) => {
      console.log(data);
      this.setState({pokemons: data})
    })
    .catch(() => console.log('Failed to retrieve pokemons'))
  }

  handleChange(e) {
    if (e.target.value === 'none') {
      axios.get('/pokemons')
      .then(({data}) => this.setState({pokemons: data}))
      .catch(() => console.log('Failed to retrieve pokemons'))
    } else {
      axios.get(`/pokemons/${e.target.value}`)
      .then(({data}) => this.setState({pokemons: data}))
      .catch(() => console.log('Failed to retrieve pokemons'))
    }
  }

  

  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button>Show All</button>
        <select onChange={e => this.handleChange(e)}>
          <option value="none">Sort by Type</option>
          <option value="Grass">Grass</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Normal">Normal</option>
          <option value="Poison">Poison</option>
          <option value="Electric">Electric</option>
          <option value="Ground">Ground</option>
          <option value="Fighting">Fighting</option>
          <option value="Psychic">Psychic</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dragon">Dragon</option>
        </select>
        <button>INSERT</button>
      {this.state.pokemons.map((pokemon, index) => (
        <Poke key={index} name={pokemon.name} img={pokemon.img}/>
      ))}
      </div>
    )
  }
}

export default App;