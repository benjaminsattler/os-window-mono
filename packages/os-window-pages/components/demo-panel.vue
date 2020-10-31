<template>
  <v-row>
    <v-col sm="12" md="12" lg="6">
      <div>
        <os-window-vue
          :class="'demo-window'"
          :theme="theme"
          :os-theme="osTheme"
          :window-state="windowState"
          :interactive="interactive"
          :hover="hover"
          :window-title="windowTitle"
          @window-state-change="onWindowStateChange"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et gravida massa. Mauris est metus, egestas eget mi et, condimentum sodales nisi. Nulla eu odio pellentesque, ultrices purus ut, finibus nisi. In mollis fermentum libero condimentum porta. Cras vehicula venenatis lectus, et auctor ipsum. Nullam vulputate a urna commodo sodales. Nunc sagittis sapien eros, a faucibus purus condimentum et.
        </os-window-vue>
      </div>
    </v-col>
    <v-col sm="12" md="12" lg="6">
      <v-switch v-model="theme" color="orange lighten-1" :false-value="'light'" :true-value="'dark'">
        <template v-slot:label>
          Dark Mode&nbsp;
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">
                mdi-information-outline
              </v-icon>
            </template>
            You can switch the window between dark mode and light mode
          </v-tooltip>
        </template>
      </v-switch>
      <v-switch v-model="windowState" color="orange lighten-1" :false-value="'maximized'" :true-value="'minimized'">
        <template v-slot:label>
          Minimize&nbsp;
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">
                mdi-information-outline
              </v-icon>
            </template>
            You can minimize or maximize the window. A minimized window will only show its titlebar
          </v-tooltip>
        </template>
      </v-switch>
      <v-switch v-model="interactive" color="orange lighten-1">
        <template v-slot:label>
          Enable window buttons&nbsp;
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">
                mdi-information-outline
              </v-icon>
            </template>
            Enabled maximize and minimize window buttons respond to click events and cause the window to change its state respectively
          </v-tooltip>
        </template>
      </v-switch>
      <v-switch v-model="hover" color="orange lighten-1" label="Window button icon labels on mouse hover">
        <template v-slot:label>
          Enable button hover effects&nbsp;
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">
                mdi-information-outline
              </v-icon>
            </template>
            When enabled then the button labels show when the mouse hovers over them
          </v-tooltip>
        </template>
      </v-switch>
      <v-select
        v-model="osTheme"
        :items="availableOsThemes"
        label="Os-Theme"
      />
      <v-text-field v-model="windowTitle" color="orange lighten-1" label="Window Titlebar text" />
    </v-col>
  </v-row>
</template>

<script>
import OsWindowVue from 'os-window-vue'

export default {
  name: 'DemoPanel',
  components: {
    OsWindowVue
  },
  data: () => {
    return {
      theme: 'light',
      windowState: 'maximized',
      interactive: true,
      hover: true,
      windowTitle: 'Demo Window Title',
      osTheme: 'mac',
      availableOsThemes: ['mac', 'win-xp', 'win-7']
    }
  },
  methods: {
    onWindowStateChange ({ newWindowState }) {
      this.windowState = newWindowState
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-window {
  overflow: hidden;

  &::first-letter {
    font-size: 3rem;
    font-family: serif;
    border-width: 2px;
    border-style: solid;
    margin: 0 .8rem 0 0;
    padding: .5rem;
    float: left;
  }
}
</style>
