var gulp        = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var path = {
  src  : "./src/",
  dist : "./dist/"
}

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: path.dist
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('jade', function() {
  gulp.src(path.src + '*.jade')
    .pipe($.plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe($.jade())
    .pipe(gulp.dest(path.dist))
    .pipe(browserSync.reload({stream:true}))
});


gulp.task('styles', function(){
  gulp.src([path.src + 'sass/**/*.sass'])
    .pipe($.plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe($.sass({
      indentedSyntax: true,
      outputStyle: 'compressed'
    }))
    .pipe($.autoprefixer('last 2 versions'))
    .pipe(gulp.dest(path.dist + 'css/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
  return gulp.src(path.src + 'js/**/*.js')
    .pipe($.plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
    .pipe($.concat('main.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(path.dist + 'js/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('build', ['styles', 'scripts', 'jade']);

gulp.task('default', ['browser-sync'], function(){
  gulp.watch(path.src + "sass/**/*.sass", ['styles']);
  gulp.watch(path.src + "js/**/*.js", ['scripts']);
  gulp.watch(path.src + "**/*.jade", ['jade']);
});
