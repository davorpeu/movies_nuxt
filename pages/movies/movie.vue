<template>
  <li>
    <slot></slot>
    <NuxtLink :to="{ name: 'movies-id', params: { id: movie.id } }"
      >Detalji</NuxtLink
    >
    <button @click="addToWishlist">Add to Wishlist</button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations('wishlist', ['addItem']),
    addToWishlist() {
      this.addItem(this.movie)
    }
  }
}
</script>
