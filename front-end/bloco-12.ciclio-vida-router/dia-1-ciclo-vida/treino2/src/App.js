import React, { Component }from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          message: [],
        };
      }

    componentDidMount() {
      fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        this.setState({message: data.results})
      })
    }
    render() {
      return (
        <div>
          oi
        </div>
        );
      }
}
  
export default App;
