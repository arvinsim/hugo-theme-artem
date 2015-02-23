var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config').sass
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src(config.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass(config.settings))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest))
});

var watcher = gulp.watch(config.watchlist, ['sass']);
watcher.on('change', function() {
    console.log('SASS files has changed. Compiling...');
});
