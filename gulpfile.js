'use strict';

// modules
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
// var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var webpack = require('webpack');


// webpack
var webpackConfig = require('./webpack.config');
var webpackCompiler = webpack(webpackConfig);

var config = {
  dev: true,
  paths: {
    src: {
      scripts: 'app/frontend/javascripts',
      styles: 'app/frontend/styles',
      images: 'app/frontend/images',
      fonts: 'app/frontend/fonts',
    },
    dest: {
      scripts: 'app/assets/javascripts',
      styles: 'app/assets/stylesheets',
      images: 'app/assets/images',
      fonts: 'app/assets/fonts',
    }

  },
};

// clean
gulp.task('clean', function (cb) {
  del(Object.keys(config.paths.dest).map(function(key) {
    return config.paths.dest[key] + '/**/*';
  }), cb);
});

// scripts
gulp.task('scripts', function (done) {
  webpackCompiler.run(function (error, result) {
    if (error) {
      gutil.log(gutil.colors.red(error));
    }
    result = result.toJson();
    if (result.errors.length) {
      result.errors.forEach(function (error) {
        gutil.log(gutil.colors.red(error));
      });
    }
    done();
  });
});

// Styles
gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles + '/**/*.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(prefix('last 1 version'))
    .pipe(gulpif(!config.dev, csso()))
    .pipe(gulp.dest(config.paths.dest.styles))
})

// images
gulp.task('images', function () {
  return gulp.src(config.paths.src.images + '/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(config.paths.dest.images));
});

// fonts
gulp.task('fonts', function () {
  return gulp.src(config.paths.src.fonts + '/**/*')
    .pipe(gulp.dest(config.paths.dest.fonts));
});

gulp.task('watch', function() {
  /**
   * Because webpackCompiler.watch() isn't being used
   * manually remove the changed file path from the cache
   */
  function webpackCache(e) {
    var keys = Object.keys(webpackConfig.cache);
    var key, matchedKey;
    for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
      key = keys[keyIndex];
      if (key.indexOf(e.path) !== -1) {
        matchedKey = key;
        break;
      }
    }
    if (matchedKey) {
      delete webpackConfig.cache[matchedKey];
    }
  }

  gulp.task('scripts:watch', ['scripts'])
  gulp.watch(config.paths.src.scripts+ '/**/*', ['scripts:watch'])//.on('change', webpackCache);

  gulp.task('styles:watch', ['styles'])
  gulp.watch(config.paths.src.styles+ '/**/*.scss', ['styles:watch'])

  gulp.task('images:watch', ['images'])
  gulp.watch(config.paths.src.images+ '/**/*', ['images:watch'])

  gulp.task('fonts:watch', ['fonts'])
  gulp.watch(config.paths.src.fonts+ '/**/*', ['fonts:watch'])
});

// default build task
gulp.task('build', ['clean'], function () {

  // define build tasks
  var tasks = [
    'styles',
    'scripts',
    'images',
    'fonts',
  ];

  // run build
  runSequence(tasks);
});

gulp.task('default', ['build', 'watch'])
