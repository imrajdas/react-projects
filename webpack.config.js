const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
  });
  
module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry:  './index.js',
    output: {
      path: path.resolve('public'),
      filename: 'bundle.js'
    },
  
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015','react']
          }
        },
      ]
    },
    // plugins: [htmlWebpackPlugin],

    devServer: {
      contentBase: './public',
      inline: true,
    }
  }
        