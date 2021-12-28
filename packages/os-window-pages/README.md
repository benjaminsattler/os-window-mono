# OS-Window Website
![CI Status](https://github.com/benjaminsattler/os-window-mono/workflows/os-window-pages/badge.svg)
![MIT License](https://img.shields.io/github/license/benjaminsattler/os-window-mono)

> The source behind the website for [os-window] at https://os-window.benjaminsattler.net

## Structure

This project is based on [nuxt.js](https://nuxtjs.org/) and runs on github pages based on this repository.
In this repository you'll find both the development files and the SSR rendered output:
- [packages/os-window-pages/](./packages/os-window-pages/) Holds the development files
- [docs/](./docs/) Holds the SSR files that'll be played out using github pages.

During each monorepo release the `deploy.sh` script gets invoked which will compile new SSR pages and copy them to the correct folder for direct access via GitHub pages.

## Development

For dependency management this project uses `yarn` in combination with `nx`, so the command for installing dependencies is just

```shell
> yarn
```

After all dependencies and devDependencies have been installed successfully, then you can start the development server by issuing the command

```shell
> yarn nx run os-window-pages:dev
```

This should make the development app available under the local address `http://localhost:3000`

## Linting

There's a linter configuration included in this repository. You can run the linter manually by issuing this command:

```shell
> yarn nx run os-window-pages:lint-all
```

The linter will automatically be run on any staged files in a pre-commit hook, and on the CI pipeline after each push.

## Deploying

Deploying a new version of the website means to create a new release for the whole monorepo. in order to do this please have a look at the [corresponding section of the monorepo development documentation](../../DEVELOPMENT.md#releases).

Before deploying a new version of the website please ensure that the worktree is clean (no uncomitted changes). 

### Deploy preview

If you want to preview the SSR files, then you can issue the command
```shell
> ./packages/os-window-pages/deploy.sh preview
```

This will run the SSR generation. The script will end with the generated SSR files in the folder `/docs/`. An easy way to check the SSR pages could be to spawn any simple http webserver in the `docs` directory, such as

```shell
> python -m SimpleHTTPServer 8080
````

This would allow you so look at the SSR pages under the URL `http://localhost:8080`.

## Contributing
If you have any ideas, just [open an issue][issues] and tell me what you think.

If you find any bugs, just [open an issue][issues] and let me know. Or go right ahead and create a [pull request][pulls].

If you'd like to contribute, please fork the repository and make changes as
you'd like. Pull requests are warmly welcome.

## Licensing

This project is licensed under MIT license. You'll find a copy of the MIT license in the file [LICENSE](LICENSE).

[issues]:https://github.com/benjaminsattler/os-window-mono/issues/new
[pulls]:https://github.com/benjaminsattler/os-window-mono/pulls
[os-window]:https://github.com/benjaminsattler/os-window-mono
