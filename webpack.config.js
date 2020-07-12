const join = require('path').join;
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: join(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};