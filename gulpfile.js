let gulp = require('gulp')
let concat = require('gulp-concat');
let fs = require('fs')
let csso = require('gulp-csso');
let htmlmin = require('gulp-htmlmin');
var runSeq = require('run-sequence');

gulp.task('minify-html', async function(done) {
    gulp.src(['./src/index.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./docs'))
        done();
})

gulp.task('create404', async function(done) {
    fs.createReadStream('./docs/index.html').pipe(fs.createWriteStream('./docs/404.html'))
    done();
})


gulp.task('pack-css', async function (done) {
    gulp.src(['./src/css/*.css'])

        .pipe(csso())
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('./docs/dist/build/css'))
    done();
});

gulp.task('pack-js', async function (done) {
    gulp.src(['./src/js/*.js'])
       .pipe(concat('index.js'))
        .pipe(gulp.dest('./docs/dist/build/js'))
        done();

});




gulp.task('default', gulp.series('pack-css', 'pack-js', 'create404'));