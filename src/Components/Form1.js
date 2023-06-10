import React,{useState} from "react"; 


const Form1 = () => {

    let [name,setName] = useState("");
   
    function handleChange(event){
         setName(event.target.value);
    }


    return(
        <div>
              <input type="text" placeholder="Enter your name" 
               onChange={handleChange}
              /> 

              <p>Name is = {name} </p>
              
        </div>
    )
}

export default Form1;