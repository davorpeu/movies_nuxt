export default function({ $axios }, inject) {
  const API_KEY = process.env.API_KEY
  const axiosInstance = $axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/`,
    params: {
      api_key: API_KEY
    }
  })
  // Inject to context as $api
  inject('axiosInstance', axiosInstance)
}
