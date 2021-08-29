import React from "react";
import "./ToDoListCSS.css"
export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            taskInput: "",
            taskArr: [],
            completedTask: []
        }
    }
    handleInput = (e) => {
        this.setState({
            taskInput: e.target.value
        })
    }
    handlePush = () => {
        var temp = this.state.taskArr;
        temp.push(this.state.taskInput)
        this.setState({
            taskArr: temp
        })
    }
    handleComplete = (elem, index) => {
        var temp = this.state.completedTask;
        temp.push(elem)
        var temp1 = this.state.taskArr;
        temp1.splice(index, 1);
        this.setState({
            taskArr: temp1,
            completedTask: temp
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.taskInput} placeholder="Enter Task To Do" onChange={this.handleInput}></input>
                <button disabled={this.state.taskInput === "" ? true : false} onClick={this.handlePush}>Addtask</button>
                <div className="ToDo_class">
                    <h1 align="center"><u>To Do List</u></h1>
                    <ol>
                        {this.state.taskArr.map((elem, index) => {
                            return (
                                <li>
                                    {elem}
                                    <button className="Botton_class" onClick={() => {
                                        this.handleComplete(elem, index)
                                    }}>Completed</button>
                                </li>
                            )
                        })}
                    </ol>
                </div>
                <div className="Completed_class">
                    <h1 align="center"><u>Completed Task</u></h1>
                    <ol>
                        {this.state.completedTask.map((elem, index) => {
                            return (
                                <li>
                                    {elem}
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}