const { src, dest, watch, parallel } = require('gulp');

var sass = require('gulp-sass')(require('sass'));

var uglify = require('gulp-uglify');

var less = require('gulp-less');

var concat = require('gulp-concat');

const cleanCSS = require('gulp-clean-css');



function sass_scss() {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(concat('all.css'))
        .pipe(dest('./css'));

}

function uglify_js() {
    return src('lib/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('./dist'));

}

function less_less() {
    return src('less/**/*.less')
        .pipe(less())
        .pipe(dest('./css'));

}

function clean_CSS() {
    return src('css/**/*.css')
        .pipe(cleanCSS())
        .pipe(dest('./css'));

}


watch('less/*.less', less_less);
watch('sass/*.scss', sass_scss);
watch('lib/*.js', uglify_js);

exports.clean_CSS = clean_CSS;
exports.less_less = less_less;
exports.uglify_js = uglify_js;
exports.sass_scss = sass_scss;
exports.default = parallel(sass_scss, uglify_js, less_less, clean_CSS);