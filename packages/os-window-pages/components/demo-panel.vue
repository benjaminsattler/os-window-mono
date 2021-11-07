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
          data-track-label="os-window-demo"
          :data-track-config="JSON.stringify(trackingConfig)"
          @window-state-change="onWindowStateChange"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et gravida massa. Mauris est metus, egestas eget mi et, condimentum sodales nisi. Nulla eu odio pellentesque, ultrices purus ut, finibus nisi. In mollis fermentum libero condimentum porta. Cras vehicula venenatis lectus, et auctor ipsum. Nullam vulputate a urna commodo sodales. Nunc sagittis sapien eros, a faucibus purus condimentum et.
        </os-window-vue>
      </div>
    </v-col>
    <v-col sm="12" md="12" lg="6">
      <v-switch
        v-model="theme"
        color="orange lighten-1"
        :false-value="'light'"
        :true-value="'dark'"
        data-track-label="os-window-demo-theme"
        :data-track-config="JSON.stringify(trackingConfig)"
      >
        <template #label>
          Dark Mode&nbsp;
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-icon v-on="on">
                mdi-information-outline
              </v-icon>
            </template>
            You can switch the window between dark mode and light mode
          </v-tooltip>
        </template>
      </v-switch>
      <v-switch
        v-model="windowState"
        color="orange lighten-1"
        :false-value="'maximized'"
        :true-value="'minimized'"
        data-track-label="os-window-demo-window-state"
        :data-track-config="JSON.stringify(trackingConfig)"
      >
        <template #label>
          Minimize&nbsp;
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-icon v-on="on">
                mdi-information-outline
              </v-icon>
            </template>
            You can minimize or maximize the window. A minimized window will only show its titlebar
          </v-tooltip>
        </template>
      </v-switch>
      <v-switch
        v-model="interactive"
        color="orange lighten-1"
        data-track-label="os-window-demo-buttons-enable"
        :data-track-config="JSON.stringify(trackingConfig)"
      >
        <template #label>
          Enable window buttons&nbsp;
          <v-tooltip bottom>
            <template #activator="{ on }">
              <v-icon v-on="on">
                mdi-information-outline
              </v-icon>
            </template>
            Enabled maximize and minimize window buttons respond to click events and cause the window to change its state respectively
          </v-tooltip>
        </template>
      </v-switch>
      <v-switch
        v-model="hover"
        color="orange lighten-1"
        label="Window button icon labels on mouse hover"
        data-track-label="os-window-demo-buttons-hover"
        :data-track-config="JSON.stringify(trackingConfig)"
      >
        <template #label>
          Enable button hover effects&nbsp;
          <v-tooltip bottom>
            <template #activator="{ on, foo }">
              <v-icon v-on="on">
                mdi-information-outline  {{ foo }}
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
        data-track-label="os-window-demo-os-theme"
        :data-track-config="JSON.stringify(trackingConfig)"
      />
      <v-text-field
        v-model="windowTitle"
        color="orange lighten-1"
        label="Window Titlebar text"
        data-track-label="os-window-demo-window-title"
        :data-track-config="JSON.stringify(trackingConfig)"
      />
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
      availableOsThemes: ['mac', 'win-xp', 'win-7'],
      trackingConfig: {
        mouseover: ['interaction', 'demo-interaction'],
        mouseout: ['interaction', 'demo-interaction'],
        focus: ['interaction', 'demo-interaction'],
        focusout: ['interaction', 'demo-interaction'],
        click: ['interaction', 'demo-interaction'],
        'hover-change': ['os-window-engagement', 'demo-panel-engagement'],
        'interactive-change': ['os-window-engagement', 'demo-panel-engagement'],
        'os-theme-change': ['os-window-engagement', 'demo-panel-engagement'],
        'theme-change': ['os-window-engagement', 'demo-panel-engagement'],
        'window-title-change': ['os-window-engagement', 'demo-panel-engagement'],
        'window-state-change': ['os-window-engagement', 'demo-panel-engagement']
      }
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
