const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkgName = require('./package.json').name

module.exports = (options, config) => {
  const { env, includePaths, targets } = options
  const PRODUCTION = env === 'production'
  const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: false,
    allChunks: true
  })
  return merge({
    name: pkgName,
    devtool: !PRODUCTION
      ? 'source-map'
      : false,
    entry: {/* default entry is empty */},
    output: {/* default output is empty */},
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: extractSass.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: !PRODUCTION
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: loader => [
                    require('autoprefixer')(targets)
                  ],
                  sourceMap: !PRODUCTION
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: includePaths || [],
                  outputStyle: PRODUCTION
                    ? 'compressed'
                    : 'expanded',
                  data: `$env: "${env}";`,
                  sourceMap: !PRODUCTION
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      extractSass
    ]
  }, config)
}
