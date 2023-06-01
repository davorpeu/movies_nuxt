<template>
  <div class="">
    <div
      @click="$emit('input', !value)"
      class="absolute z-50 flex flex-col"
      :class="{ 'left-64': value }"
    >
      <span
        class="block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300"
        :class="{ 'rotate-45': value, 'translate-y-2': value }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 opacity-100"
        :class="{ hidden: value, 'translate-x-6': value }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300"
        :class="{ '-rotate-45': value, 'translate-y-[-2px]': value }"
      ></span>
    </div>
    <span class="flex justify-end" v-if="wishlist.length > 0"
      >({{ wishlistCount }})</span
    >
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

<style scoped></style>
