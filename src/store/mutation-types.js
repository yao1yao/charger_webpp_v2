export const STATUS_EVENT = {
    // user event
    LOGIN: 'login', // 登录 
    CHANGE_USER_STATUS: 'changeUserStatus',  // 切换用户状态
    FEED_BACK: 'feedback',  // 用户反馈
    GET_NEWEST_BALANCE: 'getNewestBalance', // 更新用户余额
    MODFIY_DATUM: 'modifyDatum',     // 修改资料
    LOG_OUT: 'logout',              // 登出
    GET_OPENID: 'getOpenId',         // 获取 openId

    // stateBox event
    SENDREQUEST: 'sendRequest',   // 等待框
    POP_UP_MODAL: 'popUpModal',   // 确认模态框
    POP_UP_TOAST: 'popUpToast',   // 延时关闭模态框


    // charger event
    UPDATE_CHARGER_INFO:'updateChargerInfo',  // 更新当前选择的充电桩的信息，包括功率，服务费，电费
    UPDATE_CHARGING_INFO:'updateChargingInfo', // 更新当前充电的信息，包括电压，电流，充电度数等
    START_CHARGING: 'startCharging',           // 开始充电  
    CACLUATE_ERROR_TIMES:'cacluateErrorTimes',  // 计算获取充电次数失败的次数
    END_CHARGING: 'endCharging',                // 结束充电
    GET_CHARGER_INFO: 'getChargerInfo',                // 登录时获取当前充电的设备编号
    CLEAR_CHARGER_INFO: 'clearChargerInfo', // 退出登录的时候，恢复到初始状态

    // record event 
    GET_CHARGER_RECORD:'getChargerReocrd', // 获取充电记录
    GET_RECHAGER_RECORD:'getRechargeReocrd', // 获取充电记录
    CLEAR_RECORD_INFO: 'clearRecordInfo'  // 退出登录的时候，恢复到初始状态
}