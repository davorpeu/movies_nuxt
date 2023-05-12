import Vue from 'vue'
import Vuex from 'vuex'
import wishlist from './modules/wishlist'

Vue.use(Vuex)

export default function() {
  return new Vuex.Store({
    modules: {
      wishlist
    }
  })
}
