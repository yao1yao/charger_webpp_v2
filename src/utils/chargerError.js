/** Class 创建自定义错误类. */

export const ERR_TYPE =   {
    DEFAULT: {
      code: 1,
      errMsg: '默认错误'
    },
    SUCCESS: {
      code: 100,
      errMsg: 'success'
    },
    API_RESP_ERR: {
      code: 300,
      errMsg: '获取响应失败，请稍后重试'
    },
    VALID_AGENT: {
      code: 1000,
      errMsg: '用户端不是微信'
    },
    WX_INVALID: {
      code: 1001,
      errMsg: 'WeixinJSBridge 未初始化成功'
    },
    PAY_ERR: {
      code: 1002,
      errMsg: '支付失败'
    },
    PAY_CANCEL: {
      code: 1003,
      errMsg: '用户取消支付'
    },
  };
  
  export class ChargerError extends Error {
    /**
     * 创建
     * @param {number} errType -错误类型.
     * @param {string} message - 错误消息.
     * @param params - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error.
     */
  
    constructor(errType = ERR_TYPE.DEFAULT, message = errType.errMsg, ...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(message,...params);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ChargerError);
      }
      this.errCode = errType.code;
      this.errMsg = message
      this.date = new Date();
    }
  }
  
  