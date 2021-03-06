export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1,user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/front-end/favicon.ico" },
      { rel: "stylesheet", href: "/front-end/css/iconfont/iconfont.css" }
    ],
    script: [
      {
        type: "application/javascript",
        src: "/front-end/js/fastclick.js"
      },
      { type: "application/javascript", src: "/front-end/js/initFastclick.js" }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/mint-ui", "~/plugins/vue-inject.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    "/api2": {
      target: "http://localhost:5000",
      changeOrigin: true
    }
  },
  server: {
    port: 7000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  router: {
    base: "/front-end/",
    extendRoutes(router) {
      router.push({
        path: "/",
        redirect: "/home"
      });
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:5000"
  }
};
