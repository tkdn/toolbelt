const path = require('path')
const toolbeltBabel = require('@tkdn/toolbelt-babel')

module.exports = options => toolbeltBabel(options, {
  entry: {
    'assets/js/bundle': './src/js/index.js'
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].js',
    publicPath: ''
  }
})
