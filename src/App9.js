import React, { Component,createContext } from 'react'
const {Provider, Consumer}=createContext()
function ComA(){
    return(
            <div>this is comA<ComC/></div>
    )
}
function ComC(){
    return(
    <div>
        this is comC
        <Consumer>
            {value=><span>{value}</span>}
        </Consumer>
    </div>)
}
export default class App9 extends Component {
    state ={
        message:'this is message'
    }
  render() {
    return (
        <Provider value={this.state.message}>
            <div><ComA/></div>
        </Provider>
      
    )
  }
}
