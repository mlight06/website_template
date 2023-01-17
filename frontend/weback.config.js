const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'deploy'),
  },
  rules: [
    {
      test: /\.jsx$|\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }
    }
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output',
    }),
  ],
};
