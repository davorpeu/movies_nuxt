<template>
  <div>
    <button @click="$emit('input', !value)">hamburger</button>
    <span v-if="wishlist.length >= 0">({{ wishlistCount }})</span>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    value: Boolean
  },
  computed: {
    ...mapState('wishlist', ['wishlistCount', 'wishlist'])
  },
  watch: {
    wishlistCount(newCount) {
      if (process.browser) {
        localStorage.setItem('wishlistCount', newCount)
      }
    }
  },
  created() {
    this.$store.dispatch('wishlist/init')
  },
  methods: {
    ...mapMutations('wishlist', ['setWishlistCount'])
  }
}
</script>

<style lang="scss" scoped></style>
