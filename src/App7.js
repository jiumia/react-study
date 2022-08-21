import React, { Component } from 'react'

function Son(props){
    const {getSonMsg} =props
    function handelClick(){
        getSonMsg('来自子组件中的数据')
    }
    return(<div>this is Son<button onClick={handelClick}>click</button></div>)
}
// 子传父
export default class App7 extends Component {
    state = {
        list:[1,2,3]
    }
    getSonMsg=(sonMsg)=>{
        console.log(sonMsg);
    }
  render() {
    return (
      <div><Son getSonMsg={this.getSonMsg}/></div>
    )
  }
}
