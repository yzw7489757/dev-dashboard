const webpack = require('webpack');
const { resolve } = require('path')

const { name, version } = require('../package.json')

const base = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: resolve(__dirname, '../src/components'),
      assets: resolve(__dirname, '../src/assets'),
    }
  },

  output: {
    library: name,
    libraryTarget: 'umd',
    filename: '[name].js',
    path: resolve(__dirname, '../lib')
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                ["@babel/proposal-decorators", { "legacy": true }],
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-async-generator-functions',
                "@babel/plugin-proposal-optional-chaining",
                ['@babel/plugin-transform-runtime', {
                  'regenerator': true,
                  'helpers': false
                }]
              ]
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              quiet: true,
              failOnError: false,
              fix: false
            }
          }
        ]
      },
      {
        test: /\.less|css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            }
          },
          {
            loader: 'less-loader',
            options: { sourceMap: true, javascriptEnabled: true},
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin({banner: `${name}@${version}`})
  ]
}

module.exports = base;