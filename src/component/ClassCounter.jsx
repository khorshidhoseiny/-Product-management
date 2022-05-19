import React, { Component } from 'react';
class ClassCounter extends React.Component {
    state={
        name:"",
        count:0
    }
    
    render() { 
        return (
            <div>
                <input type="text" onChange={(e)=>this.setState({name:e.target.value})} />
                <button onClick={()=>this.setState({count:this.state.count+1})}>count:{this.state.count}</button>
            </div>
        );
    }
}
 
export default ClassCounter;