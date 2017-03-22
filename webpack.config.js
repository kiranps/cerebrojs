var path = require('path');
var webpack = require('webpack');
var env = process.env.WEBPACK_ENV;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: './index.js',
    output: {
      filename: 'cerebro.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new UglifyJsPlugin({ minimize: true })
    ]
};
