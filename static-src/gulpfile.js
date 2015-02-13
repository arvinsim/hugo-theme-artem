var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

gulp.task('sass', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(sass({
            paths: [ path.join(__dirname, 'sass', 'includes') ]
        }))
        .pipe(gulp.dest('../static/css'))
});

gulp.task('default', function() {
    var watcher = gulp.watch('./scss/**/*.scss', ['sass']);
    watcher.on('change', function() {
        console.log('sass files has changed. Compiling...');
    });
});
