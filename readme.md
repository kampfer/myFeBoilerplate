# 基于webpack构建项目的脚手架

1. 支持es6

通过[babel-loader](https://webpack.js.org/loaders/babel-loader/)保证es6在目标浏览器中可用

2. 支持html模板，实现文件指纹自动更新

[HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

3. 支持less

[less-loader](https://webpack.js.org/loaders/less-loader/)

## TODO

4. 生成单独的样式文件

https://webpack.js.org/plugins/mini-css-extract-plugin/

5. 支持引用图片

# 一些约定

1. 文件和目录命名使用驼峰式命名法
2. 每个模块使用的资源文件（js、less、图片等）归档到同一个目录下