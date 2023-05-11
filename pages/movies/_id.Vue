<template>
  <div>
    <div>Favorite</div>
    {{ movie.title }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movie: {}
    }
  },
  async created() {
    const id = this.$route.params.id
    const API_KEY = process.env.API_KEY
    const axiosInstance = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: API_KEY
      }
    })
    const response = await axiosInstance.get(`/movie/${id}`)
    this.movie = response.data
  }
}
</script>

<style lang="scss" scoped></style>
