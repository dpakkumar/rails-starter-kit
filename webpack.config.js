const path = require("path");
const webpack = require("webpack");

module.exports = [{
  cache: true,
  context: __dirname,
  mode: 'development',
  entry: {
    'home-initializer': './app/javascript/my_app/home-initializer.jsx',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    chunkFilename: 'js/[name]-[chunkhash].app.js',
    publicPath: '/assets'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.js.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'app', 'javascript')],
        exclude: '/node_modules',
        loader: 'babel-loader',
      },
    ],
  },
}, {
  cache: true,
  devtool: 'eval',
  output: {
      pathinfo: true
  },
  stats: {
      errorDetails: false
  },
  mode: 'development'
}]