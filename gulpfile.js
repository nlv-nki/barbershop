var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var server = require("browser-sync").create();
var autoprefixer = require('autoprefixer');


gulp.task('hello', function() {
  console.log('Hello Zell');
});


gulp.task('style', function(){
   gulp.src('sourse/scss/styles.scss')
    .pipe(plumber())
    .pipe(sass()) // Using gulp-sass
    .pipe(postcss( [ autoprefixer() ] ))
    .pipe(gulp.dest('sourse/css/'))
    .pipe(server.stream());

});


gulp.task('serve', ['style'], function() {

server.init({
server: "sourse/",
notify: false,
    open: true,
    cors: true,
    ui: false
});

gulp.watch("sourse/scss/**/*.scss", ['style'] );
gulp.watch("sourse/*.html").on('change', server.reload);

});
