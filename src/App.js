import React, { Component } from 'react';
import Grid from './components/grid'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      generation: 0,
    }
  }
  render() {
    return (
      <div>
        <h1>the game of life</h1>
        <Grid/>
        <h2>generation: {this.state.generation}</h2>
      </div>
    );
  }
}

export default App;
