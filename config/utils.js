const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const loaderUtils = require('loader-utils');
const paths = require('./paths');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const getStyleLoaders = (mode, cssOptions, preProcessor) => {
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';
  const loaders = [
    isDevelopment && 'style-loader',
    isProduction && {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: cssOptions,
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          ident: 'postcss',
          config: false,
          plugins: [
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              },
            ],
          ],
        },
        sourceMap: isProduction,
      },
    },
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push(
      {
        loader: 'resolve-url-loader',
        options: {
          sourceMap: isProduction,
          root: paths.src,
        },
      },
      {
        loader: preProcessor,
        options: {
          sourceMap: true,
        },
      },
    );
  }
  return loaders;
};

const getLocalIdent = (context, localIdentName, localName, options) => {
  const fileNameOrFolder = context.resourcePath.match(/index\.module\.(css|scss|sass)$/)
    ? '[folder]'
    : '[name]';
  const hash = loaderUtils.getHashDigest(
    path.posix.relative(context.rootContext, context.resourcePath) + localName,
    'md5',
    'base64',
    5,
  );
  const className = loaderUtils.interpolateName(
    context,
    `${fileNameOrFolder}_${localName}__${hash}`,
    options,
  );
  return className.replace('.module_', '_').replace(/\./g, '_');
};

const styleLoadersRule = (mode, sourceMap) => [
  {
    test: cssRegex,
    exclude: cssModuleRegex,
    use: getStyleLoaders(mode, {
      importLoaders: 1,
      sourceMap,
      modules: {
        mode: 'icss',
      },
    }),
    sideEffects: true,
  },
  {
    test: cssModuleRegex,
    use: getStyleLoaders(mode, {
      importLoaders: 1,
      sourceMap,
      modules: {
        mode: 'local',
        getLocalIdent,
      },
    }),
  },
  {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders(
      mode,
      {
        importLoaders: 3,
        sourceMap,
        modules: {
          mode: 'icss',
        },
      },
      'sass-loader',
    ),
    sideEffects: true,
  },
  {
    test: sassModuleRegex,
    use: getStyleLoaders(
      mode,
      {
        importLoaders: 3,
        sourceMap,
        modules: {
          mode: 'local',
          getLocalIdent,
        },
      },
      'sass-loader',
    ),
  },
];

module.exports = {
  styleLoadersRule,
};
