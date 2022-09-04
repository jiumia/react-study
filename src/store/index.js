import React from "react";
import { CounterStore } from "./counter.Store";
import { ListStore } from "./list.Store";

class RootStore{
    constructor(){
        // 对子模块实例化
        this.listStore=new ListStore()
        this.counterStore=new CounterStore()
    }
}

// 实例化
const rootStore = new RootStore()
// 使用react context机制 完成统一方法封装
//  Provider value={传递的数据}
// 查找机制 useContext 优先从Provider value找 找不到就会找createContext传递过来的默认参数
const context = React.createContext(rootStore)
// 通过useContext拿到rootStore实例对象
const useStore = ()=>React.useContext(context)

export {useStore}