const path = require('path')

module.exports = (config, webpackConfig) => {
  const { specFiles, fixtureDocs, mode } = config
  const karmaConfig = {
    files: [
      {
        pattern: specFiles,
        watched: false
      },
      fixtureDocs
    ],
    exclude: [],
    preprocessors: {
      [specFiles]: ['webpack'],
      [fixtureDocs]: ['html2js']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    frameworks: ['mocha', 'fixture', 'sinon', 'power-assert'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      dir: path.join(process.cwd(), './coverage'),
      subdir: 'report',
      file: path.join(process.cwd(), './coverage/report/lcov.info')
    },
    browsers: ['CustomHeadless', 'CustomChrome'],
    customLaunchers: {
      CustomHeadless: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--remote-debugging-port=9222']
      },
      CustomChrome: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--ignore-certificate-errors', '--remote-debugging-port=9222']
      }
    },
    captureTimeout: 60000,
    singleRun: true
  }
  // If mode value is `watch`,
  if (mode === 'watch') {
    karmaConfig.coverageReporter = {
      type: 'text-summary'
    }
    karmaConfig.singleRun = false
  }
  if (mode === 'debug') {
    karmaConfig.browsers = ['CustomChrome']
    karmaConfig.singleRun = false
  } else {
    karmaConfig.browsers = ['CustomHeadless']
  }
  return karmaConfig
}
