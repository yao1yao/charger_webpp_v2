import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import {persistentStore} from './plugins/persistentStore'
import user from './modules/user'
import stateBox from './modules/stateBox'
import charger from './modules/charger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules:{
        user,
        stateBox,
        charger
    },
    strict: debug,
    plugins: debug ? [createLogger(),persistentStore]:[persistentStore]
})