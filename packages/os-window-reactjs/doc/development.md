# Development

## Requirements

In order to start developing os-window-reactjs, first checkout the repository:
```shell
> git clone https://github.com/benjaminsattler/os-window-mono.git
```

Next make sure to install the development dependencies:
```shell
> cd os-window-mono
> yarn
```

When all is installed you can start the development webserver:

```shell
> yarn nx run os-window-reactjs:dev
```

Now you can point your web browser at `http://localhost:8000/html/debug.html` and see the os-window-reactjs component in action. Changes to the component will not be hot reloaded in the browser, so make sure to reload your browser after changes to the source.

## Running tests

In order to run the tests during development, simply type the following command in your console:

```shell
> yarn nx run os-window-reactjs:test
```

## Running EsLint

In order to run EsLint on the source and test files, simply type the following command in your console:

```shell
> yarn nx run os-window-reactjs:lint-all
```

The linter will also automatically be run in a git hook pre-commit.

## More Information

You can find more information at the following places:

- [Os-Window documentation](https://github.com/benjaminsattler/os-window-mono/)
- [Reactjs API documentation](https://reactjs.org/docs/getting-started.html)
