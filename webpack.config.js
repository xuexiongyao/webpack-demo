/**
 * Created by christ on 2017/7/26.
 */
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {//Loading CSS
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {//Loading Images
                test:/\.(png|jpg|gif|svg)$/,
                use:[
                    'file-loader'
                ]
            },
            {//Loading Fonts
                test:/\.(otf|ttf|eot|woff|woff2|svg)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    }
};