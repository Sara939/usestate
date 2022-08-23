import {useReducer} from "react";
import { type } from "@testing-library/user-event/dist/type";


function Reducer() {
const [counter, dispatch]= useReducer(CounterReducer, 0);

function CounterReducer(state, action){
  switch(action.type){
    case "add 1":
      return(state+1)
  
    case "less 1":
      return (state-1)
    case 0:
      return(0)
    default:
      return state;
}

}
  return (
    <div className="reduser">
      <h1>Reducer</h1>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch({type:"add 1"})}>+</button>
      <button onClick={()=>dispatch({type:"less 1"})}>-</button>
      <button onClick={()=>dispatch({type:0})}>0</button>
    </div>
  );
};

export default Reducer;
