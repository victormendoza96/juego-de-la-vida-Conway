import React, {Component} from 'react';
import Cell from './utils/cell'


export default class Grid extends Component{

  buildtable = ()=>{
    const {fils} = this.props
    const {cols} = this.props
    let table = []
    let classCell = '';
    //como el tablero es esferico no muestros las esquinas que le san el efecto
    //creo un nuevo arreglo guardando el arreglo principal sin las esquinas fantasmas para mostrar
     for( var i = 1; i < fils -1; i++){
       for( var j = 1;j < cols -1; j++){
        let cellid =`f${i}-c${j}`
        classCell = this.props.table[i][j] ? 'life': 'died'//para si la celula esta viva o muerta al nuevo arreglo que solo muestra
        table.push(<Cell  classCell={classCell} 
                          fil = {i} col = {j} key={cellid} //key  para quitar el warning xD
                          clickCell ={this.props.clickCell}/>)
       }
     }
     return table
  }

  render(){
    return(
      <div className="table">
       {this.buildtable()}
      </div>
    )
}
}