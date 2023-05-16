<template>
  <div>
    <h1>Wishlist</h1>
    <ul>
      <li v-for="movie in displayedMovies" :key="movie.id">
        <Movie v-if="!isLoading" :movie="movie">{{ movie.title }}</Movie>
      </li>
    </ul>
    <div class="flex items-center">
      <button
        v-if="currentPage > 1"
        @click="previousPage"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Previous
      </button>

      <button
        v-if="currentPage < totalPages"
        @click="nextPage"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Movie from '@/components/Movie.vue'

export default {
  components: {
    Movie
  },
  data() {
    return {
      currentPage: 1,
      moviesPerPage: 4,
      isLoading: true,
      key: 1 // add a key to force re-render
    }
  },
  computed: {
    ...mapState({
      wishlistMovies: (state) => (state.wishlist ? state.wishlist.wishlist : [])
    }),
    displayedMovies() {
      if (this.moviesPerPage >= this.wishlistMovies.length) {
        return this.wishlistMovies
      }

      const startIndex = (this.currentPage - 1) * this.moviesPerPage
      const endIndex = startIndex + this.moviesPerPage
      return this.wishlistMovies.slice(startIndex, endIndex)
    },

    totalPages() {
      return Math.ceil(this.wishlistMovies.length / this.moviesPerPage)
    }
  },

  created() {
    this.isLoading = false
  },
  head() {
    return {
      title: 'Wishlist'
    }
  },
  methods: {
    nextPage() {
      this.currentPage++
      this.$router.push({ query: { page: this.currentPage } })
    },
    previousPage() {
      this.currentPage--
      this.$router.push({ query: { page: this.currentPage } })
    }
  }
}
</script>
