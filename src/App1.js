import React from 'react'
import './app.css'

const aaa='hello'

const getAge=()=>{
  return 12
}

const flag= true
const songs=[
  {id:1,name:'hhh'},
  {id:2,name:'qqq'},
  {id:3,name:'hhwwh'}
]
const style={color:'red'}

export default function jsx() {
  return (
    <div>{aaa}{getAge()}{flag?'111':'222'}<ul>
      {songs.map(song=><li key={song.id}>{song.name}</li>)}
      </ul>
      {flag?<span>this is span</span>:null}
      {true&&<span>this is span</span>}
      <span style={style}>this is span</span>
      <span className={flag?'active':''}>this is span</span>
      </div>
  )
}
