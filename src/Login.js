import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    function goAbout(){
        // navigate('/about?id=1001',{replace:true})
        navigate('/about/1001',{replace:true})
    }
  return (
    <div>Login<button onClick={goAbout}>跳到关于</button></div>
  )
}
