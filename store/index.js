import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    LOGIN (state, token) {
      state.token = token
    },
    LOGOUT (state) {
      state.token = null
    }
  }
})

export default store
