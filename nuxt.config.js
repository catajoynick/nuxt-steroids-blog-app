export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog Application',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"}
    ]
  },
  loading: { color: '#fa923f', duration: 5000},
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
       [
        '@nuxtjs/firebase',
          {
            config: {
              apiKey: "AIzaSyCYVM7hEVXPdqUE1jcwf4PVyy01V-vv9Kk",
              authDomain: "nuxt-blog-fd377.firebaseapp.com",
              databaseURL: "https://nuxt-blog-fd377-default-rtdb.firebaseio.com",
              projectId: "nuxt-blog-fd377",
              storageBucket: "nuxt-blog-fd377.appspot.com",
              messagingSenderId: "1009041324899",
              appId: "1:1009041324899:web:f5b31a5faf30f65fccb156",
              measurementId: "G-9TDT0F1PNQ"
                        },
            services: {
              database: true
            }
          }
      ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  serverMiddleware: []
}
