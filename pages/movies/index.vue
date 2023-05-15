<template>
  <div>
    <h1>Movies</h1>
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
import axios from 'axios'
import Movie from '@/components/Movie.vue'

export default {
  components: {
    Movie
  },
  data() {
    return {
      movies: [],
      currentPage: 1,
      moviesPerPage: 6
    }
  },
  computed: {
    displayedMovies() {
      const startIndex = (this.currentPage - 1) * this.moviesPerPage
      const endIndex = startIndex + this.moviesPerPage
      return this.movies.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.movies.length / this.moviesPerPage)
    }
  },
  async created() {
    const API_KEY = process.env.API_KEY
    const axiosInstance = axios.create({
      baseURL: `https://api.themoviedb.org/3/movie/`,
      params: {
        api_key: API_KEY,
        sort_by: 'popularity.desc'
      }
    })
    const response = await axiosInstance.get('popular')
    this.movies = response.data.results
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
