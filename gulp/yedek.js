const { src, dest, parallel } = require('gulp');

var sass = require('gulp-sass')(require('sass'));

var uglify = require('gulp-uglify');

var less = require('gulp-less');

function sass_scss() {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(dest('./css'));

}

function uglify_js() {
    return src('lib/**/*.js')
        .pipe(uglify())
        .pipe(dest('./dist'));

}

function less_less() {
    return src('less/**/*.less')
        .pipe(less({ outputStyle: "compressed" }))
        .pipe(dest('./css'));

}




exports.less_less = less_less;
exports.uglify_js = uglify_js;
exports.sass_scss = sass_scss;
exports.default = parallel(sass_scss, uglify_js, less_less);