const path = require('path');
module.exports = {
    mode: 'production',
    entry: [
        //TYPESCRIPT
        './src/ts/test.tsx',

        // JAVASCRIPT
        './src/js/index.js',

        //SASS
        './src/sass/index.scss',

        //LESS
        './src/less/test-less.less'
    ],
    output: {
        path: path.resolve(__dirname, './dist/assets/js'),
        filename: 'app.js'
    },
    module: {
        rules: [
            //TYPESCRIPT
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: './../ts',
                            name: 'test.min.js',
                        }
                    },
                    { loader: 'ts-loader' }
                ]
            },

            // JAVASCRIPT
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "script-loader",
                    options: {
                        outputPath: './assets/js',
                    }
                }

            },

            //SASS
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

            //LESS
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
    watch: true
};