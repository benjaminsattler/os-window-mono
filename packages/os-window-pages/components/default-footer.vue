<template>
  <v-footer
    :fixed="false"
    color="#ffba36"
  >
    <v-container
      fluid
    >
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/blob/master/doc/index.md"
            data-track-label="footer-link-documentation"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            Documentation
          </a>
          &middot;
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/releases"
            data-track-label="footer-link-downloads"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            Downloads
          </a>
          &middot;
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window"
            data-track-label="footer-link-sourcecode"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            Source Code
          </a>
          &middot;
          <a
            rel="noopener"
            href="https://www.npmjs.com/package/os-window"
            data-track-label="footer-link-npmjs"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            npm.js
          </a>
          &middot;
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/issues"
            data-track-label="footer-link-bugreport"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            Bugreport
          </a>
          &middot;
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/blob/master/LICENSE"
            data-track-label="footer-link-license"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            License
          </a>
        </v-col>
      </v-row>
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
          class="text-center mt-4"
        >
          Available integrations:
          <a
            href="https://github.com/benjaminsattler/os-window-vue"
            rel="noopener"
            data-track-label="footer-link-integration-vuejs"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            Vue.js
          </a>
          &middot;
          <a
            href="https://github.com/benjaminsattler/os-window-reactjs"
            rel="noopener"
            data-track-label="footer-link-integration-reactjs"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            react.js
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'DefaultFooter',
  data () {
    return {
      trackingConfig: {
        mouseover: ['interaction', 'footer-interaction'],
        mouseout: ['interaction', 'footer-interaction'],
        focus: ['interaction', 'footer-interaction'],
        focusout: ['interaction', 'footer-interaction'],
        click: ['interaction', 'footer-interaction']
      }
    }
  }
}
</script>

<style lang="scss">
  .v-footer {
    box-shadow: inset 0px 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0px 4px 5px 0px rgba(0, 0, 0, 0.14), inset 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

</style>
