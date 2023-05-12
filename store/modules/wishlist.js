export default {
  namespaced: true,
  state: () => ({
    wishlist: [],
    wishlistCount: 0
  }),

  mutations: {
    addItem(state, item) {
      if (!state.wishlist.some((i) => i.id === item.id)) {
        state.wishlist.push(item)
        if (process.browser) {
          localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
          localStorage.setItem('wishlistCount', state.wishlist.length)
        }
        state.wishlistCount = state.wishlist.length
      }
    },

    removeItem(state, item) {
      state.wishlist = state.wishlist.filter((i) => i.id !== item.id)
      if (process.browser) {
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        localStorage.setItem('wishlistCount', state.wishlist.length)
      }
      state.wishlistCount = state.wishlist.length
    },

    setWishlist(state, wishlist) {
      state.wishlist = wishlist
    },

    setWishlistCount(state, count) {
      state.wishlistCount = count
    }
  },

  getters: {
    isInWishlist: (state) => (movie) => {
      return state.wishlist.includes(movie)
    },
    wishlistCount: (state) => {
      return state.wishlistCount
    }
  },

  actions: {
    init({ commit }) {
      if (process.browser) {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        const wishlistCount =
          JSON.parse(localStorage.getItem('wishlistCount')) || 0
        commit('setWishlist', wishlist)
        commit('setWishlistCount', wishlistCount)
      }
    }
  }
}
