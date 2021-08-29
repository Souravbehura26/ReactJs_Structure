import React from "react"
import SecondComponent from "./SecondComponent"
class PassingProps extends React.Component{
    render(){
        console.log(this.props)
        // const{name,roll}=this.props
        return(
            <div>
                <h1>Welcome {this.props.name}</h1>
                {/* <h1>Welcome {name}</h1> */}
                <h1>My roll number is {this.props.roll}</h1>
                {/* <h1>My roll number is {roll}</h1> */}
                <SecondComponent value={this.props}/>
            </div>
        )
    }
}
export default PassingProps