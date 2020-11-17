<template>
  <v-container>
    <v-row justify="center">
      <v-col md="8">
        <h1 id="gettingstarted" v-anchor>
          Getting started
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8">
        <p>Choose any of the following methods to get started</p>

        <h2>Install via node package manager</h2>

        <p>Run the following command in your command line to add os-window to your project</p>
        <os-window-vue
          interactive
          hover
          theme="dark"
          data-track-label="page-index-gettingstarted-packagemanager"
          :data-track-config="JSON.stringify(trackingConfig)"
        >
          <pre class="sourcecode shell"><code># for NPM</code>
<code class="line">&gt; npm install --save os-window</code>
<code />
<code># for YARN</code>
<code>&gt; yarn add os-window</code></pre>
        </os-window-vue>

        <h2>Include the module</h2>

        <p>Include the JavaScript module in your HTML page</p>

        <os-window-vue
          interactive
          hover
          theme="dark"
          data-track-label="page-index-gettingstarted-module-inclusion"
          :data-track-config="JSON.stringify(trackingConfig)"
        >
          <pre class="sourcecode html"><code>&lt;script type=&quot;module&quot; src=&quot;node_modules/os-window/main.js&quot;&gt;&lt;/script&gt;</code></pre>
        </os-window-vue>

        <p>Or import the module into your JavaScript code</p>

        <os-window-vue
          interactive
          hover
          theme="dark"
          data-track-label="page-index-gettingstarted-module-import"
          :data-track-config="JSON.stringify(trackingConfig)"
        >
          <pre class="sourcecode javascript"><code>import 'os-window';</code></pre>
        </os-window-vue>

        <h2>Use the CDN</h2>

        <p>This project is also published to the CDN unpkg, which enables you to skip any local module installation when including this module in your webpage:</p>

        <os-window-vue
          interactive
          hover
          theme="dark"
          data-track-label="page-index-gettingstarted-module-cdn"
          :data-track-config="JSON.stringify(trackingConfig)"
        >
          <pre class="sourcecode html"><code>&lt;!-- Include specific version (recommended) --&gt;</code>
