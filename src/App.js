import FunctionCompo from "./Component/FunctionCompo";
import ClassCompo from "./Component/ClassCompo";
import { useState } from "react";
import "./App.css"

function App() {
  const [buttonOne,setButtonOne]=useState(false);
  const [buttonTwo,setButtonTwo]=useState(false);

  const handleFunction=()=>{
    setButtonOne(!buttonOne)
  }
  const handleClass=()=>{
    setButtonTwo(!buttonTwo)
  }

    return (
    <>
        <h1 className="heading">Styling Functional and Class Component</h1>
        
        <div className="flex1">
           <button onClick={handleFunction} className="btn" id="btn1">To see styling in Functional Component</button>
           <button onClick={handleClass} className="btn" id="btn2">To see styling in Class Component</button>
        </div>

        <div className="flex2">
           {buttonOne?<FunctionCompo/>:null}
           {buttonTwo?<ClassCompo/>:null}
        </div>

    </>
  );
}

export default App;
