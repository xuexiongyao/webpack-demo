/**
 * Created by christ on 2017/7/26.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: './src/index.js',
    entry: {
        // app:'./src/index.js',
        // print:'./src/print.js',
        app:'./src/index.js'
    },
    devtool: 'inline-source-map',//using source map
    devServer: {
        contentBase:'./dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        })
    ],
    output: {
        // filename: 'bundle.js',
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader','css-loader'
                ]
            }
        ]
    }
    // module: {
    //     rules: [
    //         {//Loading CSS
    //             test: /\.css$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {//Loading Images
    //             test:/\.(png|jpg|gif|svg)$/,
    //             use:[
    //                 'file-loader'
    //             ]
    //         },
    //         {//Loading Fonts
    //             test:/\.(otf|ttf|eot|woff|woff2|svg)$/,
    //             use:[
    //                 'file-loader'
    //             ]
    //         },
    //         {//Loading Data
    //             test:/\.(csv|tsv)$/,
    //             use:[
    //                 'csv-loader'
    //             ]
    //         },
    //         {//Loading Data
    //             test:/\.xml$/,
    //             use:[
    //                 'xml-loader'
    //             ]
    //         }
    //     ]
    // }
};