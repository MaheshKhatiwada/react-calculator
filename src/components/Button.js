import React from 'react'
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val==="." ;
}
const isClear = val => {
  if (val === "C"||val==="AC" )
    return true;
}
function Button(props) {
  return (
    <div className={`button 
    ${isClear(props.children) ? "clearButton" : null}
     ${isOperator(props.children) ? null : "operatorButton"}`}
    onClick={()=>props.handleClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Button
