import {localStore} from '../../utils/localStore'
import router from  '../../router'


export const USER_STATUS = {
    CHARGING: 'charging',
    LOGIN : 'login',
    INVALID: 'invalid'
}

/**
 * @typedef {Object} state
 * @property {object} state.userInfo - 存储用户基本信息
 * 
 */
const state = localStore.get('state') || {
    userInfo:{}
}

const actions={

}

const mutations = {

}

export default{
    namespaced: true,
    state,
    actions,
    mutations
}