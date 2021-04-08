import Vue from 'vue'
import Vuex from 'vuex'
import profile from './profile'
import route from './route'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    profile,
    route
  }
})
