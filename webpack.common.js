const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


const pages = ["index", "about"];

module.exports = {
    entry: "./src/index.js",
    plugins: [].concat(
        pages.map(
          (page) =>
            new HtmlWebpackPlugin({
              template: `./src/pages/${page}.html`,
              filename: `${page}.html`,
            })
        )
      ),
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
              },
              {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    }
}