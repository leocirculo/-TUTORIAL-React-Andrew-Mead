module.exports = {
  mode: 'production',
  entry: './public/app.jsx',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  devtool: 'eval-source-map',
  performance: {
    hints: false,
  },
};
