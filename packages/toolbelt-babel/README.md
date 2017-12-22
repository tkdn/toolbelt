# @tkdn/toolbelt-babel

## Install
```
npm i @tkdn/toolbelt-babel
yarn add @tkdn/toolbelt-babel
```

## Usage
```js
module.exports = options => require('@tkdn/toolbelt-babel')(options, {
  entry: {
    'assets/js/bundle': './src/js/index.js'
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].js',
    publicPath: ''
  }
})
```

