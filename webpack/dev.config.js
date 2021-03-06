const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "z-mosaic.bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          use: ['url-loader']
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
