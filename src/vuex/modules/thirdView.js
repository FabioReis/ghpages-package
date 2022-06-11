/**
 * Created by liuqi453 on 10/20/16.
 */
// import Vue from 'vue'
// import url from '../../config/url'
import * as types from '../../views/ThirdView/types'

export default {
  state: {
    thirdViewState: 'Default State'
  },
  getters: {
    [types.GETTER_STATE] (state) {
      return state.thirdViewState
    }
  },
  mutations: {
      /*
       [types.UPDATE_STATE] (state, payload) {
       state.loginState = payload ? 'login success!' : 'login failed...'
       state.needVerify = !payload
       }
       */
  },
  actions: {
      /*
       [types.LOGIN_ACTION] ({commit}, payload) {
       return Vue.http.post(url.mobileDeviceLogin3, payload)
       }
       */
  }
}
