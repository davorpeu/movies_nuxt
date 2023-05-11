<template>
  <li>
    <slot></slot><button>detalji</button>
    <NuxtLink v-if="movie" :to="`/movies/${movie.id}`">detalji</NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>
