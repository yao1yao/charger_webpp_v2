import {ERR_TYPE, ChargerError} from '../utils/chargerError'
import {msgId} from '../utils/toolFunc'
import axios from 'axios'

export async function getAllChargerInfo(Data){
  let resp = await axios.get(`/v1/allchargerinfo?userId=${Data.userId}&msgId=${msgId}`)
  let respData = resp.data
  if (respData.respCode === ERR_TYPE.SUCCESS.code) {
    return respData.data
  }else{
    throw new ChargerError(ERR_TYPE.API_RESP_ERR,respData.data.errMsg)
  }
}