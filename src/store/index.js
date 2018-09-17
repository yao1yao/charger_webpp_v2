import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import {persistentStore} from './plugins/persistentStore'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules:{
        user
    },
    strict: debug,
    plugins: debug ? [createLogger(),persistentStore]:[persistentStore]
})