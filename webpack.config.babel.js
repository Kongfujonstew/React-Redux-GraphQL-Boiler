const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('Building  . . . process.env.NODE_ENV: ', process.env.NODE_ENV);

module.exports = (env) => {
  return {
    name: 'main',
    target: 'web',
    context: resolve('src'),
    entry: 
    // [
      // 'react-hot-loader/patch',

      // 'webpack-dev-server/client?http://localhost:9000',

      // 'webpack/hot/only-dev-server',

      './components/browserApp.js',

      // Uncomment this line to recompile the admin page w/ graphiql interface
      // admin: './admin/admin.js'
    // ],
    output: {
      filename: 'main.js',
      path: resolve('src/public')
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    devtool: process.env.NODE_ENV === 'production' ? 'none' : 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style',
            use: 'css'
          }),
        }
      ]
    },
    // devServer: {
    //   contentBase: resolve('src'),
    //   compress: true,
    //   port: 9000,
    //   hot: true,
    //   historyApiFallback: true
    // },

    plugins: [
      new ExtractTextPlugin('bundle.css', {allChunks: true})
    ]
    // plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // // enable HMR globally

    // new webpack.NamedModulesPlugin(),
    // // prints more readable module names in the browser console on HMR updates

    // new webpack.NoEmitOnErrorsPlugin(),
    // // do not emit compiled assets that include errors
    // ],
  }
};
