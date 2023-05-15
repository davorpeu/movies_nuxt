<template>
  <div>
    <h1
      class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center"
    >
      Movies
    </h1>
    <div class="flex flex-col items-center">
      <ul class="list-none flex flex-col ">
        <Movie
          v-for="movie in displayedMovies"
          :key="movie.id"
          :movie="movie"
          >{{ movie.title }}</Movie
        >
      </ul>
    </div>

    <div class="flex flex-wrap justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        v-if="currentPage > 1"
        @click="previousPage"
      >
        Previous
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        v-if="currentPage < totalPages"
        @click="nextPage"
      >
        Next
      </button>
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
  mounted() {
    const queryPage = parseInt(this.$route.query.page)
    if (queryPage && queryPage > 0 && queryPage <= this.totalPages) {
      this.currentPage = queryPage
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
