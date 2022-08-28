import React, { Component } from 'react'
class Test extends Component {
    // 如果数据是组件的状态需要去影响试图 定义到state
    // 如果我们需要的数据状态 不和试图绑定 定义为一个普通实例属性
    // state尽量精简
    timer=null
    componentDidMount(){
        this.timer=setInterval(()=>{
            console.log("定时器开启");
        },1000)
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
        // 清理定时器
        clearInterval(this.timer)

    }
    render(){
        return <div>test</div>
    }
}
export default class App13 extends Component {
    constructor(){
        super()
        console.log("constructor");
    }
    state ={
        count:0,
        flag:true
    }
    clickHandle=()=>{
        this.setState({
            count:this.state.count+1,
            flag:!this.state.flag
        })
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

  render() {
    console.log("render");
    return (
      <div>this is div
        {this.state.flag ?<Test/>:null}
        <button onClick={this.clickHandle}>{this.state.count}</button>
      </div>
    )
  }
}
