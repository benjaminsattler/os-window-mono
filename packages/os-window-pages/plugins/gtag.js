import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: {
    id: process.env.GTM_MEASUREMENT_ID,
    debug_mode: process.env.GTM_DEBUG_MODE
  },
  bootstrap: false
})
