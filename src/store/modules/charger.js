import {STATUS_EVENT} from './../mutation-types'
import {updateChargerInfo} from '../../api/updateChargerInfo'
import router from  '../../router'
import {localStore} from '../../utils/localStore'
import {startCharging} from '../../api/startCharging'
import {endCharging} from '../../api/endCharging'
import {getChargingInfo} from '../../api/getChargingInfo'
import {getAllChargerInfo} from '../../api/home'
import  {USER_STATUS} from './user'
/**
 * @property {Object} state.chargerInfo  - 存储设备的信息，包括功率，服务费，电费
 * @property {Object} state.chargingInfo  -  存储设备当前充电的信息，包括当前充电电压，电流等
 */


const state = localStore.get('state').charger || {
    chargerInfo:{
        devicePower:0,
        serviceRate:0,
        energyRate:0
    },
    chargingInfo:{
        setDuration: 0,
        setEnergy: 0,
        energy: 0,
        chargerNumber: 0,
        duration: 0,
        voltage: 0,
        current: 0,
        power: 0,
        type: 0,
        errTimes: 0
    },
    allChargerInfo:{

    }
}


const actions={
    [STATUS_EVENT.END_CHARGING]({commit},data){
        endCharging(data).then(res=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: res.message,
                display: true
            },{root:true})
            router.push({path: '/charger/record'})
            commit('user/'+  STATUS_EVENT.CHANGE_USER_STATUS,USER_STATUS.LOGIN,{root:true})
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg||'服务器开小差了,稍后再试',
                display: true
            },{root:true})
        })
    },
    [STATUS_EVENT.UPDATE_CHARGING_INFO]({commit,state},data){
        getChargingInfo(data).then(res=>{
            // 如果是充电状态，更新充电信息
            if(res.isCharging){
                commit(STATUS_EVENT.UPDATE_CHARGING_INFO,res)
            }else{
            // 如果是其他状态，说明已经不在充电状态了    
                commit(STATUS_EVENT.CACLUATE_ERROR_TIMES)
                commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                    text: '设备异常，即将结束充电',
                    display: true
                },{root:true})
                if(state.chargingInfo.errTimes>2){
                    router.replace({path: '/charger'})
                    commit('user/'+  STATUS_EVENT.CHANGE_USER_STATUS,USER_STATUS.LOGIN,{root:true})
                }
            }
        }).catch(error=>{
                // 如果仅仅是手机端的网络异常
                if(typeof(error.errMsg)==='undefined'){
                    setTimeout(()=>{
                        commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                            text: '网络异常,暂无法获取最新充电信息',
                            display: true
                        },{root:true})
                        // router.replace({path: '/charger'})
                    },2000)
                 // 如果是服务器抛出的异常   
                }else{
                    commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                        text: '设备已停止充电',
                        display: true
                    },{root:true})
                    router.replace({path: '/charger'})
                    commit('user/'+  STATUS_EVENT.CHANGE_USER_STATUS,USER_STATUS.LOGIN,{root:true})
                }
        })
    },
    [STATUS_EVENT.UPDATE_CHARGER_INFO]({commit},data){
        return new Promise((resolve,reject)=>{
            updateChargerInfo(data).then(res=>{
                commit(STATUS_EVENT.UPDATE_CHARGER_INFO,res)
                return resolve('ok');
            }).catch(error=>{
                commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                    text: error.errMsg||'服务器开小差了,稍后再试',
                    display: true
                },{root:true})
                return reject(error.errMsg)
            })
        })
        // updateChargerInfo(data).then((res)=>{
        //     commit(STATUS_EVENT.UPDATE_CHARGER_INFO,res)
        // }).catch(error=>{
            // commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
            //     text: error.errMsg||'服务器开小差了,稍后再试',
            //     display: true
            // },{root:true})
        // })
    },
    [STATUS_EVENT.START_CHARGING]({commit},data){
        commit('stateBox/' + STATUS_EVENT.SENDREQUEST, true, {root: true})
        startCharging(data).then(res=>{
            commit('stateBox/' + STATUS_EVENT.SENDREQUEST, false, {root: true})
            commit(STATUS_EVENT.START_CHARGING,{
                setDuration: res.setDuration,
                setEnergy: res.setEnergy,
                chargerNumber: res.chargerNumber,
                type:res.type
            })
            commit('user/'+  STATUS_EVENT.CHANGE_USER_STATUS,USER_STATUS.CHARGING,{root:true})
            router.replace({path: '/charger/status'})
        }).catch(error=>{
            commit('stateBox/' + STATUS_EVENT.SENDREQUEST, false, {root: true})
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg||'设备无法开启，稍后重试',
                display: true
            },{root:true})
        })
    },
    [STATUS_EVENT.GET_ALL_CHARGER_INFO]({commit},data){
        getAllChargerInfo(data).then(res=>{
            commit(STATUS_EVENT.GET_ALL_CHARGER_INFO,res)
        }).catch(error=>{
            commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
                text: error.errMsg||'暂无法获取最新充电桩信息',
                display: true
            },{root:true})
        })
    }
}
const mutations={
    [STATUS_EVENT.UPDATE_CHARGER_INFO](state,chargerInfo){
        state.chargerInfo.devicePower = parseFloat(chargerInfo.devicePower)
        state.chargerInfo.serviceRate = parseFloat(chargerInfo.serviceRate)
        state.chargerInfo.energyRate = parseFloat(chargerInfo.energyRate)
    },
    [STATUS_EVENT.START_CHARGING](state,chargingInfo){
        state.chargingInfo.setDuration = chargingInfo.setDuration
        state.chargingInfo.setEnergy = chargingInfo.setEnergy
        state.chargingInfo.chargerNumber = chargingInfo.chargerNumber
        state.chargingInfo.type = chargingInfo.type
    },
    [STATUS_EVENT.UPDATE_CHARGING_INFO](state,chargingInfo){
        state.chargingInfo.energy = chargingInfo.energy
        state.chargingInfo.voltage = chargingInfo.voltage
        state.chargingInfo.current = chargingInfo.current
        state.chargingInfo.power = chargingInfo.power
        state.chargingInfo.duration = chargingInfo.duration
    },
    [STATUS_EVENT.GET_CHARGER_INFO](state,chargerInfo){
        state.chargingInfo.setDuration = chargerInfo.set_duration
        state.chargingInfo.setEnergy = chargerInfo.set_energy
        state.chargingInfo.chargerNumber = chargerInfo.charger_number
        state.chargingInfo.type = chargerInfo.charging_type
    },
    [STATUS_EVENT.CACLUATE_ERROR_TIMES](state){
        state.chargingInfo.errTimes++
        if(state.chargingInfo.errTimes>3){
            state.chargingInfo.errTimes=0
        }
    },
    [STATUS_EVENT.CLEAR_CHARGER_INFO](state){
        state.chargerInfo={
            devicePower:0,
            serviceRate:0,
            energyRate:0
        },
        state.chargingInfo={
            setDuration: 0,
            setEnergy: 0,
            energy: 0,
            chargerNumber: 0,
            duration: 0,
            voltage: 0,
            current: 0,
            power: 0,
            type: 0,
            errTimes: 0
        }
    },
    [STATUS_EVENT.GET_ALL_CHARGER_INFO](state,allChargerInfo){
        state.allChargerInfo = allChargerInfo
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}