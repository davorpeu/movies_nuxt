Copy code
<template>
  <div>
    <nav>
      <div
        class="fixed top-0 left-0 z-49 w-full h-full lg:w-[300px] lg:left-auto p-4 lg:p-6 bg-white bg-opacity-90 shadow-lg"
      >
        <a
          class="block mb-4 text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
          href="/login"
          >Login</a
        >
        <a
          class="block mb-4 text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
          href="/movies"
          >Movies</a
        >
        <a
          class="block mb-4 text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
          href="/wishlist"
          >Wishlist</a
        >
        <button
          class="block text-lg font-medium text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    const handleLogout = () => {
      // Perform the logout action
      // Redirect to the login page or any other desired location
      window.location.href = '/login'
    }

    return {
      logout: handleLogout
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
