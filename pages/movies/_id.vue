<template>
  <div>
    {{ movie.title }}
  </div>
</template>

<script>
export default {
  auth: true,
  data() {
    return {
      movie: {}
    }
  },
  async created() {
    const id = this.$route.params.id
    const response = await this.$axiosInstance.get(`${id}`)
    this.movie = response.data
  },
  head() {
    return {
      title: this.movie.title || 'Movies'
    }
  }
}
</script>

<style lang="scss" scoped></style>
