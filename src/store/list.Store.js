import { makeAutoObservable } from "mobx"

class ListStore{
    list=['react','vue']
    constructor(){
        makeAutoObservable(this)
    }
    addCount=()=>{
        this.list.push('angular')
    }
}

export {ListStore}