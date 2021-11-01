const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
     
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-bundle.js',
    },
    module: {
        rules: [
  {test: /\.scss$/i,
        test: /\.css$/i,
        use: ["style-loader", "MiniCssExtractPlugin.loader", "css-loader", "sass-loader"],
            },
             {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
      
    },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin({ filename: 'styles.css'}),
    ],
    devServer: {
        port: 4444,
        open: true,
       
       
    },

};