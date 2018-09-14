/**
 * 创建自定义错误类
 */
export const ERR_TYPE={
    DEFAULT:{
        code: 1,
        errMsg: '默认错误'
    },
    SUCCESS:{
        code: 100,
        errMsg: 'success'
    },
    API_RESP_ERR:{
        code: 300,
        errMsg: 'api 返回结果失败'
    },
    VALID_AGENT:{
        code: 1000,
        errMsg: '用户端不是微信'
    },
    WX_INVALID:{
        code: 1001,
        errMsg: 'WeixinJSBridge 未初始化成功'
    },
    PAY_ERR:{
        code: 1002,
        errMsg: '支付失败'
    },
    PAY_CANCEL:{
        code: 1003,
        errMsg: '用户取消支付'
    }
}

export class ChargerError extends Error{
    /**
     * 创建自定义错误类
     */
    constructor(errType = ERR_TYPE.DEFAULT, message=errType.errMsg,...params){
        super(message,...params);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, ChargerError);
        }
        this.errCode = errType.code
        this.date = new Date();
    }
}