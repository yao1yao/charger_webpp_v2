import {localStore} from '../../utils/localStore'
import router from  '../../router'
import {STATUS_EVENT} from './../mutation-types'
import  {getChargerRecord} from './../../api/getChargerRecord'

/**
 * @typedef {Object} state
 * @property {object} state.chargerRecord - 用户充电记录
 * @property {object} state.reChargeRecord - 用户充值记录
 * 
 */
const state = localStore.get('state').record || {
    chargerRecord:{},
    reChargeRecord: {},
}

const actions={
    [STATUS_EVENT.GET_CHARGER_RECORD]({commit},data){
        getChargerRecord(data).then(res=>{
            commit(STATUS_EVENT.GET_CHARGER_RECORD,res)
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg||'服务器开小差了,稍后再试',
                display: true
            },{root:true})
        })
    }
}

const mutations = {
    [STATUS_EVENT.GET_CHARGER_RECORD](state,chargerRecord){
        state.chargerRecord = chargerRecord
    }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations
}