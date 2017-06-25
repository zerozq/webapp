var gulp = require('gulp');
var $ = require('gulp-load-plugins');
var open = require('open');

var app = {
    srcPath: 'app/src/',
    devPath: 'app/build/', //开发环境
    prdPath: 'app/dist/'   //生产环境
};

/*任务-copy*/
gulp.task('lib', function(){
    gulp.src('bower_components/**/*.js')
    .pipe(gulp.dest(app.devPath + 'vendor'))
    .pipe(gulp.dest(app.prdPath + 'vendor'));

});