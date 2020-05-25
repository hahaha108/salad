import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('isLogin') == 1 ? true : false
  },
  getters: {
    getIsLogin(state) {
      return state.isLogin
    }
  },
  mutations: {
    SET_ISLOGIN(state, v) {
      return (state.isLogin = v)
    }
  },
  modules: {}
})
