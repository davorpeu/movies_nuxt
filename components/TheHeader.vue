<template>
  <div>
    <button @click="$emit('input', !value)">hamburger</button>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  }
}
</script>

<style lang="scss" scoped></style>
