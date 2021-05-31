const path = require('path');
const webpackProdConfig = require('./webpack.config');

module.exports = Object.assign(webpackProdConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
});
