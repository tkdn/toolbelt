# @tkdn/toolbelt-karma

## Install
```
npm i @tkdn/toolbelt-karma
yarn add @tkdn/toolbelt-karma
```

## Usage
```js
const { Server } = require('karma')
const webpackConfig = require('@tkdn/toolbelt-babel')({
  env: 'test'
})
const karmaConfig = require('@tkdn/toolbelt-karma')(
  {
    specFiles: '__test__/**/*.test.js',
    fixtureDocs: '__test__/**/*.html'
  },
  webpackConfig
)
const server = new Server(karamConfig)
server.start()
```

