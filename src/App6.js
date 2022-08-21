// 组件
import React from "react";
function SonF(props) {
  console.log(props);
  const {msg,list ,userInfo,getMsg,child} = props
  return(<div>我是函数父组件{msg}{list.map(item=><p key={item}>{item}</p>)}
  {userInfo.name}
  <button onClick={getMsg}>click</button>
  {child}
  </div>)
}
class SonC extends React.Component{
  render(){
    return(<div>我是类子组件{this.props.msg}</div>)
  }
}

class App extends React.Component {
  state ={
    message:'this is message',
    list:[1,2,3],
    userInfo:{
      name:'wang',
      age:12
    },

  }
  getMsg=()=>{
      console.log("父组件中函数")}
  render(){
    return(
      <div>
        <SonF msg={this.state.message} list={this.state.list} userInfo={this.state.userInfo} getMsg={this.getMsg} child={<span>this is a span</span>}/>

        <SonC msg={this.state.message}/>

      </div>
    )
  }
}
export default App;


