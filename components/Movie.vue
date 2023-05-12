<template>
  <li>
    <slot></slot>
    <NuxtLink :to="{ name: 'movies-id', params: { id: movie.id } }"
      >Details</NuxtLink
    >
    <button v-if="!isInWishlist" @click="addToWishlist">Add to Wishlist</button>
    <button v-else @click="removeFromWishlist">Remove from Wishlist</button>
  </li>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState({
      wishlist: (state) => (state.wishlist ? state.wishlist.wishlist : [])
    }),
    isInWishlist() {
      return this.wishlist.some((item) => item.id === this.movie.id)
    }
  },

  methods: {
    ...mapMutations('wishlist', ['addItem', 'removeItem']),
    addToWishlist() {
      this.addItem(this.movie)
    },
    removeFromWishlist() {
      this.removeItem(this.movie)
    }
  }
}
</script>
