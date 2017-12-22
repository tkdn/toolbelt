# @tkdn/toolbelt-cli
`@tkdn/toolbelt-cli` provides wrapped commands with webpack.

## Features
- Portable and pluggable.You can add other configuration, if you want other loader or new features.
- Mini Configuration. You write easily webpack.config.js.

## Gettings start
```
npm i @tkdn/toolbelt-cli
yarn add @tkdn/toolbelt-cli
```
## Usage
```
Usage: toolbelt-cli

Commands:
  toolbelt-cli dev    For develoment, toolbelt watches and builds files.
  toolbelt-cli build  For production, toolbelt builds files.

Options:
  -v, --version
  -h, --help
  -c, --config   toolbelt setting file(JSON)  [default: "./.toolbeltrc"]
```

You locate `.toolbeltrc` in working root directory.  
If you want, cli can accept other location / other filename from argument.

## Commands
```
toolbelt-cli dev
```
For development, `dev` command is set environment variable `process.env.NODE_ENV === 'development'`.

```
toolbelt-cli build
```
For production, `build` command is set environment variable `process.env.NODE_ENV === 'production'`.

## `.toolbeltrc`
```
{
  "dev": {
    "targets": {
      "browsers": ["last 1 Chrome versions"]
    },
    "browserSync": "./config/bsconfig.js",
    "webpack": [
      "./config/toolbelt.babel.js",
      "./config/toolbelt.sass.js"
    ]
  },
  "build": {
    "targets": {
      "browsers": ["ie >= 11", "safari >= 9"]
    },
    "webpack": [
      "./config/toolbelt.babel.js",
      "./config/toolbelt.sass.js"
    ]
  }
}
```

Top level fields (`dev`, `build`) means your command.  
Whole sub fields are provided as a optional object for webpack.

### `targets` field
This field means `browserslist` value for autoprefixer and @babel/preset-env.

### `browserSync` field
This field means browserSync config file location.

### `webpack` field
This field means config file(s) location. It must be Array.  
Export type of config file(s) in array must be `object` or `funtion` with `options` argument.

#### Export type `object` / usual webpack config
```js
module.exports = {
  entry: {
    'assets/app.bundle': 'src/app.js'
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].js'
  }
}
```

#### Export type `function`
```js
module.exports = options => {
  const {
    targets,
    browserSync,
    webpack,
    hasBabelrc
    env
  } = options
  // targets: {"browsers":["last 1 Chrome versions"]}
  // browserSync: "./config/bsconfig.js"
  // webpack: ["./config/toolbelt.babel.js","./config/toolbelt.sass.js"]
  // hasBabelrc: false
  // env: "development" or "production"
  entry: {
    'assets/app.bundle': 'src/app.js'
  },
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ].concat(
    env === 'production'
      ? [new webpack.optimize.UglifyJsPlugin()]
      : []
  )
}
```
