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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module:{
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            // new HtmlWebpackPlugin({
            //   title: 'Webpack Output',
            // }),
            "@babel/plugin-transform-runtime"
          ],
        }
      }
    ],
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: [
  //             ['@babel/preset-env', '@babel/preset-react',{ targets: "defaults" } ]
  //           ],
  //           plugins: [
  //             //     // new HtmlWebpackPlugin({
  //             //     //   title: 'Webpack Output',
  //             //     // }),
  //                 "@babel/plugin-transform-runtime"
  //               ],
  //         }
  //       }
  //     }
  //   ]
  // }
};
