<div align="center">
  <h1>sweetpack</h1>
</div>

<!-- travis https://travis-ci.org/ -->
<!-- appveyor https://ci.appveyor.com -->
<!-- codecov https://codecov.io/gh -->
<!-- npm version badge: https://badge.fury.io/ -->

If you are building a simple application, let's enjoy using sweetpack!  
sweetpack hides all common settings and you are not taking the time to write the configuration.

## Install
```
$ npm install sweetpack --save-dev
```

## Usage
```
$ sweetpack <command> <options>
```

## Command
### Init
```
$ sweetpack init
```

### Watch
Start with webpack-dev-server.
```
$ sweetpack watch
```

### Build
```
$ NODE_ENV=production sweetpack build
```

## Options
### Display Setting File
`--display-setting-file`

```
$ sweetpack watch --display-setting-file
```

## Default Packages
- webpack
- webpack-dev-server(only watch mode)
- babel-minify-webpack-plugin(only production mode)
- babel-preset-env
- babel-preset-stage-1
- babel-preset-react(default: false)
- babel-polyfill(default: false)
- file-loader
- style-loader
- css-loader
- postcss-loader

## Setting File
File name is `.sweetpack.yml`.

```yml
entry:
  ./lib/index.js
output:
  ./dist
react: true
```
