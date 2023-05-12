<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <Movie v-for="movie in movies" :key="movie.id" :movie="movie">{{
        movie.title
      }}</Movie>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Movie from '../../components/Movie.vue'
export default {
  components: {
    Movie
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
