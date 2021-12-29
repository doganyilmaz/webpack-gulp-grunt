const path = require('path');
module.exports = {
    mode: 'production',
    entry: [
        './src/js/index.js',
        './src/sass/index.scss',
        './src/less/test-less.less'
    ],
    output: {
        path: path.resolve(__dirname, './dist/assets/js'),
        filename: 'app.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "script-loader",
                    options: {
                        outputPath: './assets/js',
                    }
                }

            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: './../css',
                            name: 'index.min.css',
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        }
                    }
                ]
            },

            {
                test: /\.less$/,
                use: [

                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './../css',
                            name: '[name].min.css',
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true
                            },
                        },
                    },
                ],
            }
        ]
    },
};