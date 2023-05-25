<template>
  <div class="flex">
    <div
      class="p-2 space-y-2 bg-gray-600 rounded shadow w-fit m-auto"
      @click="$emit('input', !value)"
    >
      <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
    </div>
    <span v-if="$auth.loggedIn >= 0">({{ $auth.user }})</span>

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
