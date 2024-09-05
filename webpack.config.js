const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    devServer: {
        static: [
            {
                directory: path.join(__dirname),
            },
        ],
    },
    output: {
        fileName: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.tsc?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extentions: ['.ts', '.js']
    }
};