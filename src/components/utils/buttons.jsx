import React from 'react';
import './buttons.css'
export default function Buttons(props) {
  return(
    <div onClick ={props.function} className="sub-main">
    <button className="button-game"><span>{props.name}</span></button>
    </div>
  ) 
}