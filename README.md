<div align="center">
  <h1>sweetpack</h1>
</div>

[![NPM][npm-image]][npm-url]
[![Travis][travis-image]][travis-url]
[![Codecov][codecov-image]][codecov-url]
[![David][david-image]][david-url]
[![Dependencyci][dependencyci-image]][dependencyci-url]

[npm-image]: https://img.shields.io/npm/v/sweetpack.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sweetpack
[travis-image]: https://img.shields.io/travis/abouthiroppy/sweetpack.svg?style=flat-square
[travis-url]: https://travis-ci.org/abouthiroppy/sweetpack
[codecov-image]: https://img.shields.io/codecov/c/github/abouthiroppy/sweetpack/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/abouthiroppy/sweetpack
[david-image]: https://img.shields.io/david/abouthiroppy/sweetpack.svg?style=flat-square
[david-url]: https://david-dm.org/abouthiroppy/sweetpack
[dependencyci-image]: https://img.shields.io/badge/Dependency%20CI-passing-brightgreen.svg?style=flat-square
[dependencyci-url]: https://dependencyci.com/github/abouthiroppy/sweetpack

## Table of Contents
- [What's sweetpack?](#whats-sweetpack)
- [Samples](#samples)
- [Usage](#usage)
- [Command](#command)
- [Setting File](#setting-file)
- [Packages Included](#packages-included)
- [Trouble Shooting](#trouble-shooting)

## What's sweetpack?
sweetpack helps you build your environment of webpack and babel.   
If you are building a simple application, let's enjoy using sweetpack!   
sweetpack hides all common settings of webpack and babel, you are not taking the time to write the configuration.

## Samples
- [mini](./samples/mini)
- [extract](./samples/extract)
- [3 input files -> 1 output file](./samples/multi-0)
- [3 input files -> 3 output files](./samples/multi-1)
- [flow](./samples/flow)
- [react + react-hot-loader + css-modules](./samples/react)
- [react + react-hot-loader + css-modules + postcss-loader + file-loader](./samples/react-1)
- [enable all options](./samples/all)

## Usage
### Install
```
$ npm install sweetpack --save-dev
```

```
$ npx sweetpack <command>
```

Recommend to write to `package.json` as a task.

```json
{
  "scripts": {
    "start": "sweetpack watch",
    "build": "NODE_ENV=production sweetpack build"
  }
}
```

## Command
sweetpack has `init`, `watch`, `build` commands.

### sweetpack init
Create `.sweetpack.yml` as an init file.  
The file with default settings is generated.

```yaml
entry: src/index.js
output: dist
js:
  flow: false
  react: false
css:
  modules: false
  postcss: false
html:
  filename: null
  template: null
dev:
  env: null
  port: 8080
  analyzer: false
  dashboard: true
prod:
  env: null
  url: false
  extract: false
```

### sweetpack watch
Start with webpack-dev-server.  
Hot Module Replacement enabled.  

[Activated Plugins](#watch)

### sweetpack build
Use babel-minify-webpack-plugin, OccurrenceOrderPlugin and AggressiveMergingPlugin.   
Asset files is converted to name with hash.  
Default output directory is `/dist`.

[Activated Plugins](#build)

## Setting File
File name is `.sweetpack.yml`.  
Please set at the root of the project.

```yaml
entry: ./src/index.js
output: ./dist
js:
  flow: false
  react: false
css:
  modules: false
  postcss: false
html:
  filename: null
  template: null
dev:
  env: null
  port: 8080
  analyzer: false
  dashboard: true
prod:
  env: null
  url: false
  extract: false
```

If the configuration file can not be found, the above default setting is reflected.

### entry
| Type | Default |
| :--- | :--- |
| string &#124; Object &#124; Array&lt;string&gt; | `./src/index.js` |

It can be set just like webpack. see [Entry Points](https://webpack.js.org/concepts/entry-points/)  

```yaml
entry: ./src/index.js # string

entry: # Object
  a: ./src/a.js
  b: ./src/b.js
  c: ./src/c.js

entry: # Array
  - ./src/a.js
  - ./src/b.js
```


### output
| Type | Default |
| :--- | :--- |
| string | `./dist` |

`output` has the same meaning as `webpack.output.path`.   
If specify a file name, sweetpack automatically decomposes it into `path` and `filename`.   
When `entry` is Object, the file name automatically becomes `[name].js`.  
In the production environment, the file name is given `[hash]`.

```yaml
# if `entry` is Object
# Automatically convert to `[name].js`
output: dist # -> output.filename is `[name].js`

# else(e.g. string, Array<string>)
output: dist # -> output.filename is `main.js`
output: dist/bundle.js # -> output.filename is `bundle.js`

```

### js
#### flow
| Type | Default |
| :--- | :--- |
| boolean | false |

If select `true`, babel-preset-flow and flow-status-webpack-plugin will be valid.   
Please install `flow-bin`.
```
$ npm i flow-bin --save-dev
```

#### react
| Type | Default |
| :--- | :--- |
| boolean | false |

If select `true`, babel-preset-react, react-hot-loader and babel-preset-react-optimize will be valid.  
Please install `react`, `react-dom`, `react-hot-loader@next`.
```
$ npm i react react-dom react-hot-loader@next
```

### css
#### modules
| Type | Default |
| :--- | :--- |
| boolean | false |

If select `true`, will add module option to css-loader.

Output class name will be changed by the environment.  
When `process.env.NODE_ENV` is production, a class name is  `[hash:base64:5]`.  
In other cases, a class name is `[path]__[name]__[local]__[hash:base64:5]` for make debugging easier.

### postcss
| Type | Default |
| :--- | :--- |
| boolean | false |

If select `true`, will add postcss-loader to `module.rules`.  
Please add `postcss.config.js` to your project.
```
$ touch postcss.config.js
```
see [samples/all](https://github.com/abouthiroppy/sweetpack/tree/master/samples/all)

### html
sweetpkack uses [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

#### filename
| Type | Default |
| :--- | :--- |
| string | null |

The file to write the HTML to.

#### template
| Type | Default |
| :--- | :--- |
| string | null |

Specify the path of template for the generated HTML.  

see [the template option](https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md)

### dev
#### env
Specify `.env`'s path.  
If not specified, will look for `.env`.  

### port
| Type | Default |
| :--- | :--- |
| number | 8080 |

Specify the port of webpack-dev-server.

### analyzer
| Type | Default |
| :--- | :--- |
| boolean | false |

If select `true`, will use webpack-bundle-analyzer at dev.

### dashboard
| Type | Default |
| :--- | :--- |
| boolean | true |

If select `false`, will remove webpack-dashboard at dev.

### prod
#### env
Specify `.env`'s path.
If not specified, will look for `.env`.  

#### url
If select `true`, will use url-loader when prod.

#### extract
| Type | Default |
| :--- | :--- |
| boolean | false |

If select `true`, will use extract-text-webpack-plugin when prod.  
html, js, css, images, etc are output to `dist` in their respective files.

As you can see,   
[samples/all#production-build](https://github.com/abouthiroppy/sweetpack/tree/master/samples/all#production-build)

## Packages Included
### webpack
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)(only watch mode)

#### Loaders
- [file-loader](https://github.com/webpack-contrib/file-loader)
- [url-loader](https://github.com/webpack-contrib/url-loader)(default: `false`)
- [style-loader](https://github.com/webpack-contrib/style-loader)
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [postcss-loader](https://github.com/postcss/postcss-loader)(default: `false`)
- [react-hot-loader](https://github.com/gaearon/react-hot-loader)(default: `false`, becomes effective when `js.react` is `true`)

#### Plugins
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack)
- [case-sensitive-paths-webpack-plugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin)
- [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard)(only watch mode, default: `true`)
- [flow-status-webpack-plugin](https://github.com/diegodurli/flow-status-webpack-plugin)(default: `false`)
- [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)(default: `false`)
- [babel-minify-webpack-plugin](https://github.com/webpack-contrib/babel-minify-webpack-plugin)(only production mode)
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)(only production mode)
- [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)(only production mode, default: `false`)
- webpack.optimize.OccurrenceOrderPlugin(only production mode)
- webpack.optimize.AggressiveMergingPlugin(only production mode)

### babel
- [babel-preset-env](https://github.com/babel/babel-preset-env)
- [babel-preset-stage-1](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-1)
- [babel-preset-flow](https://github.com/babel/babel/tree/master/packages/babel-preset-flow)(default: `false`, becomes effective when `js.flow` is `true`)
- [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)(default: `false`, becomes effective when `js.react` is `true`)
- [babel-preset-react-optimize](https://github.com/thejameskyle/babel-react-optimize)(default: `false`, becomes effective when `js.react` is `true`)
- [babel-polyfill](https://github.com/babel/babel/tree/master/packages/babel-polyfill)(default: `false`)

### Activated Plugins
#### Common
- html-webpack-plugin
  - option: `html.filename`, `html.template`
- dotenv-webpack
  - can specify each file of dev and prod, if not specified, will look for `.env`
- case-sensitive-paths-webpack-plugin
- flow-status-webpack-plugin(default: `false`)
  - option: `js.flow`
- file-loader
  - corresponding extension: `png`, `jpg`, `gif`, `svg`, `woff2`
- style-loader
- css-loader
  - option: `css.modules`(for css modules)
  - corresponding extension: `css`, `scss`
- postcss-loader(default: `false`)
  - option: `css.postcss`
    - postcss.config.js is required if enabled
- babel-preset-env
- babel-preset-stage-1
- babel-preset-flow(default: `false`)
  - option: `js.flow`
- babel-preset-react(default: `false`)
  - option: `js.react`

#### Watch
- webpack-dev-server
- webpack-dashboard(default: `true`)
- react-hot-loader(default: `false`)
  - option: `js.react`
- webpack-bundle-analyzer(default: `false`)

#### Build
- url-loader(default: `false`)
- clean-webpack-plugin
- babel-minify-webpack-plugin
- babel-preset-react-optimize(default: `false`)
  - option: `js.react`
- extract-text-webpack-plugin(default: `false`)
  - option: `prod.extract`
- webpack.optimize.OccurrenceOrderPlugin
- webpack.optimize.AggressiveMergingPlugin

## Trouble Shooting
### `Cannot read property 'profile' of null` happens when executed.
If `js.react` is `true`, check the version of react-hot-laoder.   
sweetpack only supports versions above 3 so please install `react-hot-loader@next`.
