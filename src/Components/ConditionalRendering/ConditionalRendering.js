import React from "react";
export default class ConditionalRendering extends React.Component{
    constructor(){
        super();
        this.state={
            textInput:"",
            isLoggedIn:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            textInput:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.handleChange}/>
                {/* If else using ternary operator */}
                <button disabled={this.state.textInput===""?true:false}>Click</button>
                <h1>Text:{this.state.textInput}</h1>
                {/* If else using ternary operator */}
                {this.state.isLoggedIn===false?<h1>You are logged in</h1>:<h1>You are logged out</h1>}
                {/* Single If Statement */}
                {this.state.isLoggedIn===false && <h1>You are logged in</h1>} 
            </div>
        )
    }
}