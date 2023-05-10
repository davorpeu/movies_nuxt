<template>
  <div>
    <button @click="toggleSidebar">hamburger</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped></style>
