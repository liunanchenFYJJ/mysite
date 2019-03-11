const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './index.ts'
    },
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/static/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            favicon: 'favicon.ico'
        }),
        // new CopyWebpackPlugin([{
        //     from: __dirname + '/src/img',
        //     to: __dirname + '/dist/static/img'
        // }])
    ],
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        // proxy: {
        //     'api': {
        //         target: '',
        //         pathRewrite: { '^api': '' },
        //         changeOrigin: true,
        //         secure: false
        //     }
        // }
    },
    module: {
        rules: [
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
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', 'ts', '.js']
    }
}