var webpack = require("webpack");
var path = require("path");

var Dev = path.resolve(__dirname, "dev");
var OutPut = path.resolve(__dirname, "output");

var config = {
    // entry: Dev + "/index.jsx",
    entry: Dev + "/list.jsx",
    output: {
        path: OutPut,
        // filename: 'myCode.js'
        filename: 'myList.js'
    },
    module: {
        loaders: [{
            include: Dev,
            loader: "babel-loader",
        },{
            test:/\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    devtool: 'source-map' ,  //在浏览器里面进行调试代码用
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]

}
module.exports = config;