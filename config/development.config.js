var webpack = require('webpack');
var config = module.exports = require('./webpack.config.js');

config.devtool = 'cheap-module-eval-source-map';
config.debug = true;
config.displayErrorDetails = true;
config.outputPathinfo = true;

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
       NODE_ENV: JSON.stringify("production")
     }
  })
);

module.exports = config;
