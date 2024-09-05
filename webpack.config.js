const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    target: "node",
    devServer: {
        static: [
            {
                directory: path.join(__dirname),
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./dist/",
    },
    module: {
        rules: [
            {
                test: /\.tsc?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            path: require.resolve("path-browserify"),
        },
    },
};
