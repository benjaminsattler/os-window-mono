# OS-Window Website
![CI Status](https://github.com/benjaminsattler/os-window-pages/workflows/CI/badge.svg)
![MIT License](https://img.shields.io/github/license/benjaminsattler/os-window-pages)

> The source behind the website for [os-window][os-window] at https://os-window.benjaminsattler.net

## Structure

This project is based on [nuxt.js](https://nuxtjs.org/) and runs on github pages based on this repository.
In this repository you'll find two branches:
- [master](https://github.com/benjaminsattler/os-window-pages/tree/master) Holds the development files
- [gh-pages](https://github.com/benjaminsattler/os-window-pages/tree/gh-pages) Holds the SSR files that'll be played out using github pages.

Each new deploy to github pages automatically gets tagged on master before being pushed to the `gh-pages` branch, so that you'll always be able to correlate each deploy to the things that went live across the two branches.

## Development

In order to start developing, please checkout the `master` branch. For dependency management this project uses `yarn`, so the command for installing dependencies is just

```shell
> yarn
```

After all dependencies and devDependencies have been installed successfully, then you can start the development server by issuing the command

```shell
> yarn dev
```

This should make the development app available under the local address `http://localhost:3000`

## Linting

There's a linter configuration included in this repository. You can run the linter manually by issuing this command:

```shell
> yarn lint
```

The linter will automatically be run on any staged files in a pre-commit hook, and on the CI pipeline after each push.

## Deploying

Before deploying a new version of the website please ensure that the worktree is clean (no uncomitted changes) and that the current branch is not `gh-pages`. You can then deploy a new version to github pages by issuing this command:

```shell
> yarn release
```

this will run the deployment, which will perform a bunch of steps:

1. run `np` for tagging and creating a new github release
2. create a new worktree in a temporary folder
3. install dependencies and devDependencies by executing `yarn` in that temporary worktree
4. generate the new SSR pages by executing `yarn generate` in that temporary worktree
5. commit and push the SSR pages to the gh-pages branch

All of these steps will then trigger a new deploy of the github pages environment, which will ultimately cause the changes to go live.

### Deploy preview

If you want to preview the SSR files, then you can issue the command
```shell
> ./deploy.sh
```

This will run the SSR generation up to the point of pushing the changes to origin. The script will end with a message telling you how to proceed with the deploy or how to locally check the artifact. Notice that at this point the changes are already locally committed, so in order to undo your changes to the `gh-pages` branch you have to hard reset the repo by one commit using `git reset --hard HEAD^`. And easy way to check the SSR pages could be to spawn any simple http webserver in the `gh-pages` branch, such as

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

[issues]:https://github.com/benjaminsattler/os-window-pages/issues/new
[pulls]:https://github.com/benjaminsattler/os-window-pages/pulls
[os-window]:https://github.com/benjaminsattler/os-window
