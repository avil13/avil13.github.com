// "use strict";

var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var importCss = require('gulp-import-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// работа с css
gulp.task('css', function() {
    gulp.src(['css/normalize.css', 'css/main.css', 'css/monokai_sublime.css', 'css/google-font.css'])
        .pipe(sourcemaps.init())
        .pipe(importCss())
        .pipe(autoprefixer({
            browsers: ['last 15 versions', '> 1%', 'ie 9'],
            cascade: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css/'));
});


// задача по работе с js
gulp.task('js', function() {
    gulp.src(['js/plugins.js', 'js/main.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('js/'));
});


// Задача на отслеживание изменений
gulp.task('watch', function() {
    gulp.watch('css/*.css', ['css']);
    gulp.watch('js/*.js', ['js']);
});

// Запуск задач
gulp.task('default', ['css', 'js']);
