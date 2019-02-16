import React, { Component } from 'react';
import Grid from './components/grid'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = 100;
    this.rows = 30;
    this.cols = 50;
    this.state = {
      generation: 0,
      table: Array(this.rows).fill(Array(this.cols).fill(false))
      
    }
   
  }
  render() {
    return (
      <div>
        <h1>the game of life</h1>
        <h2>generation: {this.state.generation}</h2>
        <Grid
          table = {this.state.table}
          cols = {this.cols}
          rows = {this.rows}/>
      </div>
    );
  }
}

export default App;
