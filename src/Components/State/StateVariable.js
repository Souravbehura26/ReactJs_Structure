import React from "react"
class StateVariable extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Sourav",
            age:"21"
        }
    }
    render(){
        return(
            <div>
                <h1>Name:{this.state.name}Age:{this.state.age}</h1>
            </div>
        )
    }
}
export default StateVariable