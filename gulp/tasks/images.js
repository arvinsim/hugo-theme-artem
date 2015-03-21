var config = require("../config").images;

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var image = require("gulp-image");

gulp.task("images", function taskSass() {
    gulp.src(config.src)
        .pipe(plumber())
        .pipe(image())
        .pipe(gulp.dest(config.dest));
});

var imagewatcher = gulp.watch(config.watch, ["images"]);
imagewatcher.on("change", function sassWatcher() {
    console.log("Images has changed. Compiling...");
});
