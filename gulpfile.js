const gulp = require('gulp');
const less = require('gulp-less');
const sourceMaps = require('gulp-sourcemaps');
// const ts = require('gulp-typescript');
const autoPrefixer = require('gulp-autoprefixer');
///////////////////////////////////////////////////
var lessDir = 'public/assets/source/less/';
var cssDir = 'public/assets/source/styles/';
var tsOut = 'public/assets/source/scripts/';


//////////////////////////////////////////////////
var tsDir = 'public/assets/source/typescript/*.ts';

/////////////////////////////////////////////////////////

gulp.task('less', () => {
    return gulp.src(`${lessDir}main.less`)
        .pipe(sourceMaps.init('./'))
        .pipe(less())
        .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourceMaps.write('/'))
        .pipe(gulp.dest(cssDir));
});

// gulp.task('typescript', function () {
//     return gulp.src(tsDir)
//         .pipe(ts({
//             noImplicitAny: true
//         }))
//         .pipe(sourceMaps.init())
//         .pipe(sourceMaps.write('/'))
//         .pipe(gulp.dest(tsOut));
// });

gulp.task('watch', () => {
    gulp.watch([`${lessDir}**/*.less`, tsDir], ['less']);
});




gulp.task('default', ['less', 'watch']);