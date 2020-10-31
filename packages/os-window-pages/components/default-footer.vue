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
          <a rel="noopener" href="https://github.com/benjaminsattler/os-window/blob/master/doc/index.md">
            Documentation
          </a>
          &middot;
          <a rel="noopener" href="https://github.com/benjaminsattler/os-window/releases">
            Downloads
          </a>
          &middot;
          <a rel="noopener" href="https://github.com/benjaminsattler/os-window">
            Source Code
          </a>
          &middot;
          <a rel="noopener" href="https://www.npmjs.com/package/os-window">
            npm.js
          </a>
          &middot;
          <a rel="noopener" href="https://github.com/benjaminsattler/os-window/issues">
            Bugreport
          </a>
          &middot;
          <a rel="noopener" href="https://github.com/benjaminsattler/os-window/blob/master/LICENSE">
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
          >
            Vue.js
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'DefaultFooter'
}
</script>

<style lang="scss">
  .v-footer {
    box-shadow: inset 0px 2px 4px -1px rgba(0, 0, 0, 0.2), inset 0px 4px 5px 0px rgba(0, 0, 0, 0.14), inset 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

</style>
