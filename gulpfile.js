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
var fileinclude = require('gulp-file-include');

// Compile SCSS
gulp.task('css:compile', function () {
  return gulp.src('./src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function () {
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

// JS
gulp.task('js', function () {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/tether/dist/js/tether.min.js',
    './node_modules/tether-drop/dist/js/drop.min.js',
    './node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './src/site.js',
    './src/search.js',
  ])
    //.pipe(uglify())
    .pipe(concat('site.min.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

// HTML
gulp.task('fileinclude', function () {
  gulp.src([
    './src/html/*.html'
  ])
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});

// Default task
gulp.task('default', ['dev']);

// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

// Dev task
gulp.task('dev', ['css', 'js', 'fileinclude', 'browserSync'], function () {
  gulp.watch('./src/**/*.scss', ['css']);
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/html/**/*.html', ['fileinclude']);
  gulp.watch('./dist/**/*.html', browserSync.reload);
});