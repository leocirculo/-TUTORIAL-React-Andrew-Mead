var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './public/app.jsx'
  ],
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    }),
  ],
  output: {
    path: __dirname,
    filename: './public/[name].js',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      Views: path.resolve(__dirname, 'public/views/'),
      Components: path.resolve(__dirname, 'public/components/'),
    },
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  devtool: 'eval-source-map',
  performance: {
    hints: false,
  },
};
