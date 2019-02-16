import React, {Component} from 'react';

export default class Cell extends Component{
  render(){
    return(
      <div className = {`box ${this.props.cellstate}`}></div>
    )
  }
  }