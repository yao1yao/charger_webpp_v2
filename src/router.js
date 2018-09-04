import Vue from 'vue'
import Router from 'vue-router'
import Charging from './views/Charging'
import User from './views/User'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/charger', component: Charging}
    {path: '/user', component: User}
  ]
})
