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
  postcss: false
html:
  filename: null
  template: null
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
Use babel-minify-webpack-plugin.   
Asset files is converted to name with hash.  

## Options
### Display Setting File
```
$ sweetpack watch --display-setting-file
```

## Packages Included
### webpack
- webpack
- webpack-dev-server(only watch mode)
- babel-minify-webpack-plugin(only production mode)
- file-loader
- style-loader
- css-loader
- postcss-loader(default: false)
- html-webpack-plugin

### babel
- babel-preset-env
- babel-preset-stage-1
- babel-preset-react(default: false)
- babel-polyfill(default: false)

## Setting File
File name is `.sweetpack.yml`.

```yaml
entry: ./src/index.js
output: ./dist
js:
  react: false
css:
  module: false
  postcss: false
html:
  filename: null
  template: null
```

### entry
| Type | Default |
| :--- | :---: |
| string | `./src/index.js` |

### output
| Type | Default |
| :--- | :---: |
| string | `./dist` |

`output` has the same meaning as `webpack.output.path`.   
If you specify a file name, sweetpack automatically decomposes it into `path` and `filename`.   

e.g.
```yaml
output: ./dist/bundle.js
```

### js
#### react
| Type | Default |
| :--- | :---: |
| boolean | false |

If you select `true`, babel-preset-react will be valid.

### css
#### module
| Type | Default |
| :--- | :---: |
| boolean | false |

If you select `true`, add module option to css-loader.  
Output class name will be changed.  
development, test, etc... : `[path]__[name]__[local]__[hash:base64:5]`  
production: `[hash:base64:5]`

### postcss
| Type | Default |
| :--- | :---: |
| boolean | false |

If you select `true`, added postcss-loader to `module.rules`.

### html
#### filename
| Type | Default |
| :--- | :---: |
| string | undefined |


#### template
| Type | Default |
| :--- | :---: |
| string | undefined |

## Sample
wip
