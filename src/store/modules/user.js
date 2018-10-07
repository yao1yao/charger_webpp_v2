import {localStore} from '../../utils/localStore'
import router from  '../../router'
import {STATUS_EVENT} from './../mutation-types'
import {login} from '../../api/login'
import {getVerfCode} from '../../api/getVerfCode'
import {register} from '../../api/register'
import {forgetPwd} from '../../api/fogetpwd'
import {feedback} from '../../api/feedback'
import {getNewestBalance} from '../../api/getNewestBalance'
import {modifyDatum} from '../../api/modifyDatum'
import {logout} from '../../api/logout'
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
const state = localStore.get('state').user || {
    userInfo:{},
    userStatus: USER_STATUS.INVALID
}

const actions={
    login({commit},data){
        commit('stateBox/' + STATUS_EVENT.SENDREQUEST, true, {root: true})
        login(data).then(res=>{
            commit('stateBox/' + STATUS_EVENT.SENDREQUEST, false, {root: true})
            commit(STATUS_EVENT.LOGIN, res)
            commit(STATUS_EVENT.CHANGE_USER_STATUS, USER_STATUS.LOGIN)
            router.replace({path: '/home'})
        }).catch(error=>{
            commit('stateBox/' + STATUS_EVENT.SENDREQUEST, false, {root: true})
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg||"登录失败,请稍后再试",
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
                text: error.errMsg||'获取验证码失败,稍后再试',
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
                text: error.errMsg||'注册失败,稍后再试',
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
                text: error.errMsg||'服务器开小差了,稍后再试',
                display: true
            },{root:true})
        })
    },
    feedback({commit},data){
        feedback(data).then(res=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: res.message,
                display: true
            },{root:true})
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg||'反馈失败了,稍后再试',
                display: true
            },{root:true})
        })
    },
    getNewestBalance({commit},data){
        getNewestBalance(data).then(res=>{
            commit(STATUS_EVENT.GET_NEWEST_BALANCE,res.balance)
        }).catch(error=>{
            console.log('获取最新余额失败');
        })
    },
    modifyDatum({commit},data){
        modifyDatum(data).then(res=>{
            commit(STATUS_EVENT.MODFIY_DATUM,res)
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: '修改成功',
                display: true
            },{root:true})
            router.replace({path: '/user'})
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg||'服务器开小差，稍后再试',
                display: true
            },{root:true})
        })
    },
    logout({commit},data){
        logout(data).then(res=>{
            commit(STATUS_EVENT.LOG_OUT),
            commit('record/'+STATUS_EVENT.CLEAR_RECORD_INFO,{},{root:true})
            commit('charger/'+STATUS_EVENT.CLEAR_CHARGER_INFO,{},{root:true})
            // 清除缓存
            localStore.clear('state');
            router.replace({path:'/login'})
        })
    }
}

const mutations = {
    [STATUS_EVENT.LOGIN](state, userInfo){
        state.userInfo = userInfo
    },
    [STATUS_EVENT.CHANGE_USER_STATUS](state,status){
        state.userStatus = status
    },
    [STATUS_EVENT.GET_NEWEST_BALANCE](state,balance){
        state.userInfo.balance = balance
    },
    [STATUS_EVENT.MODFIY_DATUM](state,datum){
        state.userInfo.userName = datum.userName
        state.userInfo.phone = datum.phone
    },
    [STATUS_EVENT.LOG_OUT](state){
        state.userStatus = USER_STATUS.INVALID
        state.userInfo={}
    }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations
}