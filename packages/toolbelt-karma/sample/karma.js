const { Server } = require('karma')
const config = require('../')
const webpackConfig = require('@tkdn/toolbelt-babel')({
  env: 'test'
})
const server = new Server(
  config(
    {
      specFiles: 'sample/__test__/**/*.test.js',
      fixtureDocs: 'sample/__test__/**/*.html'
    },
    webpackConfig
  )
)
server.start()
