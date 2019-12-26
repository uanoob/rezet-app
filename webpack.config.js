const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'public', 'index.html'),
});

const cssPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
});

const clearPlugin = new CleanWebpackPlugin();

const dotEnvPlugin = new Dotenv();

const PUBLIC_URL = process.env.PUBLIC_URL || '/';

const urlPlugin = new webpack.DefinePlugin({
  'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL),
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: PUBLIC_URL,
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/public/icons/[name].[ext]',
      },
    ],
  },
  plugins: [htmlPlugin, cssPlugin, clearPlugin, urlPlugin, dotEnvPlugin],
};
