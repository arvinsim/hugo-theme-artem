var dest = './static';
var src = './static-src';

module.exports = {
    sass: {
        src: src + '/scss/main.scss',
        dest: dest + '/css/',
        settings: {
            includePaths: [
                './node_modules/modularized-normalize-scss/',
                './node_modules/susy/sass'
            ]
        },
        watchlist: [
            src + '/scss/**/*.scss'
        ]
    }
};
