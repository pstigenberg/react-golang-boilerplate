"use strict";

var gulp = require('gulp');
var lint = require('gulp-eslint');

var config = {
    paths: {
        js: './src/**/*.js'
    }
}

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.js, ['lint']);
});

gulp.task('default', ['lint', 'watch']);