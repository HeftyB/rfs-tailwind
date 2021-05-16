const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", 
  entry: "./src/index.js", 
  output: {
    path:path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "main.js",
    },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
    ],
  },
  resolve: {
    modules: ["node_modules",path.resolve(__dirname, "app")],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  performance: {
    hints: "warning",
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map",
  target: "web",
  stats: "errors-only",
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 3000,
    hot: true,
    https: false,
    // noInfo: true,
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      template: "./public/index.html"
    }),

  ],
}