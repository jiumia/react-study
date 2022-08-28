import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'

import Context from './context'
// context 如果要传递数据 只需要在整个应用初始化时传递 一次就可以，可以在index中传递数据
// <Context.Provider value={count}> </Context.Provider>

// 如果context要传递数据并且需要修改数据 底层组件也要修改写到app.js
function ComA(){
    const count=useContext(Context)
    return (<div>this is comA  app传过来的：{count}<br/><ComC/></div>)
}
function ComC(){
    const count=useContext(Context)
    return (<div>app传过来的：{count}<br/>this is comC</div>)
}
export default function App20() {
    const [count,setCount]=useState(20)
  return (
    <Context.Provider value={count}>
        <div><ComA/><button onClick={()=>{setCount(count+1)}}>click</button></div>
    </Context.Provider>
    
  )
}
