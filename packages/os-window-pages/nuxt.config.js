const resolve = require('path').resolve;

const options = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Os-Window Web component',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A web component (also known as custom element) based library which provides window decorations from the most common operating systems.' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/anchor.js',
    '~/plugins/os-window-vue',
    '~/plugins/gtag',
    '~/plugins/tracker'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  modulesDir: resolve(__dirname, '../../node_modules/'),
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    ['@nuxtjs/vuetify', { treeShake: true }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['os-window', 'os-window-vue'],
    extractCSS: true
  },
  router: {
    /* scrollBehavior: (to, from, savedPosition) => {
      let scrollTo = 0

      if (to.hash) {
        scrollTo = to.hash
      } else if (savedPosition) {
        scrollTo = savedPosition.y
      }

      return goTo(scrollTo)
    } */
  },
  env: {
    GTM_DEBUG_MODE: process.env.NODE_ENV === 'development',
    GTM_MEASUREMENT_ID: 'G-B0ZYPFV01T',
    NUXT_ENV_GTM_OSW_PAGE_VERSION: process.env.NUXT_ENV_GTM_OSW_PAGE_VERSION || 'dev'
  }
}

const cssAssets = [
  '~/assets/global.scss'
]

if (process.env.NODE_ENV === 'development') {
  cssAssets.push('~/assets/debug-tracking.scss')
  cssAssets.push('~/node_modules/roboto-fontface/css/roboto/sass/roboto-fontface.scss')
  cssAssets.push('~/node_modules/@mdi/font/scss/materialdesignicons.scss')
}
options.css = cssAssets

const link = [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
]
options.head.link = link

const vuetify = {
  customVariables: ['~/assets/variables.scss'],
  defaultAssets: {
    font: {
      family: 'Roboto'
    },
    icons: 'mdi'
  },
  theme: { }
}
if (process.env.NODE_ENV === 'development') {
  vuetify.defaultAssets = false
}

options.vuetify = vuetify
export default options
