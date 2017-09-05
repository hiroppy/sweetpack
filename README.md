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

Recommend to write to package.json as a task.

```json
{
  "scripts": {
    "start": "sweetpack watch",
    "build": "NODE_ENV=production sweetpack build"
  }
}
```

## Command
### Init
Create `.sweetpack.yml` as an init file.

```
$ sweetpack init
```

```yaml
entry: src/index.js
output: dist
js:
  react: false
css:
  module: false
```

### Watch
Start with webpack-dev-server.
```
$ sweetpack watch
```

### Build
Use babel-minify-webpack-plugin.  
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

```yaml
entry: ./src/index.js
output: ./dist
js:
  react: true
css:
  module: false
```

### entry(string, default: `./src/index.js`)
### output(string, default: `./dist`)
`output` has the same meaning as `webpack.output.path`.   
If you specify a file name, sweetpack automatically decomposes it into `path` and `filename`.   
e.g. 
```yaml
output: ./dist/bundle.js
```

### js
#### react(boolean, default: `false`)
If you select `true`, babel-preset-react will be valid.

### css
#### module(boolean, default: `false`)
If you select `true`, added module option to css-loader.
