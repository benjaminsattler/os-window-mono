import Vue from 'vue'

Vue.use({
  install: (vue) => {
    const tracker = new Proxy(vue.$gtag, {
      get () {
        if (!window.gtag) {
          return function () {}
        }
        return Reflect.get(...arguments)
      }
    })
    vue.$gtag = vue.prototype.$gtag = tracker
  }
})
