var webpack = require('webpack');
var _ = require('lodash');
var path = require('path');
var config = module.exports = require('./webpack.base.config.js');

config = _.merge(config, {
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: 'sourcemap',
});

config.output = _.merge(config.output, {
  // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
  path: path.join(__dirname, 'app/assets/javascripts'),
  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: '[name]-bundle.js',
  // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
  publicPath: '/public',

  // Ensure virtual source files from source maps are viewable in devTools under the domain
  // instead of at webpack://
  devtoolModuleFilenameTemplate: '[resourcePath]',
  devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
});

config.plugins.push(
  // Create a shared bundle file
  new webpack.optimize.CommonsChunkPlugin('shared', 'shared-bundle.js')
);

config.module.loaders.push({
  test: /\.jsx?$/,
  loader: 'babel',
  exclude: /(node_modules|bower_components)/,
  query: {
    optional: ['runtime'],
    stage: 0
  }
});
