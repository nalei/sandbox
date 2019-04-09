const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-transform-runtime"
          ]
        }
      },
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to <template lang="pug"> in Vue components
          {
            resourceQuery: /^\?vue/,
            loader: 'pug-plain-loader',
            options: {
              doctype: 'html',
              basedir: process.cwd()
            }
          },
          // this applies to pug imports inside JavaScript
          {
            use: ['raw-loader', {
              loader: 'pug-plain-loader',
              options: {
                doctype: 'html',
                basedir: process.cwd()
              }
            }]
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
              limit: 4096
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg|otf)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]',
          limit: 4096
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackNotifierPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'sweetalert2$': 'sweetalert2/dist/sweetalert2.js',
      '@': path.join(__dirname, '../src')
    }
  },
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map'
}
