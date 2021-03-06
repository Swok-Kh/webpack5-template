const path = require("path");

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../build"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
