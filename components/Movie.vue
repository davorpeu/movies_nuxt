<template>
  <li class="flex-row items-center">
    <slot></slot>
    <NuxtLink
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      :to="{ name: 'movies-id', params: { id: movie.id } }"
      >Details</NuxtLink
    >
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      v-if="!isInWishlist"
      @click="addToWishlist"
    >
      Add to Wishlist
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      v-else
      @click="removeFromWishlist"
    >
      Remove from Wishlist
    </button>
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
