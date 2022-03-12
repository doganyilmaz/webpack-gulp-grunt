const path = require('path');

module.exports = [{
        mode: 'production',
        entry: ['./src/js/index.js'],
        output: {
            path: path.resolve(__dirname, 'wwwroot/assets/js'),
            filename: 'main.js'
        },
        watch: true
    },

    //TYPESCRIPT
    {
        mode: 'production',
        entry: './src/ts/test-ts.ts',
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            library: 'app',
            filename: 'test-ts.js',
            path: path.resolve(__dirname, './wwwroot/assets/js'),
        },
        watch: true
    },

    //SASS

    {
        mode: 'production',
        entry: './src/sass/sass.scss',
        module: {
            rules: [{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            publicPath: 'wwwroot/assets/css',
                            name: '[name].min.css'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed"
                            }
                        }
                    }
                ]
            }]
        },
        resolve: {
            extensions: ['.scss'],
        },
        output: {
            filename: './../../../dist/sass-map.css',
            path: path.resolve(__dirname, 'wwwroot/assets/css'),
        },
        watch: true
    },

    // LESS
    {
        mode: 'production',
        entry: './src/less/less.less',
        module: {
            rules: [{

                test: /\.less$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            publicPath: 'wwwroot/assets/css',
                            name: '[name].min.css'
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true,
                            lessOptions: {
                                strictMath: true
                            },
                        },
                    },
                ]
            }]
        },
        resolve: {
            extensions: ['.less'],
        },
        output: {
            filename: './../../../dist/less-map.css',
            path: path.resolve(__dirname, 'wwwroot/assets/css'),
        },
        watch: true
    },


]