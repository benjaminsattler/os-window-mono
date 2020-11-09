# Development

## Requirements

In order to start developing os-window-reactjs, first checkout the repository:
```shell
> git clone https://github.com/benjaminsattler/os-window-reactjs.git
```

Next make sure to install the development dependencies:
```shell
> cd os-window-reactjs
> yarn
```

Afterwards make sure to also install the required peer dependencies, which will include a compatible version of reactjs, reactjs-dom, and prop-types as well as os-window:
```shell
> npx npm-install-peers
```
When all is installed you can start the development webserver:

```shell
> yarn dev
```

Now you can point your web browser at `http://localhost:8000/html/debug.html` and see the os-window-reactjs component in action. Changes to the component will not be hot reloaded in the browser, so make sure to reload your browser after changes to the source.

## Running tests

In order to run the tests during development, simply type the following command in your console:

```shell
> yarn test
```

## Running EsLint

In order to run EsLint on the source and test files, simply type the following command in your console:

```shell
> yarn lint
```

The linter will also automatically be run in a git hook pre-commit.

## More Information

You can find more information at the following places:

- [Os-Window component documentation](https://github.com/benjaminsattler/os-window/blob/master/doc/index.md)
- [Reactjs API documentation](https://reactjs.org/docs/getting-started.html)

