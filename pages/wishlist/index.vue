<template>
  <div>
    <h1>Wishlist</h1>
    <ul>
      <Movie v-for="movie in displayedMovies" :key="movie.id" :movie="movie">{{
        movie.title
      }}</Movie>
    </ul>
    <div>
      <button v-if="currentPage > 1" @click="previousPage">Previous</button>
      <button v-if="currentPage < totalPages" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
import Movie from '@/components/Movie.vue'

export default {
  components: {
    Movie
  },
  data() {
    return {
      wishlistMovies: [],
      currentPage: 1,
      moviesPerPage: 3
    }
  },
  computed: {
    displayedMovies() {
      const startIndex = (this.currentPage - 1) * this.moviesPerPage
      const endIndex = startIndex + this.moviesPerPage
      return this.wishlistMovies.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.wishlistMovies.length / this.moviesPerPage)
    }
  },
  created() {
    if (typeof localStorage !== 'undefined') {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
      this.wishlistMovies = wishlist
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
  },
  mounted() {
    const queryPage = parseInt(this.$route.query.page)
    if (queryPage && queryPage > 0 && queryPage <= this.totalPages) {
      this.currentPage = queryPage
    }
  }
}
</script>
