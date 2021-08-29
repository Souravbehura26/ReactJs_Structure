import React from "react"
class SetStateMethod extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Sourav",
            age:"21"
        }
    }
    handleClick=()=>{
        this.setState({
            name:"Dibya",
            age:"22"
        })
    }
    handleReset=()=>{
        this.setState({
            name:"",
            age:""
        })
    }
    render(){
        const{name,age}=this.state
        return(
            <div>
                {/* <h1>Name:{this.state.name}</h1> */}
                <h1>Name:{name}</h1>
                {/* <h1>Age:{this.state.age}</h1> */}
                <h1>Age:{age}</h1>
                <button onClick={this.handleClick}>Click here to change</button>
                <br></br>
                <button onClick={this.handleReset}>Click here to reset</button>
            </div>
        )
    }
}
export default SetStateMethod