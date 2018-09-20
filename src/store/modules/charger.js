import {STATUS_EVENT} from './../mutation-types'
import {updateChargerInfo} from '../../api/updateChargerInfo'
/**
 * @property {Object} state.chargerInfo  - 存储设备的信息，包括功率，服务费，电费
 */


const state={
    chargerInfo:{

    }
}

const actions={
    [STATUS_EVENT.UPDATE_CHARGER_INFO]({commit},data){
        updateChargerInfo(data).then(res=>{
            commit(STATUS_EVENT.UPDATE_CHARGER_INFO,res)
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg,
                display: true
            },{root:true})
        })
    }
}

const mutations={
    [STATUS_EVENT.UPDATE_CHARGER_INFO](state,chargerInfo){
        state.chargerInfo = chargerInfo
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}