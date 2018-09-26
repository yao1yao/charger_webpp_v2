export const STATUS_EVENT = {
    // user event
    LOGIN: 'login', // 登录 
    CHANGE_USER_STATUS: 'changeUserStatus',  // 切换用户状态

    // stateBox event
    SENDREQUEST: 'sendRequest',   // 等待框
    POP_UP_MODAL: 'popUpModal',   // 确认模态框
    POP_UP_TOAST: 'popUpToast',   // 延时关闭模态框


    // charger event
    GET_CHARGER_INFO: 'getChargerInfo',
    UPDATE_CHARGER_INFO:'updateChargerInfo',  // 更新当前选择的充电桩的信息，包括功率，服务费，电费
    START_CHARGING: 'startCharging'           // 开始充电  
}