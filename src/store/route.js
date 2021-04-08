export default {
  state: { 
    route:""
  },
  mutations: {
    setPath(state, newPath){
      state.msName = newPath;
    }
  },
  actions: {
    callMutation({ state, commit },{newPath}){
      commit('setPath', newPath)
      console.log(state);
    }
  },
  getters: {
    getRoute(state){
      return `${state.msName} => ${state.msName}`
    }
  }
}