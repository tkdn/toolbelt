module.exports = {
  parserOptions: {
    ecmaVersion: 2017
  },
  parser: 'babel-eslint',
  extends: 'standard',
  plugins: ['prettier', 'standard', 'node', 'promise', 'import'],
  rules: {
    'prettier/prettier': ['error', require('./package.json').prettier],
    // prefer to prettier
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  env: {
    node: true,
    es6: true,
    mocha: true
  },
  globals: {
    assert: true
  }
}
