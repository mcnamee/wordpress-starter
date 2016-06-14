/*!
 * gulp
 * $ sudo npm install del gulp bower-files gulp-concat gulp-sourcemaps gulp-sass gulp-minify-css gulp-autoprefixer browser-sync gulp-uglify gulp-imagemin run-sequence --save
 */

var themeDir = 'wp-content/themes/starter/';

/*  Load plugins
    ************************* */
    var del = require('del'),
        gulp = require('gulp'),
        sourcemaps = require('gulp-sourcemaps'),
        sass = require('gulp-sass'),
        minifycss = require('gulp-clean-css'),
        autoprefixer = require('gulp-autoprefixer'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify'),
        bowerLib = require('bower-files')(),
        imagemin = require('gulp-imagemin'),
        runSequence = require('run-sequence'),
        browserSync = require('browser-sync'),
        reload = browserSync.reload;

/*  Clean the /dist directory (gulp clean)
    ************************* */
    gulp.task('clean', function() {
      return del([themeDir + 'dist']);
    });

/*  Copy specific files to dist (gulp copy)
    - eg. fonts, bower comps etc
    ************************* */
    gulp.task('copy', function() {
      // Fonts
      gulp.src([
          'bower_components/bootstrap-sass/assets/fonts/bootstrap/*'
        ]).pipe(gulp.dest(themeDir + 'dist/fonts'));
    });

/*  Optimize Images (gulp images)
    - Optimizes images and outputs to dist directory
    ************************* */
    gulp.task('images', function() {
      return gulp.src(themeDir + 'src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(themeDir + 'dist/img'))
    });

/*  Styles (gulp styles)
    - Pre-Processes specific scss files into CSS
    - Minifies the CSS
    - Auto prefixes for vendor specificity
    - Generates source maps too
    ************************* */
    gulp.task('styles', function() {
      return gulp.src([themeDir + 'src/scss/theme.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 5 versions'] }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(themeDir + 'dist/'))
        .pipe(reload({ stream: true }));
    });

/*  Concat and Minify JS (gulp js)
    - Looks for all bower components + src/assets/js files
    ************************* */
    gulp.task('js', function () {
      // All Bower main JS files
      var files = bowerLib.ext('js').files;

      // All src/assets/js files
      files.push(themeDir + 'src/js/**/*.js');

      return gulp.src(files)
        .pipe(concat('theme.js'))
        .pipe(uglify())
        .pipe(gulp.dest(themeDir + 'dist/'));
    });

/*  Initial Build (gulp initialBuild)
    - Runs the tasks in a specific order
    ************************* */
    gulp.task('initialBuild', function(callback) {
      runSequence('clean', 'copy',
                  ['images', 'styles', 'js'],
                  callback);
    });

/*  Default task (gulp)
    - Calls initialBuild task then:
    - Starts BrowserSync
    - Watches for any scss updates, and compiles the css
    ************************* */
    gulp.task('default', ['initialBuild'], function() {
      /* Start BrowserSync */
      var files = [
        'wp-content/**/*',
      ];

      browserSync.init(files, {
        proxy: 'localhost',
        port: 8080,
        open: true,
        notify: false
      });

      /* Run task on updates */
      gulp.watch(themeDir + 'src/scss/**/*.scss', ['styles']);
      gulp.watch(themeDir + 'src/js/**/*.js', ['js']);
      gulp.watch(themeDir + 'src/img/**/*', ['images']);
    });
