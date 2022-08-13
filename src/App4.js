import React, { Component } from "react";

export default class App4 extends Component {
  state = {
    msg: "this is msg",
  };
  changeInput=(e)=>{
    this.setState({msg:e.target.value})
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.msg}
        onChange={this.changeInput}
      ></input>
    );
  }
}
