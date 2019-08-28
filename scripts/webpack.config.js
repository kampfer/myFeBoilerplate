module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader', // creates style nodes from JS strings
            }, {
                loader: 'css-loader', // translates CSS into CommonJS
            }, {
                loader: 'less-loader', // compiles Less to CSS
            }]
        }]
    },
    devServer: {
        contentBase: './dist'
    }
};