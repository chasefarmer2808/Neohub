const { src, dest, parallel } = require('gulp');
const replace = require('gulp-replace');

function copyBuildJS() {
    return src('dist/neohub/*.js')
        .pipe(dest('server/static'));
}

function copyBuildHTML() {
    return src('dist/neohub/index.html')
        .pipe(replace('favicon.ico', 'static/favicon.ico'))
        .pipe(replace('runtime.js', 'static/runtime.js'))
        .pipe(replace('polyfills.js', 'static/polyfills.js'))
        .pipe(replace('styles.js', 'static/styles.js'))
        .pipe(replace('vendor.js', 'static/vendor.js'))
        .pipe(replace('main.js', 'static/main.js'))
        .pipe(dest('server/templates'));
}

function copyFavicon() {
    return src('dist/neohub/favicon.ico')
        .pipe(dest('server/static'));
}

exports.copyBuild = parallel(copyBuildJS, copyBuildHTML, copyFavicon);