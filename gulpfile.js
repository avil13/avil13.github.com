"use strict";

var gulp = require('gulp'),
   rename = require('gulp-rename'),
   concatCSS = require('gulp-concat-css'),
   minifyCSS = require('gulp-minify-css'),
   autoprefixer = require('gulp-autoprefixer'),
   uncss = require('gulp-uncss');

// работа с css
gulp.task('css', function() {
   gulp.src(['css/normalize.css', 'css/main.css', 'css/monokai_sublime.css', 'css/google-font.css', 'css/font-awesome.css'])
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

// Задача на отслеживание изменений
gulp.task('watch', function() {
   gulp.watch('src/css/*.css', ['css']);
});

// Запуск задач
gulp.task('default', ['css', 'watch']);