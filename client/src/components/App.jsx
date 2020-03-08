import React from 'react';
import axios from 'axios';
import Poke from './Poke';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      newPokemon: ''
    }
    this.insertPokemon = this.insertPokemon.bind(this);
    this.searchType = this.searchType.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
  }
  componentDidMount() {
    this.retrieveData()
  }

  retrieveData() {
    axios.get('/pokemons')
    .then(({data}) => {
      console.log(data);
      this.setState({pokemons: data})
    })
    .then(() => console.log('Success retrieving pokemon'))
    .catch(() => console.log('Failed to retrieve pokemons'))
  }

  searchType(e) {
    if (e.target.value === 'none') {
      axios.get('/pokemons')
      .then(({data}) => this.setState({pokemons: data}))
      .then(() => console.log('Success retrieving pokemon for type'))
      .catch(() => console.log('Failed to retrieve pokemons'))
    } else {
      axios.get(`/pokemons/${e.target.value}`)
      .then(({data}) => this.setState({pokemons: data}))
      .catch(() => console.log('Failed to retrieve pokemons'))
    }
  }

  insertPokemon() {
    axios.post('/pokemons', {
      name: this.state.newPokemon
    })
      .then(() => this.retrieveData())
      .then(() => console.log('Success posting pokemon'))
      .catch(() => console.log('Failed posting pokemon'))
  }

  render() {
    return (
      <div>
        <h1>Pokemon!</h1>
        <button>Show All</button>
        <select onChange={e => this.searchType(e)}>
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
        <input onChange={e => this.setState({newPokemon: e.target.value})} placholder="Enter New Pokemon Here"/>
        <button onClick={this.insertPokemon}>INSERT</button>
      {this.state.pokemons.map((pokemon, index) => (
        <Poke key={index} pokemon={pokemon} retrieveData={this.retrieveData}/>
      ))}
      </div>
    )
  }
}

export default App;