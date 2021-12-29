const path = require('path');
var glob = require('glob');

module.exports = [{
        mode: 'production',
        entry: { 'DebyaNFT': glob.sync('./ts/**/*.ts*') },
        module: {
            rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader'
                }]
            }]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            library: 'DebyaNFT',
            filename: 'DebyaNFT.js',
            path: path.resolve(__dirname, 'wwwroot/js'),
        }
    },
    {
        mode: 'production',
        entry: './wwwroot/scss/Debya.scss',
        module: {
            rules: [{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'file-loader',
                        options: {
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
            library: 'DebyaNFT',
            filename: 'Debya.css',
            path: path.resolve(__dirname, 'wwwroot/css'),
        }
    },
    {
        mode: 'none',
        entry: {
            //"Debya.min": glob.sync('./wwwroot/js/**/*.js*') ,
            "Debya.min": ['./wwwroot/js/Debya.js', './wwwroot/js/Deneme.js']
                // mixins: './path/to/mixins.js',
                // vendors: ['./path/to/vendor.js', './path/to/vendor2.js']
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "script-loader"
                }
            }, ]
        },
        resolve: {
            extensions: ['.js'],
        },
        output: {
            // library: 'DebyaNFT',
            //filename: 'Debya.css',
            path: path.resolve(__dirname, 'wwwroot/js'),
        }
    }


]

//https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-build-a-webpack-app-with-vanilla-js-or-react-72ca2cc7e14