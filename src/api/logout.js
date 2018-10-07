
import {ERR_TYPE, ChargerError} from '../utils/chargerError'
import {msgId} from '../utils/toolFunc'
import axios from 'axios'

export async function logout(logoutData){
    let resp = await axios.post('/v1/logout',Object.assign(
        {msgId},logoutData
    ))
    let respData = resp.data
    if (respData.respCode === ERR_TYPE.SUCCESS.code) {
        return respData.data
      }else{ 
        throw new ChargerError(ERR_TYPE.API_RESP_ERR,respData.data.errMsg)
      }
}