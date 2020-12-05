# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2020-12-05

### Changed

- Fixing Stimulus version in peerDependencies.

## [2.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0
- Namespace warn message

### Changed

**Breaking** Using the new `values` static property.

```diff
- <a href="#awesome-stuff-here" data-controller="scroll-to" data-scroll-to-offset="50">Scroll</a>
+ <a href="#awesome-stuff-here" data-controller="scroll-to" data-scroll-to-offset-value="50">Scroll</a>
```

## [1.0.0] - 2020-11-24

### Added

- Adding controller
