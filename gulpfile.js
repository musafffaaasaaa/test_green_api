const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const copy = require('gulp-copy');

gulp.task('scripts', function () {
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('styles', function () {
    return gulp.src('./public/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-html', function () {
    return gulp.src('./src/views/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-assets', function () {
    return gulp.src(['./public/*.html', './public/*.js', './public/*.css'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.parallel('scripts', 'styles', 'copy-html', 'copy-assets'));

gulp.task('default', gulp.series('build'));
