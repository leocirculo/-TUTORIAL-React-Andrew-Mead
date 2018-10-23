const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['public/tests/**/*.test.jsx'],
    preprocessors: {
      'public/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000',
      },
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
};
