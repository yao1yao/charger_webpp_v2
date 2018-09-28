import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wxInit from './utils/wxJSSDK'
import {ERR_TYPE} from "./utils/chargerError";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted:function(){
    wxInit().then(function(wx){
      Vue.prototype.wx = wx;
    }).catch(function(err){
      if(err.errCode && err.errCode === ERR_TYPE.VALID_AGENT.code){
        router.push('/error')
      }
    })
  },
  render: h => h(App)
}).$mount('#app')


