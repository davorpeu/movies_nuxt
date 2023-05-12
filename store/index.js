import Vue from 'vue'
import Vuex from 'vuex'
import wishlist from './modules/wishlist'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      wishlist
    }
  })
}

export default store
