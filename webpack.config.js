const path = require('path');

module.exports = {
    // Entry point of the application
    entry: './src/index.js',
    output: {
        // Output directory and filename for the bundled code
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // Rule to process JavaScript files
            test: /\.js$/, // for JavaScript files
            exclude: /node_modules/, 
            use: {
                loader: 'babel-loader',
                options: {
                    // Babel presets for modern JavaScript and React
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    },
    devServer: {
        // Serve static files from the dist directory
        static: path.join(__dirname, 'dist'),
        // Enable compression for files served
        compress: true,
        // Port number for the development server
        port: 3000
    }
};