import { useState } from "react";
export default function Counter({num}){
    const [counter, setcounter]= useState(num);
    let changeToFive=()=>{
        // setcounter(5)
        setcounter(num) 
        // showing on screen the value of props
    }
    let increaseByOne=()=>{
        setcounter(counter+1)
        if (counter%3==0){
            document.getElementById("print").innerHTML+= "  boom";
            // console.log("boom");
        }
    }
    let decreaseByOne=()=>{
        setcounter(counter-1)
    }
    let reset=()=>{
        setcounter(0)
    }

    return(
        <div>
            <h2 >{counter}</h2>
            <h2 id="print"></h2>
            {/* <button onClick={changeToFive}>ToFive</button> */}
            <button onClick={decreaseByOne}>-1</button>
            <button onClick={increaseByOne}>+1</button>
            <button onClick={reset}>reset</button>
        </div>
    )

}
