import {localStore} from '../../utils/localStore'

export const persistentStore = store=>{
    // 当 store 初始化后调用
    store.subscribe((mutation,state)=>{
        localStore.set('state',state.user)
    })
}
