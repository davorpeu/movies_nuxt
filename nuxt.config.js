export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  router: {
    middleware: ['auth']
  },
  serverMiddleware: ['~/middleware/redirects'],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000000', throttle: 0 },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/axios.js', mode: 'client' },
    { src: '~/plugins/auth.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/auth-next'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */ auth: {
    strategies: {
      local: {
        login: { url: '/sessions', method: 'post', propertyName: 'token' },
        logout: false,
        user: {
          property: false,
          autoFetch: false
        }
        // tokenRequired: true,
      }
    }
  },
  axios: {},
  /*
   ** Build configuration
   */
  env: {
    API_KEY: process.env.API_KEY
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    },
    extend(config, ctx) {}
  }
}
