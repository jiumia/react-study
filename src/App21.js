import React from 'react'
import About from './About'
import Home from './Home'
import Login from './Login'
import Layout from './Layout'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Board from './Board'
import Article from './Article'
import NotFound from './NotFound'

// 路由配置
export default function App21() {
  return (
    // 声明一个非hash模式的路由
    <BrowserRouter>
    {/* 指定跳转的组件 to来配置路由地址 */}
        {/* <Link to="/">首页</Link>
        <Link to="/about">关于</Link> */}
        {/* 路由出口 路由对应的组件会在这里进行渲染 */}
        <Routes>
            {/* 指定路径和组件的对应关系 path代表路径 element代表组件 path element成对出现 */}
            {/* <Route path='/' element={<Home/>}></Route>
            <Route path='/about/:id' element={<About/>}></Route>
            <Route path='/login' element={<Login/>}></Route> */}
            <Route path='/' element={<Layout/>}>
                <Route index element={<Board/>}></Route>
                <Route path='article' element={<Article/>}></Route>
            </Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
