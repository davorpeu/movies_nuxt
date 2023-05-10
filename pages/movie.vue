<template>
  <li>
    <slot></slot><button>detalji</button>
    <NuxtLink to="/movies/id">detalji</NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'movie'
}
</script>
