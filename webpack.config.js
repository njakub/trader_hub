const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/traderApp.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename : 'ui-[name]-module.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import',
                            'angularjs-annotate'
                        ] 
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: [{
                  loader: 'style-loader', // inject CSS to page
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader: 'sass-loader' // compiles Sass to CSS
                }]
              },
              {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              }
            ,
            {
                test: /\.html$/,
                exclude:[/(index.html)/],
                use: [{
                    loader: 'file-loader?name=[path][name].[ext]'
                },{
                    loader: 'extract-loader'
                },{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 0,
                        name: './css/fonts/[name].[ext]'
                    }
                }]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
            jquery: 'jquery' 
        }),
        new ExtractTextPlugin({
            filename: 'public/css/[name][md5:contenthash:hex:20].css',
            allChunks: true
        })
    ]
}