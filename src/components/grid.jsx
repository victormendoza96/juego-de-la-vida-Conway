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


     for( var i = 1; i < this.props.fils -1; i++){
       for( var j = 1;j < this.props.cols -1; j++){
        let cellid =`${i}_${j}`
        classCell = this.props.table[i][j] ? 'life': 'died'
        table.push(<Cell  classCell={classCell} 
                          fil = {i} col = {j} key={cellid} 
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