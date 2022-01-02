# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) with one adjustment in order to accound for the fact that we're using a monorepo: Each change will be prepended with the package it concerns in brackets.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Releases prior to the switch to monorepo will list information about each individual package in the format `<major>.<minor>.<patch>-<package-name>`

<hr>

## [Unreleased]

### Security
- technical release, no changes
<hr>

## [0.4.0] - 2022-01-01


### Changed
- [os-window] Switch to monorepo
- [os-window-vue] Switch to monorepo
- [os-window-reactjs] Switch to monorepo
- [os-window-reactjs] Switched filenames from PascalCase to kebap-case
- [os-window-pages] Switch to monorepo
- [hoisted-include] Switch to monorepo

<hr>

## 0.3.1
- os-window: [0.3.1-os-window] - 2021-06-11

### Changed
- [os-window] Change all filenames to kebap-case
- [os-window] Update homepage URL, examples

### Fixed
- [os-window] Fix release pipeline

### Security
- [os-window] Update devDependencies to latest versions

<hr>

## 0.3.0
- os-window: [0.3.0-os-window] - 2020-11-04

### Fixed
- [os-window] Read correct css values in theme tests 
- [os-window] Properly detect boolean strings in attribute values

### Security
- [os-window] Update dependencies to latest version

<hr>

## 0.2.4
- os-window: [0.2.4-os-window] - 2020-05-31

### Added
- [os-window] Add win-7 theme
- [os-window] Add typescript type declarations

<hr>

## 0.2.3
- os-window: [0.2.3-os-window] - 2020-05-20

### Added
- [os-window] Add win-xp theme

### Changed
- [os-window] Replace mocha-chrome with playwright  4548373
- [os-window] Mac os-theme: Improve window button label position, show labels on keyboard focus
- [os-window] Improve accessibility of os-window
- [os-window] Optimize shadow dom generation with template element

### Fixed
- [os-window] Properly contain floating window content elements 
- [os-window] Split mac and default theme css rules to fix specificity of default theme
- [os-window] Properly disable window buttons when not interactive

<hr>

## 0.2.2
- os-window: [0.2.2-os-window] - 2020-04-19

### Fixed
- [os-window] Make handling binary attributes more robust

<hr>

## 0.2.1
- os-window: [0.2.1-os-window] - 2020-04-18

### Fixed
- [os-window] Don't fire `*Change` events when the value did not change

<hr>

## 0.2.0
- os-window: [0.2.0-os-window] - 2020-04-17

### Changed
- [os-window] Renamed interactionChange event to interactiveChange

<hr>

## 0.1.6
- os-window-vue [0.1.6-os-window-vue] - 2021-06-11

### Added
- [os-window-vue] Add HTML display to debug view

### Changed
- [os-window-vue] Change all filenames to kebap-case
- [os-window-vue] Update some errors in documentation
- [os-window-vue] Update homepage URL, examples

### Security
- [os-window-vue] Update release pipeline
- [os-window-vue] Update dependencies

<hr>

## 0.1.5
- os-window-vue [0.1.5-os-window-vue] - 2020-11-06

### Added
- [os-window-vue] Add os-window 0.3.0 to doc, pipeline

### Changed
- [os-window-vue] Improve debug view
- [os-window-vue] Ensure that osTheme is actually changed in event tests

### Security
- [os-window-vue] Upgrade depenencies

<hr>

## 0.1.4
- os-window-vue [0.1.4-os-window-vue] - 2020-06-13

### Changed
- [os-window-vue] Replace template with render function

<hr>

## 0.1.3
- os-window-vue [0.1.3-os-window-vue] - 2020-06-01

### Added
- [os-window-vue] Register as a vue plugin

<hr>

## 0.1.2
- os-window-vue: [0.1.2-os-window-vue] - 2020-04-19

### Fixed
- [os-window-vue] Display window contents

<hr>

## 0.1.1
- os-window-vue: [0.1.1-os-window-vue] - 2020-04-19

### Added
- [os-window-vue] Add browser entrypoint

### Changed
- [os-window-vue] Remove global component registration

<hr>

## 0.1.0
- os-window: [0.1.0-os-window] - 2020-04-10
- os-window-vue: [0.1.0-os-window-vue] - 2020-04-18
- os-window-reactjs: [0.1.0-os-window-reactjs]

### Added
- [os-window] Initial Release
- [os-window-vue] Initial Release

[Unreleased]: https://github.com/benjaminsattler/os-window-mono/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/benjaminsattler/os-window-mono/compare/c9e624e1750d7a101f4cbb56ad8cf3d1d76f6688...v0.4.0
[0.3.1-os-window]: https://github.com/benjaminsattler/os-window/compare/v0.3.0...v0.3.1
[0.3.0-os-window]: https://github.com/benjaminsattler/os-window/compare/v0.2.4...v0.3.0
[0.2.4-os-window]: https://github.com/benjaminsattler/os-window/compare/v0.2.3...v0.2.4
[0.2.3-os-window]: https://github.com/benjaminsattler/os-window/compare/v0.2.2...v0.2.3
[0.2.2-os-window]: https://github.com/benjaminsattler/os-window/compare/v0.2.1...v0.2.2
[0.2.1-os-window]: https://github.com/benjaminsattler/os-window/compare/v0.2.0...v0.2.1
[0.2.0-os-window]: https://github.com/benjaminsattler/os-window/compare/v0.1.0...v0.2.0
[0.1.0-os-window]: https://github.com/benjaminsattler/os-window/releases/tag/v0.1.0
[0.1.6-os-window-vue]: https://github.com/benjaminsattler/os-window-vue/compare/v0.1.6...v0.1.5
[0.1.5-os-window-vue]: https://github.com/benjaminsattler/os-window-vue/compare/v0.1.5...v0.1.4
[0.1.4-os-window-vue]: https://github.com/benjaminsattler/os-window-vue/compare/v0.1.4...v0.1.3
[0.1.3-os-window-vue]: https://github.com/benjaminsattler/os-window-vue/compare/v0.1.3...v0.1.2
[0.1.2-os-window-vue]: https://github.com/benjaminsattler/os-window-vue/compare/v0.1.2...v0.1.1
[0.1.1-os-window-vue]: https://github.com/benjaminsattler/os-window-vue/compare/v0.1.1...v0.1.0
[0.1.0-os-window-vue]: https://github.com/benjaminsattler/os-window-vue/releases/tag/v0.1.0
[0.1.0-os-window-reactjs]: https://github.com/benjaminsattler/os-window-reactjs/releases/tag/v0.1.0
