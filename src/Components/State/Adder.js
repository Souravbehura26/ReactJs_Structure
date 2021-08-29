import React from "react";
export default class Adder extends React.Component{
    constructor(){
        super();
        this.state={
            no1:0,
            no2:0,
            add:"",
            sub:"",
            mul:"",
            div:"",
            mod:"",
        }
    }
    handleChange1=(event1)=>{
        this.setState({
            no1:event1.target.value
        })
    }
    handleChange2=(event2)=>{
        this.setState({
            no2:event2.target.value
        })
    }
    handleAdd=()=>{
        this.setState({
            add:parseInt(this.state.no1)+parseInt(this.state.no2)
        })
    }

    render(){
        return(
            <div>
                <input type="number" placeholder="enter number1" value={this.state.no1} onChange={this.handleChange1}/><br/>
                <input type="number" placeholder="enter number2" value={this.state.no2} onChange={this.handleChange2}/><br/>
                <button onClick={this.handleAdd}>Addition(+)</button><br/>
                <h1>no1:{this.state.no1}</h1>
                <h1>no2:{this.state.no2}</h1>
                <h1>Addition product:{this.state.add}</h1>

            </div>
        )
    }
}