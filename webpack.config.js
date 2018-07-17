var path= require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack=require('webpack');

module.exports={
    entry:'./src/app.js',
    output:{
        // 输出的文件夹
        path: path.resolve(__dirname, 'dist'),
        // 输出的文件夹名称
        filename:'bundles.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:'css-loader'
            },
            {
                test:/\.txt$/,
                use:'raw-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template: './src/index.html'}),
    ]
}