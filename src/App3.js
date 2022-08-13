import React, { Component } from "react";

export default class App3 extends Component {
  state = {
    count: 0,
    name: "www",
    list: [1, 2, 3],
    person: {
      name: "jack",
      age: 12,
    },
  };
  changeName = () => {
    this.setState({
      name: "hhhhh",
    });
  };
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  changeList=()=>{
    this.setState({list:[...this.state.list,4,5],person:{...this.state.person,name:'rose'}})
  }
  render() {
    return (
      <>
        <div>
          this is:{this.state.name}
          <button onClick={this.changeName}>change name</button>
        </div>
        <div>
          <button onClick={this.changeCount}>{this.state.count}click</button>
        </div>
        <ul>
            {this.state.list.map((item)=><li key={item}>{item}</li>)}
        </ul>
        <div>{this.state.person.name}</div>
        <div>
          <button onClick={this.changeList}>changeList</button>
        </div>
      </>
    );
  }
}
