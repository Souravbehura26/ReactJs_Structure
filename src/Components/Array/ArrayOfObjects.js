import React from "react";
export default class ArrayOfObjects extends React.Component{
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

    render(){
        return(
            <div>
                {this.state.arr.map((item,index)=>{
                    return(
                        <div>
                            {index}--{item.fname} {item.lname}
                        </div>
                    )
                    })}
            </div>
        )
    }
}