import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from './store'

 function App22() {
    const rootStore = useStore()
    console.log(rootStore);
  return (
    <div>
        {rootStore.counterStore.count}
        {rootStore.counterStore.filterList.join('-')}
        <button onClick={rootStore.counterStore.addCount}>+</button>
        <button onClick={rootStore.counterStore.addList}>修改数组</button>
    </div>
  )
}

export default observer(App22)
