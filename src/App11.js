import React, { Component } from 'react'
// 渲染列表
function ListItem({children}){
    return(<div>ListItem{children}</div>)
}

// 数据提供者 渲染listitem 
export default class App10 extends Component {
    delItem=(id)=>{
        this.setState({
        list:this.state.list.filter(item=>item.id!==id)
        })
    }
  render() {
    return (
        
      <div><ListItem>{<><div>{'this is div'}</div><p>{'this is price'}</p></>}
        </ListItem></div>
    )
  }
}
