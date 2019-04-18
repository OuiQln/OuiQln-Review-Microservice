const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/src'),
  devtool: 'inline-source-map',
  watch: true,

  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
          ],
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

};
