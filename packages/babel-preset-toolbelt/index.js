module.exports = (ctx, options) => {
  const { env, debug, coverageExludes } = options
  const testPlugins = []
  // test env plugins
  if (env === 'test') {
    testPlugins.push(
      [
        require('babel-plugin-istanbul').default,
        {
          exclude: coverageExludes || ['**/*.test.js']
        }
      ],
      require('babel-plugin-espower')
    )
  }
  return {
    presets: [
      [
        require.resolve('babel-preset-env'),
        {
          debug: debug || false,
          targets: options.targets || { browsers: ['last 1 Chrome versions'] },
          modules: false,
          loose: true,
          // Now, in Babel6 we manually insert `import "babel-polyfill"` in source code
          // If we decides Babel7, this key set 'usage'
          useBuiltIns: true
        }
      ]
    ],
    plugins: [
      [require('babel-plugin-transform-class-properties'), { loose: true }],
      [require('babel-plugin-transform-object-rest-spread'), { useBuiltIns: true }],
      ...testPlugins
    ]
  }
}
