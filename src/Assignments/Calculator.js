import React from "react";
export default class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            no1: 0,
            no2: 0,
            add: "",
            sub: "",
            mul: "",
            div: "",
            mod: "",
        }
    }
    handleChange1 = (event1) => {
        this.setState({
            no1: event1.target.value
        })
    }
    handleChange2 = (event2) => {
        this.setState({
            no2: event2.target.value
        })
    }
    handleAdd = () => {
        this.setState({
            add: parseInt(this.state.no1) + parseInt(this.state.no2)
        })
    }
    handleSub = () => {
        this.setState({
            sub: parseInt(this.state.no1) - parseInt(this.state.no2)
        })
    }
    handleMul = () => {
        this.setState({
            mul: parseInt(this.state.no1) * parseInt(this.state.no2)
        })
    }
    handleDiv = () => {
        this.setState({
            div: parseInt(this.state.no1) / parseInt(this.state.no2)
        })
    }
    handleMod = () => {
        this.setState({
            mod: parseInt(this.state.no1) % parseInt(this.state.no2)
        })
    }

    render() {
        return (
            <div>
                <input type="number" placeholder="enter number1" value={this.state.no1} onChange={this.handleChange1} /><br />
                <input type="number" placeholder="enter number2" value={this.state.no2} onChange={this.handleChange2} /><br />
                <button onClick={this.handleAdd}>Addition(+)</button><br />
                <button onClick={this.handleSub}>Subtraction(-)</button><br />
                <button onClick={this.handleMul}>Multiplication(*)</button><br />
                <button onClick={this.handleDiv}>Division(/)</button><br />
                <button onClick={this.handleMod}>Modulous(%)</button><br />
                <h1>no1:{this.state.no1}</h1>
                <h1>no2:{this.state.no2}</h1>
                <h1>Addition product:{this.state.add}</h1>
                <h1>Subtraction product:{this.state.sub}</h1>
                <h1>Multiplication product:{this.state.mul}</h1>
                <h1>Division product:{this.state.div}</h1>
                <h1>Modulous product:{this.state.mod}</h1>

            </div>
        )
    }
}