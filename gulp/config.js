var dest = "./static";
var src = "./static-src";

module.exports = {
    sass: {
        src: src + "/scss/main.scss",
        dest: dest + "/css/",
        settings: {
            includePaths: [
                "./node_modules/modularized-normalize-scss/",
                "./node_modules/susy/sass"
            ]
        },
        watch: [
            src + "/scss/**/*.scss"
        ]
    },
    images: {
        src: src + "/images/**/*",
        dest: dest + "/images/",
        watch: [
            src + "/images/**/*"
        ]
    }
};
