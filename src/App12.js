// props校验
import React, { Component } from 'react'
import PropsTypes from 'prop-types'
// function Test({pageSize=10}){
//     return(<div>
//         thsi is test{pageSize}
//         </div>)
// }
// Test.propTypes={
// list:PropsTypes.array.isRequired
// }
// Test.defaultProps={
//     pageSize:10
// }

class Test extends React.Component{
    // 推荐
    static defaultProps={
        pageSize:40
    }
    render (){
        return(<div>{this.props.pageSize}</div>)
    }
}
// Test.defaultProps={
//     pageSize:10
// }
export default class App12 extends Component {
  render() {
    return (
      <div><Test/></div>
    )
  }
}
