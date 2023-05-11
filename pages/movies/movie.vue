<template>
  <li>
    <slot></slot>
    <NuxtLink :to="{ name: 'movies-id', params: { id: movie.id } }"
      >Detalji</NuxtLink
    >
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
