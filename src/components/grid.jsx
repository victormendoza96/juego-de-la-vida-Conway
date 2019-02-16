import React, {Component} from 'react';
import Cell from './cell'

export default class Grid extends Component{

  buildtable = ()=>{
    var newtable =  this.props.table 
      newtable.map((el, i)=>{ 
        
          el.map((col,j)=>{
            let classcCell = newtable[i][j]? "life" : "died"
            
              newtable[i][j] = true
             let hola = "ahola"
          })
        
      }) 
      console.log(newtable);
      console.log(this.props.table);
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