// "use strict";

var gulp = require('gulp');
var rename = require('gulp-rename');
var concatCSS = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var importCss = require('gulp-import-css');

var concat = require('gulp-concat');
var jsmin = require('gulp-jsmin');
var js1k = require("gulp-js1k");

// работа с css
gulp.task('css', function() {
    gulp.src(['css/normalize.css', 'css/main.css', 'css/monokai_sublime.css', 'css/google-font.css'])
        .pipe(importCss())
        .pipe(autoprefixer({
            browsers: ['last 15 versions', '> 1%', 'ie 9'],
            cascade: false
        }))
        .pipe(concatCSS('style.css'))

    // .pipe(uncss({
    //    html: ['index.html', 'demo/form_data/index.html', 'demo/numeric_format/index.html', 'demo/inverImgText/index.html', 'demo/anchorSpy/index.html']
    // }))

    .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('css/'));
});


// задача по работе с js
gulp.task('js', function() {
    gulp.src(['js/plugins.js', 'js/main.js'])
        .pipe(concat('all.js'))
        .pipe(jsmin())
        .pipe(js1k())
        // .pipe(rename({
        //     suffix: '.min'
        // }))


    .pipe(gulp.dest('js/'));
});


// Задача на отслеживание изменений
gulp.task('watch', function() {
    gulp.watch('css/*.css', ['css']);
    gulp.watch('js/*.js', ['js']);
});

// Запуск задач
gulp.task('default', ['css', 'js']);