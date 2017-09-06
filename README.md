<div align="center">
  <h1>sweetpack</h1>
</div>

[![Build Status](https://travis-ci.org/abouthiroppy/sweetpack.svg)](https://travis-ci.org/abouthiroppy/sweetpack)
[![npm version](https://badge.fury.io/js/sweetpack.svg)](https://badge.fury.io/js/sweetpack)
[![codecov](https://codecov.io/gh/abouthiroppy/sweetpack/branch/master/graph/badge.svg)](https://codecov.io/gh/abouthiroppy/sweetpack)

If you are building a simple application, let's enjoy using sweetpack!  
sweetpack hides all common settings of webpack and babel, you are not taking the time to write the configuration.

## Sample
- [common](./samples/common)
- [react + css-modules + postcss-loader](./samples/react)
- multi
  - [3 input files -> 1 output file](./samples/multi-0)
  - [3 input files -> 3 output files](./samples/multi-1)

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
Hot Module Replacement enabled.  

### Build
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

If the configuration file can not be found, the above default setting is reflected.

### entry
| Type | Default |
| :--- | :---: |
| string &#124; Object &#124; Array&lt;string&gt; | `./src/index.js` |

It can be set just like webpack.  
If you want to bundle multiple files, please refer to [Sample](./samples).


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
Uses [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

#### filename
| Type | Default |
| :--- | :---: |
| string | null |


#### template
| Type | Default |
| :--- | :---: |
| string | null |
