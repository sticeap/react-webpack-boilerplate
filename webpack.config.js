/* eslint-disable no-var */
var webpack = require('webpack')
var path = require('path')
var cssnano = require('cssnano')

const BASE_CSS_LOADER = 'css?sourceMap&-minimize'

const cssModulesLoader = [
    BASE_CSS_LOADER,
    'modules',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&')

module.exports = {
    context: __dirname + "/scripts",
    entry: [
        'webpack-dev-server/client?http://localhost:5000',
        'webpack/hot/dev-server',
        'index'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        root: path.resolve('./scripts'),
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    postcss: [
        cssnano({
            autoprefixer: {
                add: true,
                remove: true,
                browsers: ['last 2 versions']
            },
            discardComments: {
                removeAll: true
            },
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            sourcemap: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'scripts')
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    BASE_CSS_LOADER,
                    'postcss',
                    'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    cssModulesLoader,
                    'postcss'
                ]
            }
        ]
    }
};
