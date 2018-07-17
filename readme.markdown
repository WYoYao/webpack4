# webpack4

> webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。
> **webpack v4.0.0 开始 支持默认配置** 然而，webpack 仍然还是高度可配置的。

> 四个核心概念
>- 入口(entry)
>- 输出(output)
>- loader
>- 插件(plugins)


### 入口entry
> 入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始。

> [详细内容](https://www.webpackjs.com/configuration/entry-context/#entry)

```javascript
module.exports={
    entry:'./src/app.js'
}
```

### 输出output

> output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件.

```javascript
var path= require('path');
module.exports={
    entry:'./src/app.js',
    output:{
        // 输出的文件夹
        path: path.resolve(__dirname, 'dist'),
        // 输出的文件夹名称
        filename:'bundles.js'
    }
}
```

### loader

> loader 让 webpack 能够去处理那些**非 JavaScript 文件**（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

>- test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
>- use 属性，表示进行转换时，应该使用哪个 loader。
> 当webpack 编辑的到 require() / import 语句中的内容时候，会先用 test进行检查，然后使用use 对应的loader 进行转换。

> 使用loader 之前需要下载
```
npm install raw-loader 
```

```
var path= require('path');
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
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
}
```

### 插件(plugins)

> loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。
> 想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。[插件列表](https://www.webpackjs.com/plugins/)

```
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
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'}),
    ]
}
```


### 模式mode

```
module.exports = {
  mode: 'production'
};
```
选项|描述
--|--
development|会将 process.env.NODE_ENV 的值设为 development。启用 [NamedChunksPlugin](https://webpack.docschina.org/plugins/commons-chunk-plugin) 和 [NamedModulesPlugin](https://www.webpackjs.com/plugins/named-modules-plugin/)。
production|会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.

```javascript
// webpack.development.config.js
module.exports = {
mode: 'development'
// 相当于添加了两个插件
plugins: [
  // 当开启 热替换 的时候使用该插件会显示模块的相对路径
  new webpack.NamedModulesPlugin(), 
  // 编译时可以配置的全局常量
  new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
]
}
```

```javascript
// webpack.production.config.js
module.exports = {
  mode: 'production',
  // 当配置mode 的时候相当于的启用的这四个插件   
  plugins: [
    // 代码压缩
    new UglifyJsPlugin(),
    //  编译时可以配置的全局常量.js 中的环境变量
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    // 让代码文件更小、运行的更快
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段，这样可以确保输出资源不会包含错误
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
```