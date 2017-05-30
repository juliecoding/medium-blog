var gulp = require('gulp'),
  babel = require('gulp-babel'),
  concat = require("gulp-concat"),
  annotate = require("gulp-ng-annotate"),
  sass = require("gulp-sass"),
  nodemon = require('gulp-nodemon');

var paths = {
  app_JS: ['public/app/**/*.js', 'public/views/**/*.js'],
  app_CSS: ['public/views/**/*.*css'],
  lib_JS: ['public/assets/libraries/**/*.js'],
  lib_CSS: ['public/assets/libraries/**/*.*css'],
  app_HTML: ['public/**/*.html'],
  images: ['public/assets/images/**/*.*'],
  server: 'server/index.js'
};

gulp.task('serve', function() {
  nodemon({
    'script': paths.server
  });
});

gulp.task('build-appCSS', function() {
  gulp.src(paths.app_CSS)
    .pipe(sass())
    .pipe(concat('app_styles.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-libCSS', function() {
  gulp.src(paths.lib_CSS)
    .pipe(sass())
    .pipe(concat('lib_styles.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-appJS', () => {
  gulp.src(paths.app_JS)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('app_bundle.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-libJS', () => {
  gulp.src(paths.lib_JS)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(concat('lib_bundle.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-html', function() {
  gulp.src(paths.app_HTML)
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-images', () => {
  gulp.src(paths.images)
    // .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/images'));
})

gulp.task('build', ['build-appCSS', 'build-libCSS', 'build-appJS', 'build-libJS', 'build-html', 'copy-images']);

gulp.task('watch', () => {
  gulp.watch(paths.app_CSS, ['build-appCSS']);
  gulp.watch(paths.lib_CSS, ['build-libCSS']);
  gulp.watch(paths.app_JS, ['build-appJS']);
  gulp.watch(paths.lib_JS, ['build-libJS']);
  gulp.watch(paths.app_HTML, ['build-html']);
  gulp.watch(paths.images, ['copy-images']);
});

gulp.task('default', ['build', 'watch', 'serve']); // add 'serve' to the array if you want gulp to run nodemon as well.