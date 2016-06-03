var webpack = require('webpack');
var config = module.exports = require('./webpack.config.js');

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    mangle: {
      except: ['$super', '$', 'exports', 'require']
      //以上变量‘$super’, ‘$’, ‘exports’ or ‘require’，不会被混淆
    },
    compress: {
      warnings: false
    }
  })
);

config.plugins.push(
  new webpack.NoErrorsPlugin()
);

module.exports = config;
