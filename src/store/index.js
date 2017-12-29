import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {}
}

const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

const actions = {
  setUser (context, user) {
    console.log(user.displayName)
    context.commit('SET_USER', user)
  }
}

const getters = {
// getters for userName, userEmail, userPhoto, etc.
  getUser: (state) => { return state.user }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
