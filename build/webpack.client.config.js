const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
  entry: {
    app: './src/entry-client.js'
  },
  optimization: {
    splitChunks: {
      minSize: 100000,
      chunks: 'initial',
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      name: true
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin(['APP_LOCALE']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      'process.browser': true,
      'process.server': false
    }),
    new VueSSRClientPlugin()
  ]
})
