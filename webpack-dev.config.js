const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackProdConfig = require('./webpack.config');

module.exports = Object.assign(webpackProdConfig, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
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
                test: /\.less$/,
                use: ["style-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        ...webpackProdConfig.plugins,
        new HtmlWebpackPlugin({
            title: "DNA frontend test app",
            template: './index.html'
        })
    ],
});