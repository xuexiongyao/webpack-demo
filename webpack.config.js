/**
 * Created by christ on 2017/7/26.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        app:'./src/index.js',
        print:'./src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Output Management'
        })
    ],
    output: {
        // filename: 'bundle.js',
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
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