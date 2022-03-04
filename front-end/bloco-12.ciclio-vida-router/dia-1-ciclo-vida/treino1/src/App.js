import React, { Component }from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
        };
      }

    componentDidMount() {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results})
      })
    }


render() {
  const { characters } = this.state;
  const loading = <p>Loading...</p>
  const lista = characters.map((element) =>
  <div className="container" key={element.name}>
    <p>{element.name}, {element.id}</p>
    <img src={element.image} alt={element.name} />
  </div>
)
  return (
    <div className="App">
      <h1>
        Ricky and Morty Characters:
      </h1>
      <div className="body">
      {characters ? lista :loading}
      </div>
    </div>
  );
}
}


export default App;