var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config').sass
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config.settings))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
});

var watcher = gulp.watch(config.watchlist, ['sass']);
watcher.on('change', function() {
    console.log('SASS files has changed. Compiling...');
});
