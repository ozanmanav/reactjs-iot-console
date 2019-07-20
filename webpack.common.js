const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
  optimization: {
    usedExports: true
  },
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['./server/dist']),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'server', 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jp[e]?g|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[name]-[local]-[hash:base64]'
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: true
        }
      }

    ]
  }
};
