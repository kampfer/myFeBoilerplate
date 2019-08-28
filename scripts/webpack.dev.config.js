let config = require('./webpack.config');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign(config, {
    entry: {
        main: path.join(__dirname, '../src/assets/main')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html'),
            chunks: ['main']
        }),
    ]
});