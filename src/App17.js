import React, { useEffect, useState } from 'react'

function Test(){
    useEffect(()=>{
        let timer=setInterval(()=>{
            console.log("定时器执行");
        },1000)
        return ()=>{
            // 清理
            clearInterval(timer)
        }
    },[])
    return(<div>this is test</div>)
}   

export default function App17() {
    const [flag,setFlag]=useState(true)
  return (
    <div>
        {flag?<Test/>:null}
    <button onClick={()=>setFlag(!flag)}>switch</button>
    </div>
  )
}
