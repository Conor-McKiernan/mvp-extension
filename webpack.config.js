const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/test.tsx',
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/, // match all ts and tsx files
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    }
}