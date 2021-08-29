import React from "react";
export default class Array extends React.Component{
    constructor(){
        super();
        this.state={
            arr:["sourav","swadhin","payal","prabin","prasanjit"]
        }
    }
    render(){
        return(
            <div>
                {/* {this.state.arr}
                <br/>
                {typeof(this.state.arr)} */}
                {this.state.arr.map((item,index)=>{
                    return(
                        <h1 key={index}>{index}--{item}</h1>
                    )
                })}
            </div>
        )
    }
}