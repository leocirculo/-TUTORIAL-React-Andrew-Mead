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
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
};
