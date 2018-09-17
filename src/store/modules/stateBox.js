import { STATUS_EVENT } from './../mutation-types'

const state = {
    toast: {
        text: '',
        showTime: 1000,
        display: false
    },
    loading: false,
}

/**
 * @property {Object} state.toast - 存储toast状态
 */
const mutations = {
    [STATUS_EVENT.POP_UP_TOAST] (state, status) {
      state.toast = status
    },
    [STATUS_EVENT.SENDREQUEST] (state, status) {
        state.loading = status
      }
  }


export default {
    namespaced: true,
    state,
    mutations,
  }