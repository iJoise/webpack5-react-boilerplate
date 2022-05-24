const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { styleLoadersRule } = require('./utils');

const common = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  stats: 'none',
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
      logging: 'none',
    },
    port: 3000,
  },

  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
      },
      clearConsole: true,
    }),

    new ESLintPlugin({
      extensions: ["js", "mjs", "jsx", "ts", "tsx"],
      context: paths.src,
    })
  ],
  module: {
    rules: styleLoadersRule('development', true),
  },
});
