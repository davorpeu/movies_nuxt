<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <movie v-for="movie in movies" :key="movie.id" :movie="movie">{{
        movie.title
      }}</movie>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import movie from './movie.vue'
export default {
  components: {
    movie
  },
  data() {
    return {
      movies: []
    }
  },
  async created() {
    const API_KEY = process.env.API_KEY
    const axiosInstance = axios.create({
      baseURL: `https://api.themoviedb.org/3/movie/`,
      params: {
        api_key: API_KEY
      }
    })
    const response = await axiosInstance.get('popular')
    this.movies = response.data.results
  }
}
</script>
