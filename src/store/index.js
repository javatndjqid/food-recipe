import Vue from 'vue'
import Vuex from 'vuex'
import profile from './profile'
import route from './route'
import createPersistedState from 'vuex-persistedstate'

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
  },
  plugins:[
    createPersistedState({paths:['route'],
    })
  ]
})


// http://blog.knowgari.com/state%EC%B4%88%EA%B8%B0%ED%99%94%EB%A7%89%EA%B8%B0/