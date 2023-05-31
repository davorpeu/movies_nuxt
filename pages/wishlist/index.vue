<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Wishlist</h1>
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <!-- Add more table headers as needed -->
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            class="px-6 py-4 whitespace-nowrap"
            v-for="movie in displayedMovies"
            :key="movie.id"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <Movie v-if="!isLoading" :movie="movie">{{ movie.title }}</Movie>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav class="flex justify-end mt-4" aria-label="Pagination">
      <button
        @click="previousPage"
        class="px-4 py-2 ml-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        class="px-4 py-2 ml-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
      >
        Next
      </button>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Movie from '@/components/Movie.vue'

export default {
  auth: true,
  components: {
    Movie
  },
  data() {
    return {
      currentPage: 1,
      moviesPerPage: 4,
      isLoading: true
    }
  },
  computed: {
    ...mapState({
      wishlistMovies: (state) => (state.wishlist ? state.wishlist.wishlist : [])
    }),
    displayedMovies() {
      if (this.moviesPerPage >= this.wishlistMovies.length) {
        return this.wishlistMovies
      }

      const startIndex = (this.currentPage - 1) * this.moviesPerPage
      const endIndex = startIndex + this.moviesPerPage
      return this.wishlistMovies.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.wishlistMovies.length / this.moviesPerPage)
    }
  },
  created() {
    this.isLoading = false
  },
  methods: {
    nextPage() {
      this.currentPage++
      this.$router.push({ query: { page: this.currentPage } })
    },
    previousPage() {
      this.currentPage--
      this.$router.push({ query: { page: this.currentPage } })
    }
  },
  head() {
    return {
      title: 'Wishlist'
    }
  }
}
</script>
