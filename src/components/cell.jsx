import React, {Component} from 'react';
import './cell.css'
export default class Cell extends Component{

  render(){
  
    return(
      //le pongo clace cell y el que viene por props para saber si esta vivo o muerto
      //onclik ()=> para que no pierda el estado y paso fil y col como ref del arreglo original
      <div className = {`cell ${this.props.classCell}`} onClick = {()=> this.props.clickCell(this.props.fil, this.props.col)} id = {this.props.id} >
      
      </div>
    )
  }
  }