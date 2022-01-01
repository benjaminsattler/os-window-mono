<template>
  <v-app>
    <client-only>
      <cookie-banner />
    </client-only>
    <v-app-bar
      hide-on-scroll
    >
      <v-app-bar-nav-icon
        class="d-md-none"
        aria-label="Open navigation drawer"
        data-track-label="drawer"
        :data-track-config="JSON.stringify(topTrackingConfig)"
        @click.stop="drawerToggle = !drawerToggle"
      />
      <v-toolbar-title
        data-track-label="title"
        :data-track-config="JSON.stringify(topTrackingConfig)"
        v-text="title"
      />
      <v-spacer />
      <v-toolbar-items
        class="d-none d-md-flex"
        app
      >
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.target"
          text
          nuxt
          link
          :data-track-label="item.title.toLowerCase()"
          :data-track-config="JSON.stringify(topTrackingConfig)"
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          aria-label="Go to Github Repository"
          text
          nuxt
          link
          data-track-label="github"
          :data-track-config="JSON.stringify(topTrackingConfig)"
        >
          <a
            aria-label="Open Github Repository"
            href="https://github.com/benjaminsattler/os-window-mono"
            target="_blank"
            rel="noopener"
          >
            <v-img src="/img/gh-32px.png" alt="Github Logo" height="32" width="32" class="align-self-center" />
          </a>
        </v-btn>
        <v-btn
          aria-label="Go to npmjs Package Registry"
          text
          nuxt
          link
          style="padding-top: 4px"
          data-track-label="npmjs"
          :data-track-config="JSON.stringify(topTrackingConfig)"
        >
          <a
            aria-label="Open npmjs Package Registry"
            rel="noopener"
            href="https://www.npmjs.com/package/os-window"
            target="_blank"
          >
            <svg height="64" width="64" viewBox="0 0 780 250">
              <path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z" />
            </svg>
          </a>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-app-bar
      app
      inverted-scroll
    >
      <v-app-bar-nav-icon
        class="d-md-none"
        aria-label="Open navigation drawer"
        data-track-label="drawer"
        :data-track-config="JSON.stringify(scrolledTrackingConfig)"
        @click.stop="drawerToggle = !drawerToggle"
      />
      <v-toolbar-title
        data-track-label="title"
        :data-track-config="JSON.stringify(scrolledTrackingConfig)"
        v-text="title"
      />
      <v-spacer />
      <v-toolbar-items
        class="d-none d-md-flex"
        app
      >
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.target"
          text
          nuxt
          link
          :data-track-label="item.title.toLowerCase()"
          :data-track-config="JSON.stringify(scrolledTrackingConfig)"
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          aria-label="Link to Github Repository"
          text
          nuxt
          link
          data-track-label="github"
          :data-track-config="JSON.stringify(scrolledTrackingConfig)"
        >
          <a
            aria-label="Open Github Repository"
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window-mono"
            target="_blank"
          >
            <v-img src="/img/gh-32px.png" height="32" width="32" class="align-self-center" />
          </a>
        </v-btn>
        <v-btn
          text
          nuxt
          link
          style="padding-top: 4px"
          data-track-label="npmjs"
          :data-track-config="JSON.stringify(scrolledTrackingConfig)"
        >
          <a
            aria-label="Open npmjs Package Registry"
            rel="noopener"
            href="https://www.npmjs.com/package/os-window"
            target="_blank"
          >
            <svg height="64" width="64" viewBox="0 0 780 250">
              <path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z" />
            </svg>
          </a>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawerToggle"
      class=""
      fixed
      dark
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.target"
          data-track-label="item.title.toLowerCase()"
          :data-track-config="JSON.stringify(mobileTrackingConfig)"
          link
          nuxt
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-center">
              <v-btn
                text
                nuxt
                link
                aria-label="Link to Github Repository"
                data-track-label="github"
                :data-track-config="JSON.stringify(mobileTrackingConfig)"
              >
                <a rel="noopener" href="https://github.com/benjaminsattler/os-window-mono" target="_blank">
                  <v-img src="/img/gh-32px.png" alt="Github Logo" height="32" width="32" class="align-self-center" />
                </a>
              </v-btn>
              <v-btn
                text
                nuxt
                link
                style="padding-top: 4px"
                aria-label="Link to npmjs Package Registry"
                data-track-label="npmjs"
                :data-track-config="JSON.stringify(mobileTrackingConfig)"
              >
                <a rel="noopener" href="https://www.npmjs.com/package/os-window" target="_blank">
                  <svg height="64" width="64" viewBox="0 0 780 250">
                    <path fill="#171516" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z" />
                  </svg>
                </a>
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <TopHero />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <default-footer />
  </v-app>
</template>

<script>
import CookieBanner from '../components/cookie-banner.vue'
import TopHero from '../components/top-hero.vue'
import DefaultFooter from '../components/default-footer.vue'

export default {
  components: {
    CookieBanner,
    DefaultFooter,
    TopHero
  },
  data () {
    return {
      title: 'Os-Window',
      drawerToggle: false,
      items: [{
        target: '#gettingstarted',
        title: 'Getting Started'
      }, {
        target: '#demo',
        title: 'Demo'
      }, {
        target: '#features',
        title: 'Features'
      }, {
        target: '#requirements',
        title: 'Requirements'
      }, {
        target: '#documentation',
        title: 'Documentation'
      }, {
        target: '#contributing',
        title: 'Contributing'
      }],
      userHasScrolled: false,
      topTrackingConfig: {
        mouseover: ['interaction', 'top-nav-interaction'],
        mouseout: ['interaction', 'top-nav-interaction'],
        focus: ['interaction', 'top-nav-interaction'],
        focusout: ['interaction', 'top-nav-interaction'],
        click: ['interaction', 'top-nav-interaction']
      },
      scrolledTrackingConfig: {
        mouseover: ['interaction', 'scrolled-nav-interaction'],
        mouseout: ['interaction', 'scrolled-nav-interaction'],
        focus: ['interaction', 'scrolled-nav-interaction'],
        focusout: ['interaction', 'scrolled-nav-interaction'],
        click: ['interaction', 'scrolled-nav-interaction']
      },
      mobileTrackingConfig: {
        mouseover: ['interaction', 'mobile-nav-interaction'],
        mouseout: ['interaction', 'mobile-nav-interaction'],
        focus: ['interaction', 'mobile-nav-interaction'],
        focusout: ['interaction', 'mobile-nav-interaction'],
        click: ['interaction', 'mobile-nav-interaction']
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
