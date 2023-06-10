

import React, {useState} from "react";  
// import { FaCirclePlus,FaCircleMinus,FaRotate } from "react-icons/fa6";
import { FaPlus, FaMinus, FaSync } from "react-icons/fa";


const Counter = () => {
     let [count, setCount] = useState(0) 


    //  function increase(){
    //      setCount(count+1)
    //  }
    

    return(
        <div className="counter">
              <h1> {count} </h1>
              <button onClick={()=> setCount(count+1)} > 
                  <FaPlus className="icons"/>
               </button>
              <button  onClick={()=> setCount(count-1)} > 
                    <FaMinus className="icons" />
               </button>
              <button onClick={()=> setCount(0)}> 
                    <FaSync className="icons"/>
               </button>
        </div>
    )
}

export default Counter;