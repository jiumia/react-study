import React from 'react'
import {useSearchParams,useParams} from 'react-router-dom'
export default function About() {
  // const [params] =useSearchParams()
  // const id = params.get('id')
  const params=useParams()
  return (
    <div>About得到的id是：{params.id}</div>
  )
}
