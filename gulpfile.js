const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>

  //node sourc
	gulp.src('es6/**/*.js')
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
    .pipe(gulp.dest('dist'))
    

);