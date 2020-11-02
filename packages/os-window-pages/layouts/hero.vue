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
        @click.stop="drawerToggle = !drawerToggle"
      />
      <v-toolbar-title v-text="title" />
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
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          aria-label="Go to Github Repository"
          text
          nuxt
          link
        >
          <a
            aria-label="Open Github Repository"
            href="https://github.com/benjaminsattler/os-window"
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
        @click.stop="drawerToggle = !drawerToggle"
      />
      <v-toolbar-title v-text="title" />
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
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          aria-label="Link to Github Repository"
          text
          nuxt
          link
        >
          <a
            aria-label="Open Github Repository"
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window"
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
              >
                <a rel="noopener" href="https://github.com/benjaminsattler/os-window" target="_blank">
                  <v-img src="/img/gh-32px.png" alt="Github Logo" height="32" width="32" class="align-self-center" />
                </a>
              </v-btn>
              <v-btn
                text
                nuxt
                link
                style="padding-top: 4px"
                aria-label="Link to npmjs Package Registry"
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
      userHasScrolled: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
