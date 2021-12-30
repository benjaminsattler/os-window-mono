# Development

This document aims to give an overview over the tooling that'll be used during the development in this monorepo. There are some differences in how to work inside this repo due to it being a monorepo, and this document is an attempt to remove the friction for any developer working with this repo.

## Table of Contents

- [Workflow](#workflow)
- [Task Runner](#task-runner)
  - [From inside a package](#from-inside-a-package)
  - [From inside the root package](#from-inside-the-root-package)
- [Versioning](#versioning)
- [Releases](#releases)
- [IDE-Support](#ide-support)

## Workflow
In this monorepo we're following the so-called trunk-based development, which means that all commits will happen directly onto trunk (here: `master`) in order to end up with CI as much as possible. Please structure your change in a way so that you're able to atomically commit and release it, and please don't use any long living feature-branch. For more information about our workflow please have a look at this: https://trunkbaseddevelopment.com
## Task Runner

This monorepo utilizes yarn v2 enabled workspaces. Find more information about yarn v2 at https://yarnpkg.com.

### From inside a package
In order to execute a task inside a `package.json` file inside any packages you can simply `cd` into it and run it as usual:

```bash
> cd packages/os-window
# Use yarn directly
> yarn dev
```

### From inside the root package
Sometimes it's annoying to have to switch directories, especially when working on multiple packages at the same time. Because of this it is also possible to execute yarn yasks from the root directory directly:

```bash
> cd packages/os-window
# Use yarn directly
> yarn workspace os-window dev
```

If you want to execute a task on all packages you can to this like this:

```bash
# Use yarn directly
> yarn workspaces foreach --parallel --interlaced --verbose run lint-all
```

You can find some examples in the root `package.json` scripts section.

## Versioning

This monorepo uses "fixed" or "locked" versioning, i.e. all packages in this repository will always have the same version in HEAD. This allows to easily figure out which versions of which packages are compatible.

Furthermore we'll be using semantic versioning (https://semver.org) so that it's easy to detect which release are backwards compatible and which aren't.

## Releases

This repository contains a helper script in [scripts/release.js](./scripts/release.js) which will handle all the labour of creating a new release. This script is self-explanatory and offers its own little manual when invoked without any parameters.

Releases will be tagged in GitHub, create a new release in Github, published to the npmjs registry, and added to the [CHANGELOG.md](./CHANGELOG.md). Furthermore all releases will trigger a deployment to the documentation website https://os-window-benjaminsattler.net.

Releases prior to the monorepo migration can still be found in the previous archived GitHub projects.

## Changelog

We maintain a changelog so that it's easily possible to get an overview over all changes that constitute a release. The format of the changelog follows `keep a changelog` (https://keepachangelog.com/en/1.0.0/). Please take care to add all changes to any package in this monorepo to the file [CHANGELOG.md](./CHANGELOG.md). When a new release will be made then this file serves as the foundation for the release notes that accompany a GitHub releas as well.

## IDE-Support
This monorepo comes with support for [VSCode](https://code.visualstudio.com) out of the box. You can find a workspace configuration file in [./.vscode/os-window.code-workspace](.vscode/os-window.code-workspace) which will add one workspace per package.
