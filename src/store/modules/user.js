import {localStore} from '../../utils/localStore'
import router from  '../../router'
import {STATUS_EVENT} from './../mutation-types'
import {login} from '../../api/login'
import {getVerfCode} from '../../api/getVerfCode'
import {register} from '../../api/register'
import {forgetPwd} from '../../api/fogetpwd'
export const USER_STATUS = {
    CHARGING: 'charging',
    LOGIN : 'login',
    INVALID: 'logout'
}

/**
 * @typedef {Object} state
 * @property {object} state.userInfo - 存储用户基本信息
 * 
 */
const state = localStore.get('state') || {
    userInfo:{},
    userStatus: USER_STATUS.INVALID
}

const actions={
    login({commit},data){
        commit('stateBox/' + STATUS_EVENT.SENDREQUEST, true, {root: true})
        login(data).then(res=>{
            commit('stateBox/' + STATUS_EVENT.SENDREQUEST, false, {root: true})
            commit(STATUS_EVENT.LOGIN, res)
        }).catch(error=>{
            commit('stateBox/' + STATUS_EVENT.SENDREQUEST, false, {root: true})
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg,
                display: true
            },{root:true})
        })
    },
    verfCode({commit},data){
        getVerfCode(data).then(res=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: res.message,
                display: true
            },{root:true})
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg,
                display: true
            },{root:true})
        })
    },
    register({commit},data){
        register(data).then(res=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: res.message,
                display: true
            },{root:true})
            router.replace({path:'/login'})
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg,
                display: true
            },{root:true})
        })
    },
    forgetPwd({commit},data){
        forgetPwd(data).then(res=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: res.message,
                display: true
            },{root:true})
            router.replace({path:'/login'})
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg,
                display: true
            },{root:true})
        })
    }
}

const mutations = {
    [STATUS_EVENT.LOGIN](state, userInfo){
        state.userStatus = USER_STATUS.LOGIN
        state.userInfo = userInfo
        router.replace({path: '/home'})
    }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations
}