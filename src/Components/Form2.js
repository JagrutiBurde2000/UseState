import React,{useState} from "react";



const Forms2 = () => {

    let [name,setName] = useState("");
    let [errorName,setErrorName] = useState("");
    let [email,setEmail] = useState("");

    let [formValues, setFormValues] = useState({name:"", email:""});

      function formSubmit(event){
            event.preventDefault();

            if(name.trim() === ""){
                    setErrorName("Name is required");
                    return
            }

            if(!name.trim().includes(" ")){
                setErrorName("Full name is required");
                  return
            }
      }
    return(
        <div>
             <form>
                    <input type="text" placeholder="Enter your name" 
                        onChange={(event)=> setName(event.target.value)}
                    />
                    <input type="email" placeholder="Enter your email" 
                        onChange={(event)=> setEmail(event.target.value)}
                    />
                    {/* <input type="password" placeholder="Enter your password" />
                    <input type="password" placeholder="Confirm Password" /> */}
                    <button type="submit"
                        onClick={formSubmit}
                    > Submit </button>
             </form>

             {
                errorName && 
                <p>{errorName}</p>
             }
                   
        </div>
    )
}

export default Forms2;
