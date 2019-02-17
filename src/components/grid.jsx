import React, {Component} from 'react';
import Cell from './cell'

export default class Grid extends Component{

  buildtable = ()=>{
    var newtable =  this.props.table.map(el => el)
      newtable.map((el, i)=>{ 
          el.map((col,j)=>{
           
            let classCell = newtable[i][j] ? "life" : "died";
            newtable.push(<Cell classCell={classCell}/>)
        
          }) 
      }) 
    
    return newtable
  }

  render(){

    return(
      <div className="table">
       {this.buildtable()}
      </div>
    )
}
}