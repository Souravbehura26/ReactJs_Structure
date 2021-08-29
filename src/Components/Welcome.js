import React from "react"
export default class Welcome extends React.Component{
    render(){
        return(
            // <div>
            //     <h1>Welcome to nextstacks</h1>
            //     <p>Good evening</p>
            // </div>
            <React.Fragment>
                <h1>Welcome to Nextstacks</h1>
                <p>Good evening</p>
            </React.Fragment>
            // <>
            // <h1>Welcome to Nextstacks</h1>
            // </>
        )
    }
}
// export default Welcome

export class Welcometwo extends React.Component{
    render(){
        return(
            <>
            <h1>Welcome to Nextstacks</h1>
            <p>Good morning</p>
            </>
        )
    }
}