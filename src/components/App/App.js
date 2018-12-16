import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  // Renders the entire app on the DOM
  handleClick = () => {
    axios.get('api/project').then( response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <button onClick={this.handleClick}>test</button>
      </div>
    );
  }
}

export default App;
