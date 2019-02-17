import React, {Component} from 'react';

export default class Cell extends Component{
  clickCell = ()=>{
    this.props.clickCell(this.props.fil, this.props.col)
  }
  render(){
  
    return(
      
      <div className = {`cell ${this.props.classCell}`} onClick = {this.clickCell} id = {this.props.id} >
      
      </div>
    )
  }
  }