import { useEffect } from "react"
import { useState } from "react"

export function useLocalStorage(key,defaultValue){
    const [message,setMessage]=useState(defaultValue)
    useEffect(()=>{
        window.localStorage.setItem(key,message)
    },[key,message])
    return [message,setMessage]
}