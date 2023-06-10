import React , {useState} from "react"


//{} used for name export

console.log("Hello I am outside component")

let a = 0 

const States1 = () => {
    let [count, setCount] = useState(0) // count = 0 

    console.log("Hello I am in line 6")


    function increase1(){
        a = a + 1 
        console.log(a)
    }

    function increase2(){
         setCount(count+1)
    }
    console.log("Hello I am in line 18")


    return(
        <div>
             <h1> {a} </h1>
            <button onClick={increase1}> Increase </button>

            <h1> count = {count} </h1>
            <button onClick={increase2}> Increase Click </button>


        </div>
    )
}

export default States1;




// for(i = 0; i<=5; i++){
//     console.log(i)
// }