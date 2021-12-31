const path = require('path');

module.exports = [{
        mode: 'production',
        entry: ['./src/js/index.js'],
        output: {
            path: path.resolve(__dirname, 'wwwroot/assets/js'),
            filename: 'main.js'
        },

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
            filename: 'test-ts.js',
            path: path.resolve(__dirname, './wwwroot/assets/js'),
        },
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
            filename: 'sass.css',
            path: path.resolve(__dirname, 'wwwroot/assets/css'),
        }
    },


]