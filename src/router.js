import Vue from 'vue'
import Router from 'vue-router'
import Charging from './views/Charging'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/charger', component: Charging}
  ]
})
