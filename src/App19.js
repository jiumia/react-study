import React, { Component, useEffect } from 'react'
import { useRef } from 'react'
class Test extends Component{
    getName=()=>{
        return 'this isname'
    }
    render(){
        return (<div>类组件</div>)
    }
}

export default function App19() {
    const testref=useRef(null)
    const h1ref=useRef(null)
    useEffect(()=>{
        console.log(testref.current);
        console.log(h1ref.current);
    })
  return (
    <div><Test ref={testref}/><h1 ref={h1ref}>this is h1</h1></div>
  )
}
