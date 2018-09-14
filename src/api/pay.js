import axios from 'axios'
import {msgId} from '../utils/toolFunc'
import {ChargerError, ERR_TYPE} from '../utils/chargerError'
import {wxPay} from '../utils/wxJSSDK'


export async function pay(orderInfo){
    let payBill = await axios.post('/v1/orders',Object.assign(
        {msgId},orderInfo
    ))
    let result = await wxPay(payBill.data)

    if(result.errMsg === "chooseWXPay:ok"){
        return 'success'
    }else{
        throw new ChargerError(ERR_TYPE.PAY_ERR,"微信支付失败")
    }
}