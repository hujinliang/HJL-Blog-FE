/**
 * Created by jialao on 2016/7/6.
 */
/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');
var path = require('path')

module.exports = {

    output: {
        publicPath: "/public/",
        path: path.join(__dirname,'public/'),
        filename: 'bundle.js'
    },
    
    entry: ["webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",'./src/index.js'],


    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot','babel?presets[]=react,presets[]=es2015,presets[]=stage-0,presets[]=react-hmre,plugins[]=transform-decorators-legacy,plugins[]=syntax-async-functions'],
            },
            {
                test: /.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            },
            { test: /\.json$/, loader: "json-loader" },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url?limit=10000'
                ]
            },
            {
                test: /.css$/,
               
                loader: 'style!css'
            },
            {
                test:/.less$/,
                loader:'style!css!less'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'url?limit=10000&name=images/[hash:8].[name].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};
