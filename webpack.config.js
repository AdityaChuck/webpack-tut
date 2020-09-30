const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/test1.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname,"src")],
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ['@babel/preset-env']
                        }
                    }   
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ]
            }
        ]
    }
}