import React,{useState} from 'react'
// userState
// 导入userState函数
// 函数组件内部执行这个方法 并传入一个默认值
// 通过结构赋值 得到数据状态和修改状态的方法
// 渲染数据状态 在某个时机下通过执行方法修改状态

// useState初始值只在首次渲染生效 后续只要调用 setCount整个app中代码都会执行
// 此时的count每次拿到的都是最新值
export default function App14() {
    const [count,setCount]=useState(0)
    const [flag,setFlag] =useState(true)
    const [list,setList] =useState([])
function test(){
    setCount(count+1)
    setFlag(false)
    setList([1,2,3])
}
  return (
    <div>count:{count}
    flag:{flag?'1':"0"}
    list:{list.join('-')}<button onClick={test}>click
    </button></div>
  )
}
