import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CharacterContainer from './components/CharacterContainer'

class App extends Component {

  state = {
    characters: []
  }

  deleteCharacter = (characterToDelete) => {
    // Optimistic
    const characters = this.state.characters.filter(character => {
      return character.id !== characterToDelete.id
    })
    this.setState({
      characters
    })

    // Persistence
    fetch("URL/:id", {
      method: "DELETE"
    })
  }

  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character/?page=10")
    .then(response => response.json())
    .then(({results}) => this.setState({characters: results}) )
  }
  render(){
    return (
      <div className="App">
        <CharacterContainer deleteCharacter={this.deleteCharacter} characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
