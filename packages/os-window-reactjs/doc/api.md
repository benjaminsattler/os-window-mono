# API

This React.js component integrates the [os-window] web component. In this document you'll find how to talk to os-window through React.js.

## Properties of os-window-reactjs

All properties of os-window directly translate to a set of properties to pass to os-window-reactjs as well as an event that allows you to react to changes in the properties of the underlying os-window component.

### Mouse hover

You can enable mouse hover support by setting the `hover` prop as shown in the code example below:

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {
  return (
    <OsWindowReactjs
      hover
    ></OsWindowReactjs>
  );
}

export default App;
```

If you want to listen to changes to the `hover` property of the underlying `os-window` component, then you can listen to the `onHoverChange` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `hoverChange` event.

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {

  const onHoverChange = function onHoverChange(e) {
    console.log(`old value was: ${e.oldValue} new value is: ${e.newValue}`);
  }
  return (
    <OsWindowReactjs
      onHoverChange="onHoverChange"
    ></OsWindowReactjs>
  );
}

export default App;
```

### Interactive

You can enable interaction support by setting the `interactive` property as shown in the code example below:

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {
  return (
    <OsWindowReactjs
      interactive
    ></OsWindowReactjs>
  );
}

export default App;
```

If you want to listen to changes to the `interactive` property of the underlying `os-window` component, then you can listen to the `onInteractiveChange` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `interactiveChange` event.

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {

  const onInteractiveChange = function onInteractiveChange(e) {
    console.log(`old value was: ${e.oldValue} new value is: ${e.newValue}`);
  }
  return (
    <OsWindowReactjs
      onInteractiveChange="onInteractiveChange"
    ></OsWindowReactjs>
  );
}

export default App;
```

### Window State

You can change the window state by setting the `windowState` property to all values supported by your version of `os-window`, as shown in the code example below:

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {
  return (
    <OsWindowReactjs
      windowState="maximized"
    ></OsWindowReactjs>
  );
}

export default App;
```

If you want to listen to changes to the `window-state` property of the underlying `os-window` component, then you can listen to the `onWindowStateChange` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `windowStateChange` event.

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {

  const onWindowStateChange = function onWindowStateChange(e) {
    console.log(`old window state was: ${e.oldWindowState} new window state is: ${e.newWindowState}`);
  }
  return (
    <OsWindowReactjs
      onWindowStateChange="onWindowStateChange"
    ></OsWindowReactjs>
  );
}

export default App;
```

### Window Title

You can change the window title by setting the `windowTitle` property, as shown in the code example below:

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {
  return (
    <OsWindowReactjs
      windowTitle="any window title"
    ></OsWindowReactjs>
  );
}

export default App;
```

If you want to listen to changes to the `window-title` property of the underlying `os-window` component, then you can listen to the `onWindowTitleChange` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `windowTitleChange` event.

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {

  const onWindowTitleChange = function onWindowTitleChange(e) {
    console.log(`old window title was: ${e.oldWindowTitle} new window title is: ${e.newWindowTitle}`);
  }
  return (
    <OsWindowReactjs
      onWindowTitleChange="onWindowTitleChange"
    ></OsWindowReactjs>
  );
}

export default App;
```

### Operating System Theme

You can change the operating system theme of the window, as shown in the code example below:

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {
  return (
    <OsWindowReactjs
      osTheme="mac"
    ></OsWindowReactjs>
  );
}

export default App;
```

If you want to listen to changes to the `os-theme` property of the underlying `os-window` component, then you can listen to the `onOsThemeChange` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `osThemeChange` event.

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {

  const onOsThemeChange = function onOsThemeChange(e) {
    console.log(`old os theme was: ${e.oldOsTheme} new value is: ${e.newOsTheme}`);
  }
  return (
    <OsWindowReactjs
      onOsThemeChange="onOsThemeChange"
    ></OsWindowReactjs>
  );
}

export default App;
```

### Theme

You can change the theme of the window, as shown in the code example below:

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {
  return (
    <OsWindowReactjs
      theme="dark"
    ></OsWindowReactjs>
  );
}

export default App;
```

If you want to listen to changes to the `theme` property of the underlying `os-window` component, then you can listen to the `onThemeChange` event, as shown in the code example below. The event listener function will receive the `e.detail`-object like it is documented in the `os-window` documentation for the `themeChange` event.

```jsx
import 'os-window';
import OsWindowReactjs from 'os-window-reactjs';

function App() {

  const onThemeChange = function onThemeChange(e) {
    console.log(`old theme was: ${e.oldTheme} new theme is: ${e.newTheme}`);
  }
  return (
    <OsWindowReactjs
      onThemeChange="onThemeChange"
    ></OsWindowReactjs>
  );
}

export default App;
```

[os-window]:https://github.com/benjaminsattler/os-window-mono/
