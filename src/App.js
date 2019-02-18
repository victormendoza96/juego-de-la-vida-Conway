import React, { Component } from 'react';
import Grid from './components/grid'
import './App.css';
import Button from './components/utils/buttons'

class App extends Component {
  constructor(){
    super();
    this.fils = 52;
    this.cols = 32;
    this.timeGeneration = 300;
    this.state = {//lo que puede cambiar mientras se ejecuta el juego
      generations: 0,
      table: Array((this.fils)).fill(Array(this.cols ).fill(false))//llenar arreglo de celulas muertas
      
    }
   
  }
  //paso la fila y columna clikeada
  clickCell = (fil, col)=>{
    let table = this.state.table.map(e => e.map(i => i))
     table[fil][col] = !table[fil][col] //reviviro o  matar celula 
    this.setState({
      table
    }) 
  }
  /*ya que el trablero es esferico para fingirlo  le agrege dos col y fil
  al tablero y para igualar las esquinas agregadas con los extremos */ 
  borderTable= ()=>{
   
    let table = this.state.table.map(e => e.map(i => i))
    //casos de esquina reflejadas
    table[0][0] = this.state.table[this.fils - 2][this.cols - 2]
    table[0][this.cols - 1] =  this.state.table[this.fils - 2][1]
    table[this.fils - 1][0] = this.state.table[1][this.cols - 2]
    table[this.fils - 1][this.cols - 1] =  this.state.table[1][1]
    //bordes reflejados
    for( let i = 1; i < this.cols -1; i++){//top
      table[0][i] = this.state.table[this.fils -2][i]
    }
    for( let i = 1; i < this.cols -1; i++){//bot
      table[this.fils - 1][i] = this.state.table[1][i]
    }
    for( let i = 1; i < this.fils -1; i++){//left
      table[i][0] = this.state.table[i][this.cols - 2]
    }
    for( let i = 1; i < this.fils -1; i++){//right
      table[i][this.cols - 1] = this.state.table[i][1]
    }

    return table
  }

  next = ()=>{
    let table = this.borderTable()
    let mirror  = this.borderTable()
    for( var i = 1; i < this.fils -1; i++){
      for( var j = 1;j < this.cols -1; j++){
        let liveCell = 0
        if(mirror[i-1][j-1]) liveCell++
        if(mirror[i-1][j]) liveCell++
        if(mirror[i-1][j+1]) liveCell++
        if(mirror[i][j-1]) liveCell++
        if(mirror[i][j+1]) liveCell++
        if(mirror[i+1][j-1]) liveCell++
        if(mirror[i+1][j]) liveCell++
        if(mirror[i+1][j+1]) liveCell++
        
        if (mirror[i][j]  && (liveCell < 2 || liveCell > 3)){
          table[i][j] = false
        }else{
          if(!mirror[i][j] && liveCell === 3)table[i][j]= true
        }
      }
    }
    this.setState({
      generations: this.state.generations + 1,
      table
    })
  }
  //inicio juego
  playGame = ()=>{
    this.interval = setInterval(this.next, this.timeGeneration)
  }
  //detener juego
  stop = ()=>{
    clearInterval(this.interval)
  }
  restart = ()=>{
    let table = Array((this.fils)).fill(Array(this.cols ).fill(false))
    let generations = 0
    this.setState({
      table,
      generations
    });
    this.stop()
  }

  slow= () =>{
   
    if(this.timeGeneration < 1000 ){
      this.stop()
      this.timeGeneration = this.timeGeneration + 100

      console.log(this.timeGeneration);
      this.playGame()
    }
    
  }
  fast= () =>{
   
    if(this.timeGeneration > 100 ){
      this.stop()
      this.timeGeneration = this.timeGeneration - 100

      console.log(this.timeGeneration);
      this.playGame()
    }
    
  }
  
  render() {
    return (
      <div>
        <div className = "header">
          <div className = "butt-header">
            <Button function={this.playGame} name = "iniciar" classbut = "button-game"/>
            <Button function={this.stop} name = "detener" classbut = "button-stop"/>
            <Button function={this.restart} name = "reiniciar" classbut = "button-restart"/>
            <Button function={this.next} name = "siguiente" classbut = "button-game"/>
            <Button function={this.fast} name = "+" classbut = "button-speed"/>
            <Button function={this.slow} name = "-" classbut = "button-speed"/>
            <p>Generacion #{this.state.generations}</p>
            
          </div>
        </div>
        <Grid
          table = {this.state.table}
          cols = {this.cols}
          fils = {this.fils}
          clickCell = {this.clickCell}
          />
          
      </div>
    );
  }
}
export default App;
