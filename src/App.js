import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CharacterContainer from './components/CharacterContainer'

class App extends Component {

  state = {
    characters: []
  }

  componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character/?page=10")
    .then(response => response.json())
    .then(({results}) => this.setState({characters: results}) )
  }
  render(){
    return (
      <div className="App">
        <CharacterContainer characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
