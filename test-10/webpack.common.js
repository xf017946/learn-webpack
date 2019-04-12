const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env'],
  //           plugins: [require('@babel/plugin-proposal-object-rest-spread')]
  //         }
  //       }
  //     }
  //   ]
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}