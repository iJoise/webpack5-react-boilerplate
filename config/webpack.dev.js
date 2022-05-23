const {merge} = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {styleLoadersRule} = require('./utils');

const common = require('./webpack.common')

module.exports = merge(common, {
   mode: 'development',
   stats: 'errors-warnings',
   devtool: 'cheap-module-source-map',
   devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: true,
      client: {
         overlay: {
            errors: true,
            warnings: false,
         },
         logging: 'none'
      },
      port: 3000,
   },

   plugins: [
      new ReactRefreshWebpackPlugin({
         overlay: false
      })
   ],
   module: {
      rules: styleLoadersRule('development', true)
   },
})
