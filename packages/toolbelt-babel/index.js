const pkgName = require('./package.json').name
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const babelPreset = require('@tkdn/babel-preset-toolbelt')

module.exports = (options, config) => {
  const { env, hasBabelrc } = options
  const PRODUCTION = env === 'production'
  const TEST = env === 'test'
  return merge({
    name: pkgName,
    devtool: !PRODUCTION && !TEST
      ? 'inline-source-map'
      : false,
    entry: {/* default entry is empty */},
    resolve: {
      modules: [
        path.join(process.cwd(), 'node_modules')
      ]
    },
    output: {/* default output is empty */},
    module: {
      exprContextCritical: false,
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            babelrc: hasBabelrc,
            presets: hasBabelrc
              ? []
              : [babelPreset(null, options)]
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      })
    ].concat(
      PRODUCTION
        ? [new webpack.optimize.UglifyJsPlugin()]
        : []
    )
  }, config)
}
