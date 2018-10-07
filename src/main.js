import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wxInit from './utils/wxJSSDK'
import {ERR_TYPE} from "./utils/chargerError";
import {USER_STATUS}  from './store/modules/user'
import {STATUS_EVENT}  from './store/mutation-types'
import { LoginPage,NotChargingPage,ChargingPage } from './common/Pages';
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


// 全局导航守卫，限制在不同状态下可以访问的页面

router.beforeEach((to,from,next)=>{
    let status = store.state.user.userStatus
    // 如果状态为登出，且想进入除了登录，注册，忘记密码其他的页面 ，需要拒绝  
    if(status === USER_STATUS.INVALID && !(LoginPage.indexOf(to.path)>=0)){
        store.commit('stateBox/'+STATUS_EVENT.POP_UP_TOAST,{
           text: '请先登录',
           display: true
        })
     // 如果状态为登录，那么不能访问的页面，登录，注册，忘记密码，充电状态实时显示   
    }else if(status===USER_STATUS.LOGIN && (NotChargingPage.indexOf(to.path)>=0)){
       next({path: '/charger'})
     // 如果状态为充电中，那么不能访问的页面为，登录，注册，忘记密码，输入编号  
    }else if(status===USER_STATUS.CHARGING && (ChargingPage.indexOf(to.path)>=0)){
       next({path: '/charger'})
    }else{
      next()
    }
})