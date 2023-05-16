<template>
  <div>
    {{ movie.title }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {}
    }
  },

  async created() {
    const id = this.$route.params.id
    const response = await this.$axiosInstance.get(`${id}`)
    this.movie = response.data
  }
}
</script>

<style lang="scss" scoped></style>
