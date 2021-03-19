const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var SRC_DIR = path.resolve(__dirname, "src");
module.exports = {
  mode: "development",
  entry: "/src/app/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        use: "babel-loader",
      },
    ],
  }
};
