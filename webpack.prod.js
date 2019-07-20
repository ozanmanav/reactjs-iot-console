const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    usedExports: true
  },
  devtool: 'source-map'
});
