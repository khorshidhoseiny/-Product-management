import React from 'react';
import {useCount, useCountAction} from "./CounterProvider";

const CounterOne = () => {
const count=useCount();
const dispatch=useCountAction();



    return (  
        <div> 
            Counter is {count} 
        <button onClick={()=>dispatch({type:"add",value:1})}>Add One</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        <button onClick={()=>dispatch({type:"decrement",value:1})}>Decrement</button>
        
        </div>
        
    );
}
 
export default CounterOne;