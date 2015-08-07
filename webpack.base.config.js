var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV;

var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

var config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: {
    app: './app/frontend/javascripts/app.jsx',
    contact: './app/frontend/javascripts/contact.jsx',
  },

  output: { },
  cache: false,

  resolve: {
    // tell webpack which extensions to auto search when it resolves modules. With this,
    // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
    extensions: ['', '.js', '.jsx'],
    // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
    // Bower, we want it to look in there too
    modulesDirectories: [
      'web_modules',
      'node_modules',
      'app/frontend/javascripts'
    ]
  },

  plugins: [
   // Pass environment through to scripts
   new webpack.DefinePlugin({
    __DEV__: env.development,
    __STAGING__: env.staging,
    __PRODUCTION__: env.production,
    __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
  }),

  new webpack.ProvidePlugin({
    React: 'react/addons'
  }),

    // we need this plugin to teach webpack how to find module entry points for bower files,
    // as these may not have a package.json file
    // new webpack.ResolverPlugin([
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    // ]),

  ],

  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],

    loaders: [],

    noParse: /\.min\.js/
  }
};
