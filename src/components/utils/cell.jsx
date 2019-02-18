import React from 'react';
import './cell.css'

export default function Cell(props) {

  return(
    //le pongo clace cell y el que viene por props para saber si esta vivo o muerto
    //onclik ()=> para que no pierda el estado y paso fil y col como ref del arreglo original
    <div className = {`cell ${props.classCell}`} onClick = {()=> props.clickCell(props.fil, props.col)} >
    
    </div>
    )
  
  }