<code>&lt;script type=&quot;module&quot; src=&quot;https://unpkg.com/os-window@0.3.0&quot;&gt;&lt;/script&gt;</code>
<code />
<code>&lt;!-- Include latest version (not recommended) --&gt;</code>
<code>&lt;script type=&quot;module&quot; src=&quot;https://unpkg.com/os-window&quot;&gt;&lt;/script&gt;</code></pre>
        </os-window-vue>

        <p>
          For more information have a look at the
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/blob/master/doc/installation.md"
            data-track-label="page-index-gettingstarted-installation"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            installation guide
          </a>
          or the detailled
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/blob/master/doc/index.md"
            data-track-label="page-index-gettingstarted-documentation"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            documentation
          </a>
          .
        </p>

        <h2>Framework integration</h2>

        <p>
          You can also use any of the following available framework integrations:
        </p>
        <ul>
          <li>
            <a
              rel="noopener"
              href="http://github.com/benjaminsattler/os-window-vue"
              target="_blank"
              data-track-label="page-index-integrations-vue"
              :data-track-config="JSON.stringify(trackingConfig)"
            >
              component adapter for Vue.js
            </a>
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-divider />
    <v-row justify="center">
      <v-col md="8">
        <h1 id="demo" v-anchor>
          Demo
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8">
        <p>
          Feel free to play around with this interactive demonstration of os-window by changing the controls on the right and observe their effects on the os-window instance on the left.
        </p>
        <DemoPanel />
      </v-col>
    </v-row>
    <v-divider />
    <v-row justify="center">
      <v-col md="8">
        <h1 id="requirements" v-anchor>
          Requirements
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8">
        <ul>
          <li>
            Browsers
            <ul>
              <li>IE: not supported</li>
              <li>Edge: Ver. &gt;= 80</li>
              <li>Firefox: Ver. &gt;= 63</li>
              <li>Chrome: Ver. &gt;= 67</li>
              <li>Safari: Ver. &gt;= 10.1</li>
              <li>Opera: Ver &gt;= 41</li>
            </ul>
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-divider />
    <v-row justify="center">
      <v-col md="8">
        <h1 id="features" v-anchor>
          Features
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8">
        <ul>
          <li>switch operating system designs</li>
          <li>switch between light &amp; dark themes</li>
          <li>create non-interactive or interactive window frames</li>
          <li>use any HTML as window contents</li>
          <li>
            fully scriptable interface
            <ul>
              <li>listen to events from the window</li>
              <li>dynamically toggle any property (including design and theme)</li>
            </ul>
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-divider />
    <v-row justify="center">
      <v-col md="8">
        <h1 id="documentation" v-anchor>
          Documentation
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8">
        <p>
          Find more detailed information in the
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/blob/master/doc/index.md"
            target="_blank"
            data-track-label="page-index-documentation-documentation"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            documentation
          </a>
          hosted over at GitHub.
        </p>
      </v-col>
    </v-row>
    <v-divider />
    <v-row justify="center">
      <v-col md="8">
        <h1 id="contributing" v-anchor>
          Contributing
        </h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8">
        <p>
          If you have any ideas, just
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/issues/new"
            target="_blank"
            data-track-label="page-index-contributing-ideas"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            open an issue
          </a>
          and tell me what you think.
        </p>
        <p>
          If you find any bugs, just
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/issues/new"
            target="_blank"
            data-track-label="page-index-contributing-bugs"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            open an issue
          </a>
          and let me know. Or go right ahead and create a
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/pulls/"
            target="_blank"
            data-track-label="page-index-contributing-pullrequest"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            pull request
          </a>
          .
        </p>
        <p>
          If you'd like to contribute, please fork
          <a
            rel="noopener"
            href="https://github.com/benjaminsattler/os-window/"
            target="_blank"
            data-track-label="page-index-contributing-fork"
            :data-track-config="JSON.stringify(trackingConfig)"
          >
            the source code
          </a>
          and make changes as you'd like. Pull requests are warmly welcome.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OsWindowVue from 'os-window-vue'
import DemoPanel from '../components/demo-panel.vue'

if (process.browser) {
  // eslint-disable-next-line no-unused-expressions
  import('os-window')
}

export default {
  name: 'IndexPage',
  layout: 'hero',
  components: {
    DemoPanel,
    OsWindowVue
  },
  data () {
    return {
      trackingConfig: {
        mouseover: ['interaction', 'page-index-interaction'],
        mouseout: ['interaction', 'page-index-interaction'],
        focus: ['interaction', 'page-index-interaction'],
        focusout: ['interaction', 'page-index-interaction'],
        click: ['interaction', 'page-index-interaction'],
        'hover-change': ['os-window-engagement', 'page-index-interaction'],
        'interactive-change': ['os-window-engagement', 'page-index-interaction'],
        'os-theme-change': ['os-window-engagement', 'page-index-interaction'],
        'theme-change': ['os-window-engagement', 'page-index-interaction'],
        'window-title-change': ['os-window-engagement', 'page-index-interaction'],
        'window-state-change': ['os-window-engagement', 'page-index-interaction']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .sourcecode {
    &::before {
      counter-reset: listing;
    }

    padding: 1rem;
    white-space: pre-wrap;

    code {
      counter-increment: listing;
      background-color: transparent;
      border: none;
      padding: 0;
      margin: 0;
      box-shadow: none;
      color: inherit;
      font-weight: inherit;
      font-variant: inherit;
      font-family: inherit;
      font-size: inherit;

      &::before {
        content: counter(listing) ": ";
        font-size: .75rem;
        margin-right: 1rem;
      }
    }
  }
</style>
