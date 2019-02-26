const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
// const MinifyPlugin = require('terser-webpack-plugin')

module.exports = merge(baseConfig, {
  entry: {
    app: './src/entry-client.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'initial'
    },
    // minimizer: [
    //   new MinifyPlugin({
    //     cache: true,
    //     parallel: true
    //   }),
    // ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({'APP_LOCALE': 'en'}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'process.browser': true,
      'process.server': false
    }),
    new VueSSRClientPlugin()
  ]
})
