var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var pkg = require('./package.json');
var browserSync = require('browser-sync').create();

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Font Awesome
  gulp.src([
      './node_modules/font-awesome/**/*',
      '!./node_modules/font-awesome/{less,less/*}',
      '!./node_modules/font-awesome/{scss,scss/*}',
      '!./node_modules/font-awesome/.*',
      '!./node_modules/font-awesome/*.{txt,json,md}'
    ])
    .pipe(gulp.dest('./vendor/font-awesome'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'))

});

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./src/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
      './dist/main.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Minify JavaScript
gulp.task('js:minify', function() {
  return gulp.src([
      './src/*.js',
      '!./src/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

//Concatenate all javascript together
gulp.task('js:concat', function() {
  return gulp.src([
      './vendor/jquery/jquery.min.js',
      './src/site.js',
    ])
    .pipe(uglify())
    .pipe(concat('site.min.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', ['js:concat'/*, 'js:concat'*/]);

// Default task
gulp.task('default', ['css', 'js', 'vendor']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

// Dev task
gulp.task('dev', ['css', 'js', 'browserSync'], function() {
  gulp.watch('./src/*.scss', ['css']);
  gulp.watch('./src/*.js', ['js']);
  gulp.watch('./dist/*.html', browserSync.reload);
});