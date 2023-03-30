import React from "react";
import './App.css'
import { useState } from "react";
import  Function from './Function'
import Classs from "./Classs";

function App(){
  const [show,setshow]=useState(false)
  const [showclass,setshowclass]=useState(false)

  const handleClick=()=>{
    setshow(!show)
  }
  const handleClass=()=>{
    setshowclass(!showclass)
  }
 
  return(
    <div className="app">
      <h1>Styling Using Function And Class Component</h1><br></br>
      <button onClick={handleClick} className="btn1">To see styling in Functional Component</button>
      <button  onClick={handleClass} className="btn2">To see styling in Class Component</button>
      {show ? <Function /> : " "}
      {showclass ? <Classs />:" "}
    </div>
  );
}

export default App;
