const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const entryPoint = "script"
module.exports = {
    entry: `./js/${entryPoint}.js`,
    devtool: 'source-map',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'build/js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?optional[]=runtime',
                    options: {
                        presets: [
                            ["@babel/env", {
                                targets: {
                                    edge: "17",
                                    firefox: "60",
                                    chrome: "67",
                                    safari: "11.1",
                                    ie: "11"
                                },
                                useBuiltIns: "usage"
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};
