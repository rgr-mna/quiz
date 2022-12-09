const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        watchFiles: ["src/**/*"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ["@babel/preset-react", {
                            "runtime": "automatic"
                         }]]
                    }
                }
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ]
    }
}
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: "./src/index.js",
//   mode: "development",
//   devServer: {
//     watchFiles: ["src/**/*"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         include: path.resolve(__dirname, "src"),
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js"],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//         template:  path.resolve(__dirname, 'src', 'index.html')
//     }),
//   ],
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
// };