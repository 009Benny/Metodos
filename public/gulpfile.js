'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");
var csso = require('gulp-csso');
var webpack = require("webpack-stream");

var pathsJS = [
  'js/main.js',
  'js/Classes/*.js',
]

var paths = [
  'scss/main/main.scss',
  'scss/Modules/global.scss',
  'scss/Modules/main-colors.scss',
  'scss/Modules/media-queries.scss',
  'scss/Modules/**/*.scss',
];

var all = [
  'scss/main/main.scss',
  'scss/Modules/global.scss',
  'scss/Modules/main-colors.scss',
  'scss/Modules/media-queries.scss',
  'scss/Modules/**/*.scss',
  'js/main.js',
  'js/Classes/*.js',
]

gulp.task('sass',function(){
  return gulp.src('./scss/main/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on("error",sass.logError))
    .pipe(gulp.dest('./scss/main/'))
});

gulp.task('sass-production',function(){
  return gulp.src('./scss/main/main.scss')
    // .pipe(sass({ outputStyle: 'compressed' }).on("error",sass.logError))
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(csso())
    .pipe(gulp.dest('./scss/main/'))
});

gulp.task("webpack",function(){
  return gulp.src('js/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('js/bundle/'));
});

gulp.task("webpackprod",function(){
  return gulp.src('js/main.js')
    .pipe(webpack( require('./webpack.prod.js') ))
    .pipe(gulp.dest('js/bundle/'));
});


gulp.task('watch', function(){
  // gulp.watch(paths, ['webpack', 'sass']);
  gulp.watch(paths, gulp.series('sass'));
});

gulp.task('watch-webpack', function(){
  // gulp.watch(paths, ['webpack', 'sass']);
  gulp.watch(pathsJS, gulp.series('webpack'));
});

gulp.task('watch-webpack', function(){
  // gulp.watch(paths, ['webpack', 'sass']);
  gulp.watch(all, gulp.series('webpack','sass'));
});

// gulp.task('default',["sass","webpack"]);
// gulp.task('deploy',["sass","webpackprod"]);
gulp.task('default', gulp.series('sass', 'webpack'));
gulp.task('production', gulp.series('sass-production', 'webpackprod'));
