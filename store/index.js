import Vue from 'vue'
import Vuex from 'vuex'
import wishlist from './modules/wishlist'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      wishlist
    }
    /* actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.session.user) {
          commit('user', req.session.user)
        } else {
          return
        }
      }
    } */
  })
}

export default store
