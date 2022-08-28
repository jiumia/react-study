import React, { useEffect, useState } from 'react'
import { useWindowScroll } from './useWindowScroll'
import { useLocalStorage } from './useLocalStorage'

export default function App15() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("qqqq")
    const [y]=useWindowScroll()
    const [message,setMessage] = useLocalStorage('hook-key','sssss')
    setTimeout(()=>{
        setMessage('ddddd')
    },5000)
    useEffect(()=>{
        console.log("副作用执行了");
        document.title=count
        console.log(name);
    },[count,name])
  return (
    <div style={{height:'10000px'}}>y:{y} {message}
        <button onClick={()=>setCount(count+1)}>{count}</button>
        <button onClick={()=>setName('assas')}>{name}</button>
        </div>
  )
}
