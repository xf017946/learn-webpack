const webpack = require('webpack')
const merge = require('webpack-merge')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  plugins: [
    // new UglifyJSPlugin()
  ],
  mode: 'production',
  plugins: [
    new MinifyPlugin({}, {
      // sourceMap: 'cheap-source-map'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})