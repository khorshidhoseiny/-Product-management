import React, { useContext } from 'react';
import { useReducer } from 'react/cjs/react.development';


 const CounterContext=React.createContext(); //State
 const CounterContextDispatcher=React.createContext(); //setCount

const initialState=0;
const reduser=(state,action)=>{
    switch(action.type){
        case "add":
            return  state+action.value;
        case "reset":
            return initialState;
        case "decrement":
            return  state -action.value;
        default:
            return state;
    }}



const CounterProvider = ({children}) => {
 const [count,dispacher]=useReducer(reduser,initialState);

    return <CounterContext.Provider value={count}>
        <CounterContextDispatcher.Provider value={dispacher}>
            {children}
        </CounterContextDispatcher.Provider>
        </CounterContext.Provider>
}
 
export default CounterProvider;
export const useCount=()=> useContext(CounterContext);
export const useCountAction=()=>{
    return useContext(CounterContextDispatcher)
    // const addOne=()=>{
    //     setCount(prevCount=>prevCount + 1)
    // }
    // const addFive=()=>{
    //     setCount(prevCount=>prevCount + 5)
    // }
    // const Decrement=()=>{
    //     setCount(prevCount=>prevCount - 1)
    // }
    // return {addOne,addFive,Decrement};
};


