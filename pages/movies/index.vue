<template>
  <div>
    <div class="overflow-x-auto mt-8">
      <table class="min-w-full border border-gray-300 list-none">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">
              <h1 class="text-2xl font-bold mb-4">Movies</h1>
            </th>
            <!-- Add more table headers as needed -->
          </tr>
        </thead>
        <tbody>
          <Movie
            v-for="movie in displayedMovies"
            :key="movie.id"
            :movie="movie"
          >
            <tr class="hover:bg-gray-100">
              <td class="py-2 px-4 border-b">{{ movie.title }}</td>
              <!-- Add more table cells with movie data as needed -->
            </tr>
          </Movie>
        </tbody>
      </table>
    </div>

    <div class="flex justify-between items-center mt-4">
      <button
        @click="previousPage"
        :disabled="currentPage <= 1"
        class="py-2 px-4 border rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        v-if="currentPage < totalPages"
        class="ml-2 py-2 px-4 border rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import Movie from '@/components/Movie.vue'

export default {
  auth: true,
  components: {
    Movie
  },
  data() {
    return {
      movies: [],
      currentPage: 1,
      moviesPerPage: 6
    }
  },
  computed: {
    displayedMovies() {
      const startIndex = (this.currentPage - 1) * this.moviesPerPage
      const endIndex = startIndex + this.moviesPerPage
      return this.movies.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.movies.length / this.moviesPerPage)
    }
  },
  async beforeCreate() {
    const response = await this.$axiosInstance.get('popular')
    this.movies = await response.data.results
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    }
  }
}
</script>
