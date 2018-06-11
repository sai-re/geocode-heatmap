module.exports = {
    entry: ['./app/assets/js/main.js'],
    output: {
        filename: 'app/dist/js/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        port: 3000
    }
};