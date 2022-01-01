import Vue from 'vue'

class Tracker {
  constructor ({ gtag, oswPageVersion }) {
    this.gtag = gtag
    this.oswPageVersion = oswPageVersion
  }

  onMouseOver (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset
    this.trackEvent({
      trackConfig,
      event: 'mouseover',
      label,
      value
    })
  }

  onMouseOut (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset
    this.trackEvent({
      trackConfig,
      event: 'mouseout',
      label,
      value
    })
  }

  onFocus (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset
    this.trackEvent({
      trackConfig,
      event: 'focus',
      label,
      value
    })
  }

  onFocusOut (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset
    this.trackEvent({
      trackConfig,
      event: 'focusout',
      label,
      value
    })
  }

  onClick (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset

    this.trackEvent({
      trackConfig,
      event: 'click',
      label,
      value
    })
  }

  onHoverChange (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset

    this.trackEvent({
      trackConfig,
      event: 'hover-change',
      label,
      value
    })
  }

  onInteractiveChange (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset

    this.trackEvent({
      trackConfig,
      event: 'interactive-change',
      label,
      value
    })
  }

  onOsThemeChange (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset

    this.trackEvent({
      trackConfig,
      event: 'os-theme-change',
      label,
      value
    })
  }

  onThemeChange (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset

    this.trackEvent({
      trackConfig,
      event: 'theme-change',
      label,
      value
    })
  }

  onWindowTitleChange (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset

    this.trackEvent({
      trackConfig,
      event: 'window-title-change',
      label,
      value
    })
  }

  onWindowStateChange (e) {
    const target = this.findNearestTrackableAncestorToEvent(e)
    if (!target) {
      return
    }
    const {
      trackConfig,
      trackLabel: label,
      trackValue: value
    } = target.dataset

    this.trackEvent({
      trackConfig,
      event: 'window-state-change',
      label,
      value
    })
  }

  findNearestTrackableAncestorToEvent (e) {
    return e.composedPath().find((currentTarget) => {
      return currentTarget.dataset && currentTarget.dataset.trackLabel && currentTarget.dataset.trackConfig
    })
  }

  trackEvent ({ trackConfig, event, label, value }) {
    const jsonTrackConfig = JSON.parse(trackConfig)
    if (event in jsonTrackConfig) {
      return Promise.all(jsonTrackConfig[event].map(
        action => new Promise(
          resolve => this.gtag.event(
            action,
            {
              event_category: event,
              event_label: label,
              event_value: value,
              transport_type: 'beacon',
              event_callback: resolve,
              osw_page_version: this.oswPageVersion
            }
          )
        )
      ))
    }
    return Promise.resolve()
  }
}

Vue.use({
  install: (vue) => {
    const tracker = vue.$tracker = new Tracker({
      gtag: vue.$gtag,
      oswPageVersion: process.env.NUXT_ENV_GTM_OSW_PAGE_VERSION
    })

    const clickHandler = tracker.onClick.bind(tracker)
    const mouseOverHandler = tracker.onMouseOver.bind(tracker)
    const mouseOutHandler = tracker.onMouseOut.bind(tracker)
    const focusHandler = tracker.onFocus.bind(tracker)
    const focusOutHandler = tracker.onFocusOut.bind(tracker)
    const hoverChangeHandler = tracker.onHoverChange.bind(tracker)
    const interactiveChangeHandler = tracker.onInteractiveChange.bind(tracker)
    const osThemeChangeHandler = tracker.onOsThemeChange.bind(tracker)
    const themeChangeHandler = tracker.onThemeChange.bind(tracker)
    const windowTitleChangeHandler = tracker.onWindowTitleChange.bind(tracker)
    const windowStateChangeHandler = tracker.onWindowStateChange.bind(tracker)

    vue.mixin({
      mounted () {
        if (this.$el === this.$root.$el) {
          this.$el.addEventListener('click', clickHandler, { capture: true })
          this.$el.addEventListener('mouseover', mouseOverHandler, { capture: true })
          this.$el.addEventListener('mouseout', mouseOutHandler, { capture: true })
          this.$el.addEventListener('focus', focusHandler, { capture: true })
          this.$el.addEventListener('focusout', focusOutHandler, { capture: true })
          this.$el.addEventListener('hoverChange', hoverChangeHandler, { capture: true })
          this.$el.addEventListener('interactiveChange', interactiveChangeHandler, { capture: true })
          this.$el.addEventListener('osThemeChange', osThemeChangeHandler, { capture: true })
          this.$el.addEventListener('themeChange', themeChangeHandler, { capture: true })
          this.$el.addEventListener('windowTitleChange', windowTitleChangeHandler, { capture: true })
          this.$el.addEventListener('windowStateChange', windowStateChangeHandler, { capture: true })
        }
      },
      beforeDestroy () {
        if (this.$el === this.$root.$el) {
          this.$el.removeEventListener('click', clickHandler, { capture: true })
          this.$el.removeEventListener('mouseover', mouseOverHandler, { capture: true })
          this.$el.removeEventListener('mouseout', mouseOutHandler, { capture: true })
          this.$el.removeEventListener('focus', focusHandler, { capture: true })
          this.$el.removeEventListener('focusout', focusOutHandler, { capture: true })
          this.$el.removeEventListener('hoverChange', hoverChangeHandler, { capture: true })
          this.$el.removeEventListener('interactiveChange', interactiveChangeHandler, { capture: true })
          this.$el.removeEventListener('osThemeChange', osThemeChangeHandler, { capture: true })
          this.$el.removeEventListener('themeChange', themeChangeHandler, { capture: true })
          this.$el.removeEventListener('windowTitleChange', windowTitleChangeHandler, { capture: true })
          this.$el.removeEventListener('windowStateChange', windowStateChangeHandler, { capture: true })
        }
      }
    })
  }
})
