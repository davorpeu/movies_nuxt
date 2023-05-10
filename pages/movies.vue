<template>
  <div>
    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
