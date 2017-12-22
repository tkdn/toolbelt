const path = require('path')
const toolbeltSass = require('@tkdn/toolbelt-sass')

module.exports = options => toolbeltSass(options, {
  entry: {
    'assets/css/style': './src/scss/style.scss'
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].css',
    publicPath: ''
  }
})
