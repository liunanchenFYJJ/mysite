const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/static/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            // inject: true,
            favicon: 'favicon.ico'
        })
    ],
    // // devtool: 'inline-source-map',
    devServer: {
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT,
        contentBase: './index.html',
        // historyApiFallback: true, // 如果路由启用HTML5 History API
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    // options: {
                    //     name: '/img/[hash].[ext]',
                    //     publicPath: '/img/'
                    // }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', 'ts', '.js']
    }
}