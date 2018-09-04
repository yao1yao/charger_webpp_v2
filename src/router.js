import Vue from 'vue'
import Router from 'vue-router'
import Charging from './views/Charging'
import User from './views/User'
import InputIdentify from './views/InputIdentify'
import ChargingStatus from './views/ChargingStatus'
import ChargerRecord from './views/ChargerRecord'
import ChargerDetail from './views/ChargerDetail'
import FeedBack from './views/FeedBack'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {path: '/charger', component: Charging},
    {path: '/user', component: User},
    {path: '/charger/input_identify', component: InputIdentify},
    {path: '/charger/status', component: ChargingStatus},
    {path: '/charger/record', component: ChargerRecord},
    {path: '/charger/detail', component: ChargerDetail},
    {path: '/user/feedback', component: FeedBack},

  ]
})
