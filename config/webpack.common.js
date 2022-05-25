const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: ['@babel/polyfill', paths.src + '/index.tsx'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),

    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: './',
          globOptions: { ignore: ['*.DS_Store', '**/index.html'] },
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'webpack boilerplate',
      template: paths.public + '/index.html',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  prettier: false,
                  svgo: false,
                  svgoConfig: {
                    plugins: [{ removeViewBox: false }],
                  },
                  titleProp: true,
                  ref: true,
                },
              },
              {
                loader: 'file-loader',
                options: {
                  name: 'static/media/icon/[name].[hash].[ext]',
                },
              },
            ],
            issuer: {
              and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
          },
        ].filter(Boolean),
      },

      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { cacheDirectory: true },
        }],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|avif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/image/[name][ext]',
        },
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name][ext]',
        },
      },

      {
        test: /\.pdf/,
        type: 'asset/resource',
        generator: {
          filename: 'static/docs/[name].[ext]',
        },
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.tsx', '.ts', '.jsx', '.json'],
  },
};
