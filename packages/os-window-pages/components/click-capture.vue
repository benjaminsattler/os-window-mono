<template>
  <span ref="wrapper">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'ClickCapture',
  data () {
    return {
      handler: null,
      fn: this.onClick.bind(this),
      eventListenerOptions: {
        capture: true
      }
    }
  },
  mounted () {
    this.attach()
  },
  beforeDestroy () {
    this.detach()
  },
  methods: {
    attach () {
      this.$root.$el.addEventListener('click', this.fn, this.eventListenerOptions)
    },
    detach () {
      this.$root.$el.removeEventListener('click', this.fn, this.eventListenerOptions)
    },
    onClick (e) {
      if (!this.$refs.wrapper.contains(e.target)) {
        this.$emit('clickOutside', e)
      }
    }
  }
}
</script>
