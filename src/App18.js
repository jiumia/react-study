import React, { useEffect } from 'react'

// 发送网络请求
export default function App18() {
    useEffect(()=>{
        async function getData(){
            const res = await fetch('')
            console.log(res);
        }
        getData()
    },[])
  return (
    <div>App18</div>
  )
}
