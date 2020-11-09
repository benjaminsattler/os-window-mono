## Installation

Choose any of the following methods to get started. You also need to install the actual [os-window][os-window] library.

### Install via node package manager

Run the following command in your command line to add both os-window and os-window-vue to your project
```shell
# for NPM
> npm install --save os-window os-window-reactjs && npm install --save-dev prop-types

# for YARN
> yarn add os-window os-window-reactjs prop-types && yarn add -D prop-types
```

#### Including the base library

In your application entrypoint you need to include the library `os-window`. Afterwards you can use the react.js component in your application.

```javascript
import 'os-window';
import 'os-window-reactjs';
```

### Inclusion in the Browser

You can also directly include the JavaScript module in the browser with the `browser.js` entrypoint:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="module" src="node_modules/prop-types/prop-types.js"></script>
    <script type="module" src="node_modules/react/umd/react.development.js"></script>
    <script type="module" src="node_modules/react-dom/umd/react-dom.development.js"></script>
    <script type="module" src="node_modules/react-dom/umd/react-dom-test-utils.development.js"></script>
    <script type="module" src="node_modules/os-window/main.js"></script>
    <script type="module" src="node_modules/os-window-reactjs/browser.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="module">
      ReactDOM.render(
        React.createElement(
          window.OsWindowReact,
          { },
          React.createElement(
            'img',
            {
              src: 'https://placekitten.com/250/250',
            },
            null
          ),
        ),
        document.querySelector('#app')
      );
    </script>
  </body>
</html>
```

## Basic Usage

This example creates a non-interactive window with light macos theme


```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {
  return (
    <OsWindowReactjs
      windowTitle="Random Cat Pic"
    >
      <img src="https://placekitten.com/250/250">
    </OsWindowReactjs>
  );
}

export default App;
```
### Use the CDN
This project is also published to the CDN unpkg, which enables you to skip any local module installation when including this module in your webpage. Don't forget to also include `os-window`, which is also provided by unpkg:

```html
<!-- Include specific version (recommended) -->
<script type="module" src="https://unpkg.com/os-window@0.3.0"></script>
<script type="module" src="https://unpkg.com/os-window-reactjs@0.1.0/browser.js"></script>

<!-- Include latest version (not recommended) -->
<script type="module" src="https://unpkg.com/os-window"></script>
<script type="module" src="https://unpkg.com/os-window-reactjs/browser.js"></script>
```

[os-window]:https://github.com/benjaminsattler/os-window
