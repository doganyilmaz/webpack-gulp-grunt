const { registerTask } = require("grunt");

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        uglify: {
            t1: {
                files: [{
                    src: ['assets/js/test1.js', 'assets/js/test2.js'],
                    dest: 'assets/js/min/test.min.js'

                }]
            },

            t2: {
                files: [{
                    src: 'assets/js/*.js',
                    dest: 'assets/js/min/test-all.min.js'

                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    src: 'assets/css/style.css',
                    dest: 'assets/css/min/style.min.css'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/min/style1.min.css': 'assets/sass/style.scss'
                }
            }
        },

        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    'assets/css/min/style2.min.css': 'assets/less/test-less.less'
                }
            }
        },


        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            target: {
                files: [{
                    src: 'index.html',
                    dest: 'build/index.html'
                }]
            }
        },

        watch: {
            files: ['assets/css/*.css', 'assets/js/*.js', '*.html', 'assets/sass/*.scss', 'assets/less/*.less'],
            tasks: ['uglify', 'cssmin', 'htmlmin', 'sass', 'less'],
            options: {
                livereload: true
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('Compress', 'uglify');
    grunt.registerTask('Compress1', 'uglify:t1');
    grunt.registerTask('Compress2', 'uglify:t2');



    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-contrib-less');



    grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'sass', 'less']);
};