const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// Node source
gulp.task('default', (ch) => {
  gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
  ch();
});

// Browser source
gulp.task('browser', (ch) => {
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));
  ch();
});


// Run ESLint
gulp.task('es6', (ch) => {
  gulp.src(['es6/**/*.js", "public/es6/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
  ch();
});

gulp.task('default', gulp.series('browser', 'es6'));
