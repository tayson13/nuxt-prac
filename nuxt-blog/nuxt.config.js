export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },
  // customize progress bar

  // loading : {color : 'red', height:'4px', duration: 5000},
  // loadingIndicator: { name: 'circle', color: 'red'},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
  env:{
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-ada2d-default-rtdb.firebaseio.com',
    apiKey: 'AIzaSyBGnOPkQo1spEpZZt8k4D-TWn_M8ECndRw'
  },

  plugins: [
      '~plugins/common-component.js'
  ],

  router:{
    middleware: 'log',
    linkActiveClass: 'active',
    extendRoutes (routes, resolve) {
      routes.push ({
        path: '*',
        component: resolve (__dirname, 'pages/index.vue')
      })
    }
  }
}; 
