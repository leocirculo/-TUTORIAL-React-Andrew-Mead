var webpack = require('webpack');

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
    filename: './public/bundle.js',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      Greeter: 'public/components/Greeter.jsx',
      GreeterMsg: 'public/components/GreeterMsg.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx',
      OpenWeatherMap: 'public/api/openWeatherMap.jsx',
    },
    extensions: ['.js', '.jsx'],
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
