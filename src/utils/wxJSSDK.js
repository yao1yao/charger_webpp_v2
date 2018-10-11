import axios from 'axios'
import {ChargerError, ERR_TYPE} from './chargerError'
import wx from 'weixin-js-sdk'
import isWX from './isWX.js'

export function getLocation(){
    return new Promise((resolve,reject)=>{
        wx.getLocation({
        type: 'wgs84',
        success:function(res){
            // let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            // let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            resolve(res)
        },
        fail:(res)=>{
            reject(new ChargerError(ERR_TYPE.PAY_ERR, "获取定位失败"))
        },
        cancel:(res)=>{
            reject(new ChargerError(ERR_TYPE.PAY_ERR, "暂无法获取用户地理位置"))
        }
     })
   })
}


export function wxPay(payParam){
    return new Promise((resolve,reject)=>{
        wx.chooseWXPay({
            nonceStr: payParam.nonceStr, //支付签名随机字符串， 不长于 32 位
            package: payParam.package, //同一支付接口返回的 prepay_id 参数值，提交格式如: prepay_id=\*\*\*
            paySign: payParam.paySign, //支付签名
            signType: payParam.signType, // 签名方式，默认为 'SHA1', 使用新版支付需传入 'MD5'
            timestamp: payParam.timestamp, // 支付签名时间戳, 注意微信  jssdk 中的所有使用 timestamp 字段均为小写。但最新版的支付后台生成签名使用的  timestamp 字段名需大写其中的 S 字符
            success: (res)=>{
                resolve(res)
            },
            fail:(res)=>{
                reject(new ChargerError(ERR_TYPE.PAY_ERR, "微信支付失败"))
            },
            cancel:(res)=>{
                reject(new ChargerError(ERR_TYPE.PAY_CANCEL, "取消微信支付"))
            }
        })
    })
}

export default async function wxInit(){
    if(isWX()){
        let resp = await axios.get('/wechat/jssdk')
        let config = resp.data;
        wx.config(config);
        return await _parseWX(wx);
    }else{
        throw new ChargerError(ERR_TYPE.VALID_AGENT);
    }
}

function _parseWX(wxHandle){
    return new Promise((resolve,reject)=>{
        wxHandle.ready(function(){
            resolve(wxHandle);
        })

        wxHandle.error(function(e){
            reject(e)
        })
    });
}

