import React from "react";
export default class Table extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[
                {
                    fname:"sourav",
                    lname:"behura"
                },
                {
                    fname:"swadhin",
                    lname:"behura"
                },
                {
                    fname:"payal",
                    lname:"parida"
                },
                {
                    fname:"prabin",
                    lname:"parida"
                }
            ]
        }
    }
    handlePush=()=>{
        var temp=this.state.arr
        temp.push({
            fname:"prasanjit",
            lname:"rout"
        })
        this.setState({
            arr:temp
        })
    }
    handlePop=()=>{
        var temp=this.state.arr
        temp.pop()
        this.setState({
            arr:temp
        })
    }

    render(){
        return(
            <div>
                <table border="2">
                    <tr>
                        <th>Fname</th>
                        <th>Lname</th>
                    </tr>
                    {this.state.arr.map((item,index)=>{
                        return(
                        <>
                            <tr>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                            </tr>
                        </>
                    )})}
                    <tr>
                        <td><button onClick={this.handlePush}>Push</button></td>
                        <td><button onClick={this.handlePop}>Pop</button></td>
                    </tr>

                </table>
            </div>
        )
    }

}