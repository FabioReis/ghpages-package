/**
 * Created by liuqi453 on 10/12/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

// 引入不同页面自由的 module
/* inject:import start */
import DefaultView from './modules/defaultView'
import Index from './modules/index'
/* inject:import end */

Vue.use(Vuex)

const state = {
  defaultState: 'defaultState'
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',
  plugins,
  modules: {
    /* inject start */
    defaultView: DefaultView,
    index: Index
    /* inject end */

  }
})
