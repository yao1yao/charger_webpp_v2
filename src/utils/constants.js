/*充电类型*/
export const CHARGING_TYPE = {
    MONEY:0, //金额充电
    TIME:1 //时间充电
  };
  
  /*支付类型*/
  export const PAY_TYPE = {
    WECHAT:1, //微信支付
    BALANCE:2 //余额支付
  };
  
  /*充电桩状态*/
  export const CHARGER_STATUS = {
    OFFLINE: 0, //离线
    CONNECTED: 1, //已连接
    CHARGING: 2, //充电中
    IDLE: 4, //空闲
    ERR: 10 //错误
  };
  