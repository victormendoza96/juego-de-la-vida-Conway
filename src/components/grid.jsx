import React, {Component} from 'react';
import Cell from './cell'


export default class Grid extends Component{

  buildtable = ()=>{
    // let table = []
    // var classCell = ''
    // this.props.table.map((el, i)=>{ 
    //     el.map((col,j)=>{
    //       let cellid =`${i}_${j}`
    //       classCell = this.props.table[i][j] ? 'life': 'died'
    //       table.push(<Cell classCell={classCell} 
    //                       fil = {i} col = {j} key={cellid} 
    //                       clickCell ={this.props.clickCell}/>)
    //       }) 
    //   }) 
    //   return table
    let table = []
    var classCell = '';
    //como el tablero es esferico no muestros las esquinas que le san el efecto
    //creo un nuevo arreglo guardando el arreglo principal sin las esquinas fantasmas para mostrar
     for( var i = 1; i < this.props.fils -1; i++){
       for( var j = 1;j < this.props.cols -1; j++){
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