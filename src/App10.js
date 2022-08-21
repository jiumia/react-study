import React, { Component } from 'react'
// 渲染列表
function ListItem({item,delItem}){
    return(<div><h3>{item.name}</h3><p>{item.price}</p><p>{item.info}</p><button onClick={()=>delItem(item.id)}>删除</button></div>)
}

// 数据提供者 渲染listitem 
export default class App10 extends Component {
    state={
        list:[
            {id:1,name:'xuegao',price:12.3,info:'xuegaocike'},
            {id:2,name:'shuiguo',price:12.3,info:'shuiguocike'},
            {id:3,name:'shucai',price:12.3,info:'shucaicike'}
        ]
    }
    delItem=(id)=>{
        this.setState({
        list:this.state.list.filter(item=>item.id!==id)
        })
    }
  render() {
    return (
        
      <div>{this.state.list.map(item=><ListItem key={item.id} item={item} delItem={this.delItem}/>)}</div>
    )
  }
}
