<div align="center">
  <h1>sweetpack</h1>
</div>

[![Build Status](https://travis-ci.org/abouthiroppy/sweetpack.svg)](https://travis-ci.org/abouthiroppy/sweetpack)
[![npm version](https://badge.fury.io/js/sweetpack.svg)](https://badge.fury.io/js/sweetpack)
[![codecov](https://codecov.io/gh/abouthiroppy/sweetpack/branch/master/graph/badge.svg)](https://codecov.io/gh/abouthiroppy/sweetpack)

*note: wip*  
If you are building a simple application, let's enjoy using sweetpack!  
sweetpack hides all common settings and you are not taking the time to write the configuration.

## Install
```
$ npm install sweetpack --save-dev
```

## Usage
```
$ npx sweetpack <command> <options>
```

Recommend to write to package.json as tasks.

```json
{
  "scripts": {
    "watch": "sweetpack watch",
    "build": "NODE_ENV=production sweetpack build"
  }
}
```

## Command
### Init
Create .sweetpack.yml as init file.

```
$ sweetpack init
```

```yml
entry: src/index.js
output: dist
react: false
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
entry: ./lib/index.js
output: ./dist
react: true
```

### Entry
### Output
### React
Default is `false`.   
If you select `true`, babel-preset-react will be valid.
