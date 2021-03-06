import Vue from 'vue'
import Router from 'vue-router'
import Charging from './views/Charging'
import User from './views/User'
import InputIdentify from './views/InputIdentify'
import ChargingStatus from './views/ChargingStatus'
import ChargerRecord from './views/ChargerRecord'
import ChargerDetail from './views/ChargerDetail'
import FeedBack from './views/FeedBack'
import Settings from  './views/Settings'
import Login from './views/Login'
import Register from './views/Register'
import ForgotPassword from './views/ForgotPassword'
import Course from './views/Course'
import RechargeRecord from './views/RechargeRecord'
import Account from './views/Account'
import Recharge from './views/Recharge'
import MonthlyFee from './views/MonthlyFee'
import ModifyDatum from './views/ModifyDatum.vue'
import ViewError from './views/Error.vue'
import Focus from './views/Focus.vue'
import CompanyAuth from './views/CompanyAuth.vue'
import AboutUs from './views/AboutUs.vue'
import Home from './views/Home.vue'
import WithDraw from './views/WithDraw.vue'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {path: '/charger', component: Charging},
    {path: '/user', component: User},
    {path: '/charger-start', component: InputIdentify},
    {path: '/charger/status', component: ChargingStatus},
    {path: '/charger/record', component: ChargerRecord},
    {path: '/charger/detail', component: ChargerDetail},
    {path: '/feedback', component: FeedBack},
    {path: '/settings', component: Settings},
    {path: '/register',component: Register},
    {path: '/login', component: Login},
    {path: '/forgot-password',component: ForgotPassword},
    {path: '/course',component: Course},
    {path: '/recharge-record',component: RechargeRecord},
    {path: '/account',component: Account},
    {path: '/recharge',component: Recharge},
    {path: '/monthly-fee',component: MonthlyFee},
    {path: '/error',component: ViewError},
    {path: '/focus',component: Focus},
    {path: '/modify-datum',component: ModifyDatum},
    {path: '/company-auth',component: CompanyAuth},
    {path: '/home',name:'home',component: Home},
    {path: '/about-us',component: AboutUs},
    {path: '/withdraw',component: WithDraw},
    {path: '*', redirect: '/home' }
  ]
})
