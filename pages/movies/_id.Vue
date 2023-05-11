<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>

export default {


  async asyncData({ $axios, params }) {
    const response = await $axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
    );
    return {
      movie: response.data,
    };
  },
};
</script>

<style lang="scss" scoped></style>
