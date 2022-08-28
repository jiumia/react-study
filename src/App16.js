import React, { useState } from 'react'
function getDefaultValue(){
    for(let i=0;i<10000;i++){

    }
    return 10
}
function Counter (props){
    const [count,setCount]=useState(()=>{
        // return props.count
        return getDefaultValue()
    })
    return (<button onClick={()=>setCount(count+1)}>{count}</button>)
}
export default function App16() {
  return (
    <div>
        <Counter count={10}/>
        <Counter count={20}/>
     </div>
  )
}
