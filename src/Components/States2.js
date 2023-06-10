
import React, {useState} from "react";


const States2 = () => {
   let [count, setCount] = useState({gold: 0, silver:0, bronze:0}); 
console.log("Count = ", count)

// count = {gold: 0, silver:0, bronze:0}
// count = 1
    
   function incrementGold(){
        //  setCount({gold: count.gold+1, silver:0, bronze:0})
        setCount({...count, gold: count.gold+1})
   }

    return(
        <div>
            <h1>Gold: {count.gold}, Silver:{count.silver} , Bronze: {count.bronze} </h1>
            <button onClick={incrementGold} > Gold </button>
            <button onClick={()=>setCount({...count, silver: count.silver+1})}> Silver </button>
            <button onClick={()=>setCount({...count, bronze: count.bronze+1})}> Bronze </button>
        </div>
    )
}

export default States2;