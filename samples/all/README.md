# Enable all options

## .sweetpack.yml
```yaml
entry:
  argon: ./src/argon.js
  boron: ./src/boron.js
  carbon: ./src/carbon.js
output: out # It is not necessary to specify a file name when multiple files are output. Automatically convert to [name].js
js:
  react: true
css:
  modules: true
  postcss: true
html:
  filename: index.html
  template: ./index.ejs
dev:
  env: .env.dev
  port: 8080
  dashboard: true
prod:
  env: .env.prod
  extract: true
```

## Preparation
```shell
$ npm i react react-dom react-hot-loader@next
$ npm i postcss-cssnext --save-dev # this time, to use this
$ touch postcss.config.js
```

## The main tools used
### react
- react
- babel-preset-react
- eact-hot-loader
- abel-preset-react-optimize

### html
html-webpack-plugin(this time, made `index.ejs` as a template)

### png
file-loader(it is not included in js)

### css
- style-loader
- css-loader
- postcss-loader
- cssnext(my choice)

### other
- dotenv-webpack(for `process.env.XXX`)
- webpack-dashboard
- extract-text-webpack-plugin(for separate files)

## Production Build
```shell
.out
├── argon.e26d5a32621f6ade4dca.js
├── boron.e26d5a32621f6ade4dca.js
├── carbon.e26d5a32621f6ade4dca.js
├── e22967ff5cf8eb6906190206353ec24f.png
├── index.html
└── styles.e26d5a32621f6ade4dca.css

0 directories, 6 files
```
