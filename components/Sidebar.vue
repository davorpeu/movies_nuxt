<template>
  <div>
    <nav>
      <div
        class="flex flex-col fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
      >
        <a
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="/"
          >Home</a
        >
        <a
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="/movies"
          >Movies</a
        >
        <a
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="/wishlist"
          >Wishlist</a
        >
        <button
          v-if="isAuthenticated"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
    const isAuthenticated = true // Replace with the actual check for authentication status

    const handleLogout = () => {
      // Perform the logout action
      // Redirect to the login page or any other desired location
      window.location.href = '/'
    }

    return {
      isAuthenticated,
      logout: handleLogout
    }
  }
}
</script>

<style lang="scss" scoped></style>
