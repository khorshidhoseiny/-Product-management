import { useReducer, useState } from "react";

const initialstate=
{ firstCounter:0, 
}
const reduser=(state,action)=>{
switch(action.type){
    case "addOne":
        return {firstCounter: state.firstCounter+1}
    case "reset":
        return initialstate;
    case "decrement":
        return {firstCounter:state.firstCounter-1};
    default:
        return state;
}}

const CounterOne = () => {

    const [count,dispatch]=useReducer(reduser,initialstate);
           
    return ( 
    <div> Counter is {count.firstCounter} 
    <button onClick={()=>dispatch({type:"addOne"})}>Add One</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </div>);}
     

 
export default CounterOne;
        