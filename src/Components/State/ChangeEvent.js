import React from "react";
class ChangeEvent extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            email:"",
            password:""
        }
    }
    handleUsername=(event1)=>{
        this.setState({
            username:event1.target.value
        })
    }
    handleEmail=(event2)=>{
        this.setState({
            email:event2.target.value
        })
    }
    handlePassword=(event3)=>{
        this.setState({
            password:event3.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="enter username" onChange={this.handleUsername}/><br/>
                <input type="text" placeholder="enter email" onChange={this.handleEmail}/><br/>
                <input type="text" placeholder="enter password" onChange={this.handlePassword}/><br/>
                <h1>Name:{this.state.username}</h1>
                <h1>Email:{this.state.email}</h1>
                <h1>Password:{this.state.password}</h1>
            </div>

        )
    }
}
export default ChangeEvent