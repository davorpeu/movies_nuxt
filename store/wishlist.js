import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: () => ({
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
    }),

    mutations: {
      addItem(state, item) {
        state.wishlist.push(item)
      },
      removeItem(state, item) {
        state.wishlist = state.wishlist.filter((i) => i !== item)
      }
    }
  })

export default store
