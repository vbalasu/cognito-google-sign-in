// SOURCE: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/webpack.html
// Import path for resolving file paths
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
  // Specify the entry point for our app.
  //entry: [path.join(__dirname, "index.js")],
  entry: "./src/index.js",
  // Specify the output file containing our bundled code.
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
   // Enable WebPack to use the 'path' package.
   resolve:{
  fallback: { path: require.resolve("path-browserify")}
  }
  /**
  * In Webpack version v2.0.0 and earlier, you must tell 
  * webpack how to use "json-loader" to load 'json' files.
  * To do this Enter 'npm --save-dev install json-loader' at the 
  * command line to install the "json-loader' package, and include the 
  * following entry in your webpack.config.js.
  * module: {
    rules: [{test: /\.json$/, use: use: "json-loader"}]
  }
  **/
};
