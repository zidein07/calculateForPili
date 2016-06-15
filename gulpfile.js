var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');


gulp.task('connect', function () {
    browserSync.init({
        server: 'app/'
    });
    gulp.watch([
        'app/stylesheet/**/*.less',
        'app/views/*.html',
        'app/scripts/*.js'
    ], ['build']);
});


gulp.task('build', function () {
    gulp.src('app/stylesheet/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('app/stylesheet/css/'));
    browserSync.reload();
});


gulp.task('default', ['connect', 'build']);
