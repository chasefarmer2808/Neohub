const { src, dest, parallel } = require('gulp');
const replace = require('gulp-replace');

function copyBuildJS() {
    return src('dist/neohub/*.js')
        .pipe(dest('server/project/static'));
}

function copyBuildHTML() {
    return src('dist/neohub/index.html')
        .pipe(dest('server/project/templates'));
}

function copyFavicon() {
    return src('dist/neohub/favicon.ico')
        .pipe(dest('server/project/static'));
}

exports.copyBuild = parallel(copyBuildJS, copyBuildHTML, copyFavicon);