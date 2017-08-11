/**
 * Created by christ on 2017/8/11.
 */

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleWare(compiler,function () {
    publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000,function () {
    console.log('Example app listening on port 3000!\n');
});

