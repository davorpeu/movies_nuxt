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
  serverMiddleware: [
    // ...

    // Add the API route
    { path: '/api/auth', handler: '~/api/auth/login.js' }
  ],

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
      cookie: {
        cookie: {
          // (optional) If set, we check this cookie existence for loggedIn check
          name: 'XSRF-TOKEN'
        },
        endpoints: {
          // (optional) If set, we send a get request to this endpoint before login
          csrf: {
            url: ''
          }
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/movies'
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
