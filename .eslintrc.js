module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  plugins: ['prettier', 'standard', 'node', 'promise', 'import'],
  rules: {
    'prettier/prettier': ['error', require('./package.json').prettier]
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
