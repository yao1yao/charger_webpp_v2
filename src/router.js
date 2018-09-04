import Vue from 'vue'
import Router from 'vue-router'
import Charging from './views/Charging'
import User from './views/User'
import InputIdentify from './views/InputIdentify'
import ChargingStatus from './views/ChargingStatus'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {path: '/charger', component: Charging},
    {path: '/user', component: User},
    {path: '/charger/input_identify', component: InputIdentify},
    {path: '/charger/status', component: ChargingStatus}
  ]
})
