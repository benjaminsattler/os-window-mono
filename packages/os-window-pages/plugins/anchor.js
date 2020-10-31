import Vue from 'vue'

Vue.use({
  install: (Vue) => {
    Vue.directive('anchor', {
      bind: (el, binding) => {
        const anchorNode = document.createElement('a')
        anchorNode.setAttribute('href', `#${el.getAttribute('id')}`)
        anchorNode.classList.add('headline-anchor')
        anchorNode.setAttribute('title', 'Direct link to this anchor')

        anchorNode.appendChild(document.createTextNode('#'))
        el.insertBefore(anchorNode, el.firstChild)
      }
    })
  }
})
