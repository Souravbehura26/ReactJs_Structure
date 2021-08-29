import React from "react"

class SecondComponent extends React.Component{
    render(){
            const {name,roll}=this.props.value
        return(
           <div>
               {/* <p>Name from PassingProps is {this.props.value.name} and roll no {this.props.value.roll}</p> */}
               <p>Name from PassingProps is {name} and roll no {roll}</p>
           </div> 
        )
    }

}
export default SecondComponent