import {ERR_TYPE, ChargerError} from '../utils/chargerError'
import {msgId} from '../utils/toolFunc'
import axios from 'axios'

export async function getNewestBalance(userData){
  let resp = await axios.get(`/v1/newest-balance?userId=${userData.userId}&msgId=${msgId}`)
  let respData = resp.data
  if (respData.respCode === ERR_TYPE.SUCCESS.code) {
    return respData.data
  }else{
    throw new ChargerError(ERR_TYPE.API_RESP_ERR,respData.data.errMsg)
  }
}