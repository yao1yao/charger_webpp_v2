/**
 * @function 获取当前设备的功率，服务费，电费，最小花费
 * @param {Object} chargerNumber - 设备编号
 * 
 */
import {ERR_TYPE, ChargerError} from '../utils/chargerError'
import {msgId} from '../utils/toolFunc'
import axios from 'axios'

export async function updateChargerInfo(chargerNumber){
    let resp = await axios.get(`/v1/charger-info?chargerNumber=${chargerNumber}&msgId=${msgId}`)
    let respData = resp.data
    if (respData.respCode === ERR_TYPE.SUCCESS.code) {
        return respData.data
      }else{
        throw new ChargerError(ERR_TYPE.API_RESP_ERR,respData.data.errMsg)
      }
}