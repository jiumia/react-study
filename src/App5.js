import React, { Component } from "react";
import { createRef } from "react";

export default class App5 extends Component {
  msgRef = createRef();
  getValue=()=>{
console.log(this.msgRef.current.value);
  }
  render() {
    return (
      <>
        <input type="text" ref={this.msgRef}></input>
        <button onClick={this.getValue}>获取值</button>
      </>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Input />
//     </div>
//   );
// }
