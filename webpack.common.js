const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './client/index.js'
    },
   plugins: [
       new HtmlWebpackPlugin({
           template: 'views/index.html'
     })
   ],
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
 };
