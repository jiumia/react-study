// 兄弟组件通信
import React from 'react'
function SonA(props){
    return(<div>this is SonA{props.sendAMsg}</div>)
}
function SonB(props){
    const bMsg='来自B中的数据'
    return(<div>this is SonB<button onClick={()=>props.getBMsg(bMsg)}>发送数据</button></div>)
}
export default class App8 extends React.Component {
    state={
    sendAMsg:'testtest'
    }
    getBMsg=(msg)=>{
        console.log(msg);
        this.setState({sendAMsg:msg})
    }
    render() {
        return (
          <div><SonA sendAMsg={this.state.sendAMsg}/>
          <SonB getBMsg={this.getBMsg}/></div>
        )
      }
}
