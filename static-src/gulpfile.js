var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [
                __dirname,
                'sass',
                'node_modules/susy/sass'
            ]
        }))
        .pipe(sourcemaps.write('../static/css'))
        .pipe(gulp.dest('../static/css'))
});

gulp.task('default', ['sass'], function() {
    var watcher = gulp.watch('./scss/**/*.scss', ['sass']);
    watcher.on('change', function() {
        console.log('SASS files has changed. Compiling...');
    });
});
