# @tkdn/toolbelt-sass

## Install
```
npm i @tkdn/toolbelt-sass
yarn add @tkdn/toolbelt-sass
```

## Usage
```js
module.exports = options => require('@tkdn/toolbelt-sass')(options, {
  entry: {
    'assets/css/style': './src/scss/style.scss'
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].css',
    publicPath: ''
  }
})
```
