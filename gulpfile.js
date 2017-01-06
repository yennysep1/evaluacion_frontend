var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');



gulp.task('script', function(cb){
		gulp.src('src/js/*.js')
		// verificar errores de JS
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		// unir todos los archivos
		.pipe(concat('script.min.js'))
		// enfearlo (minimizarlo)
		.pipe(uglify())
		// dejarlo en carpeta dist/js
		.pipe(gulp.dest('dist/js'));
});

gulp.task('style', function() {
		gulp.src('src/sass/main.scss')
		// transformar los sass
		.pipe(sass().on('error', sass.logError))
		// minimizarlo
		.pipe(minifyCSS())
		// dejarlo en archivo de destino
		.pipe(concat('style.min.css'))
		// dejarlo en carpeta dist/css
		.pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('img', function() {
		gulp.src('src/img/*')
        //.pipe(imagemin()) //esta dando problemas
        .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function(){
	gulp.src('src/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});




gulp.task('default', ['img', 'style', 'script','fonts','sass:watch']);