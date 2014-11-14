var gulp = require('gulp');
var tsc = require('gulp-typescript-compiler');
var uglify = require('gulp-uglify');

gulp.task('tsc', function () {
    return gulp.src('../src/*.ts')
        .pipe(tsc({
            module: '',
            sourcemap: false,
            logErrors: true
        }))
        .pipe(gulp.dest('../js/')
    );
});

gulp.task('compile-extension',['tsc'], function () {
    gulp.src('../js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../js/')
    );
});

gulp.task('default',['tsc']);