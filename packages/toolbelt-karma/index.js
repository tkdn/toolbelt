const path = require('path')
const { Server } = require('karma')

const server = new Server({})
server.start()

module.exports = (config, options, webpackConfig) => {
  const { specFiles, fixtureDoc } = config
  const { testmode } = options
  const karmaConfig = {
    files: [
      {
        pattern: specFiles,
        watched: false
      },
      fixtureDoc
    ],
    exclude: [],
    preprocessors: {
      [specFiles]: ['webpack'],
      [fixtureDoc]: ['html2js']
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
    captureTimeout: 60000
  }
  if (testmode === 'watch') {
    karmaConfig.coverageReporter = {
      type: 'text-summary'
    }
    karmaConfig.singleRun = true
  }
  if (testmode === 'debug') {
    karmaConfig.browsers = ['CustomChrome']
  } else {
    config.browsers = ['CustomHeadless']
  }
  return karmaConfig
}
