export default {
  namespaced: true,
  state: () => ({
    wishlist: process.browser
      ? JSON.parse(localStorage.getItem('wishlist')) || []
      : []
  }),
  mutations: {
    addItem(state, item) {
      state.wishlist.push(item)
      if (process.browser) {
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
      }
    },
    removeItem(state, item) {
      state.wishlist = state.wishlist.filter((i) => i !== item)
      if (process.browser) {
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
      }
    }
  }
}
