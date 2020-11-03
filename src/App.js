import React,{useState} from 'react';
import Input from "./components/Input";
import Button from "./components/Button";
import * as math from "mathjs";
import "./App.css";
import { add } from 'mathjs';

function App() {
  const [input,setInput]=useState("")
   
  const addToInput = val => {
    setInput(input + val);
     };
  const clearInput = () => {
    setInput("");
  };
  const clearOne = () => {
    setInput( input.slice(0, input.length - 1) );
  }
  
  const calculateResult = () => {
    try {
      setInput(math.evaluate(input));
    } catch (error) {
      setInput("Error");
    }
    
  };
  return (
    <div className="container">
      <div className="box">
        <Input input={input} />
        <div className="row">
            <Button handleClick={addToInput}>(</Button>
            <Button handleClick={addToInput}>)</Button>
            <Button handleClick={clearOne}>C</Button>
            <Button handleClick={clearInput}>AC</Button>
           
        </div>
        <div className="row">
            <Button handleClick={addToInput}>7</Button>
            <Button handleClick={addToInput}>8</Button>
            <Button handleClick={addToInput}>9</Button>
            <Button handleClick={addToInput}>/</Button>
            
        </div>
        <div className="row">
            <Button handleClick={addToInput}>4</Button>
            <Button handleClick={addToInput}>5</Button>
            <Button handleClick={addToInput}>6</Button>
            <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={addToInput}>1</Button>
            <Button handleClick={addToInput}>2</Button>
            <Button handleClick={addToInput}>3</Button>
            <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
              <Button handleClick={addToInput}>.</Button>
              <Button handleClick={addToInput}>0</Button>
              <Button handleClick={addToInput}>-</Button>
              <Button handleClick={calculateResult}>=</Button>
        </div>
        
      </div>
    </div>
  )
}

export default App;


