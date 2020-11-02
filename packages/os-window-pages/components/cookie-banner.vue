<template>
  <v-overlay
    v-if="!hasConsent"
    class="osw-overlay"
    color="rgba(255,255,255,0.3)"
    opacity="1"
    z-index="6"
    :style="cssVariables"
  >
    <click-capture
      @clickOutside="animate"
    >
      <v-alert
        :class="[
          'consent-alert',
          { animate: isAnimationActive }
        ]"
        icon="mdi-shield-lock-outline"
        :color="primaryColor"
        border="left"
        elevation="2"
        colored-border
        light
        prominent
      >
        <v-row>
          <v-col class="d-flex align-center text-center">
            This website uses Cookies in order to improve your online experience and to understand how this website is being used. By clicking on "Agree" you consent to the use of Cookies.
          </v-col>
          <v-col class="d-flex col-12 col-sm-auto align-center justify-center">
            <v-btn
              :color="primaryColor"
              dark
              x-large
              @click="onAcceptClick"
            >
              Agree
            </v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </click-capture>
  </v-overlay>
</template>

<script>
import { bootstrap } from 'vue-gtag'
import * as Cookies from 'tiny-cookie'
import ClickCapture from '../components/click-capture.vue'

const CONSENT_COOKIE_KEY = 'consent'

export default {
  name: 'CookieBanner',
  components: {
    ClickCapture
  },
  data () {
    return {
      hasConsent: this.checkConsent(),
      isAnimationActive: false,
      animationHandle: null,
      primaryColor: '#ffba36'
    }
  },
  computed: {
    cssVariables () {
      return {
        '--osw-primary-color': this.primaryColor
      }
    }
  },
  watch: {
    hasConsent (newValue) {
      this.setConsent(newValue)
    }
  },
  mounted () {
    if (this.hasConsent) {
      this.enableConsent()
    }
  },
  methods: {
    onAcceptClick () {
      this.hasConsent = true
    },
    checkConsent () {
      return Cookies.get(CONSENT_COOKIE_KEY) === '1'
    },
    setConsent (hasConsented) {
      Cookies.set(
        CONSENT_COOKIE_KEY,
        hasConsented ? '1' : '0',
        {
          expires: '20Y',
          secure: true,
          samesite: 'strict'
        }
      )
      if (hasConsented) {
        this.enableConsent()
      }
    },
    enableConsent () {
      bootstrap()
    },
    animate () {
      clearTimeout(this.animationHandle)
      this.isAnimationActive = true
      this.animationHandle = setTimeout(() => {
        this.isAnimationActive = false
      }, 1500)
    }
  }
}
</script>

<style lang="scss">

.consent-alert {
  margin: 0 auto 1.5vh auto;
  width: clamp(300px, 70%, 95vw);

  &.animate:before {
    content:'';
    display:block;
    position:absolute;
    top:0; right:0; bottom:0; left:0;
    box-shadow: 0 0 0 0 var(--osw-primary-color);
    animation: ripple .5s ease-in infinite;
  }
}

@keyframes ripple{
  0% {
    transform:scaleY(1) scaleX(1);
    box-shadow: 0 0 1px .1px var(--osw-primary-color);
  }
  50% {
    opacity: 0.5;
  }
  75% {
    transform:scaleY(1.25) scaleX(1.05);
  }
  100% {
    transform:scaleY(1.4) scaleX(1.1);
    opacity:0;
    box-shadow: 0 0 50px 5px var(--osw-primary-color);
  }
}

.osw-overlay {
    backdrop-filter: blur(10px);
    align-items: flex-end;
}

@supports not (backdrop-filter: blur(10px)) {
  .osw-overlay {
    background-color: rgba(255, 255, 255, 0.95);
  }
}
</style>
