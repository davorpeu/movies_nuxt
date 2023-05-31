<template>
  <li class="text-sm text-gray-900 list-none flex justify-between p-2">
    <slot></slot>
    <div>
      <NuxtLink
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        :to="{ name: 'movies-id', params: { id: movie.id } }"
        >Details</NuxtLink
      >
      <button
        v-if="!isInWishlist"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="addToWishlist"
      >
        Add to Wishlist
      </button>
      <button
        v-else
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="removeFromWishlist"
      >
        Remove from Wishlist
      </button>
    </div>
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
