Copy code
<template>
  <div>
    <nav>
      <div
        class="fixed top-0 left-0 z-49 w-full h-full lg:w-[300px] lg:left-auto p-4 lg:p-6 bg-white bg-opacity-90 shadow-lg"
      >
        <NuxtLink
          class="block mb-4 text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
          to="/movies"
          >Movies</NuxtLink
        >
        <NuxtLink
          class="block mb-4 text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
          to="/wishlist"
          >Wishlist</NuxtLink
        >
        <NuxtLink
          v-if="$cookies.get('token')"
          class="block text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
          @click="logout"
          to="/login"
        >
          Logout
        </NuxtLink>
        <NuxtLink
          v-else
          class="block mb-4 text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
          to="/login"
          >Login</NuxtLink
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {},
  methods: {
    logout() {
      // Perform the logout action
      // Redirect to the login page or any other desired location
      this.$cookies.remove('token')
      window.location.href = '/login'
    }
  }
}
</script>

<style lang="scss" scoped></style>
