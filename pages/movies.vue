<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <movie v-for="movie in movies" :key="movie.id">{{ movie.title }}</movie>
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
  async fetch() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
      )
      .then((response) => {
        this.movies = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
