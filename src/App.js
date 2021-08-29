import React from "react"

import Welcome,{Welcometwo} from "./Components/Welcome"
import PassingProps from "./Components/Props/PassingProps"
import StateVariable from "./Components/State/StateVariable"
import SetStateMethod from "./Components/State/SetStateMethod"
import ChangeEvent from "./Components/State/ChangeEvent"
import Adder from "./Components/State/Adder"
import Calculator from "./Assignments/Calculator"
import Array from "./Components/Array/Array"
import ArrayOfObjects from "./Components/Array/ArrayOfObjects"
import Table from "./Components/Array/Table"
import TodoList from "./Assignments/ToDoList"
import ConditionalRendering from "./Components/ConditionalRendering/ConditionalRendering"

class App extends React.Component{
  render()
  {
      return(
        <div>
          {/* <Welcome/> */}
          {/* <Welcometwo/> */}
          {/* <PassingProps name="sourav" roll={7}/> */}
          {/* <PassingProps name="Dibya" roll={7}/>
          <PassingProps name="Manoj" roll={55}/> */}
          {/* <StateVariable/> */}
          {/* <SetStateMethod/> */}
          {/* <ChangeEvent/> */}
          {/* <Adder/> */}
          {/* <Calculator/> */}
          {/* <Array/> */}
          {/* <ArrayOfObjects/> */}
          {/* <Table/> */}
          <TodoList/>
          {/* <ConditionalRendering/> */}
        </div>
      )
  }
}
export default App