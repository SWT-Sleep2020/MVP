'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var ejs = require("gulp-ejs");
//var babel = require('gulp-babel');
//var fs = require( 'fs' );// fs == File System
var rename = require("gulp-rename");

/**
* sass
*/
sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

/**
* ejs
*/
gulp.task('ejs', function() {
	//return gulp.src('./src/*.ejs', '!./src/html/**/_*.ejs', '!./src/_archive/**/_*.ejs')
	return gulp.src('./src/*.html', '!./src/html/**/_*.ejs', '!./src/_archive/**/_*.ejs')
    .pipe(ejs( { msg: 'Hello Gulp!'}, {}, { ext: '.html' }))
    .pipe(gulp.dest('./public/'))
});

/**
* js
*/
gulp.task('js', function() {
	return gulp.src('./src/js/**/*.js')
		.pipe(gulp.dest('./public/js/'));
});

/**
* default
*/

// gulp.task('build', [‘sass’, ‘ejs’, ‘js’]);

// gulp.task('default', ['build']);