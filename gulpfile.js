/*!
 * gulp
 * $ sudo npm install del gulp gulp-concat gulp-sourcemaps gulp-sass gulp-minify-css gulp-autoprefixer browser-sync gulp-uglify gulp-imagemin run-sequence --save
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
    - eg. fonts, npm componentss etc
    ************************* */
    gulp.task('copy', function() {
      // Fonts
      gulp.src([
          'node_modules/bootstrap-sass/assets/fonts/bootstrap/*'
        ]).pipe(gulp.dest(themeDir + 'dist/fonts'));
    });

/*  Optimize Images (gulp images)
    - Optimizes images and outputs to dist directory
    ************************* */
    gulp.task('images', function() {
      return gulp.src(themeDir + 'assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(themeDir + 'dist/img'));
    });

/*  Styles (gulp styles)
    - Pre-Processes specific scss files into CSS
    - Minifies the CSS
    - Auto prefixes for vendor specificity
    - Generates source maps too
    ************************* */
    gulp.task('styles', function() {
      return gulp.src([themeDir + 'assets/scss/theme.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 5 versions'] }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(themeDir + 'dist/'))
        .pipe(reload({ stream: true }));
    });

/*  Concat and Minify JS (gulp js)
    - Looks for all npm components + assets/assets/js files
    ************************* */
    gulp.task('js', function() {
      // Add/Remove any files you'd like to minify/concatinate to this array
      var files = [
        // 'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap-sass/assets/javascripts/affix.js',
        'node_modules/bootstrap-sass/assets/javascripts/alert.js',
        'node_modules/bootstrap-sass/assets/javascripts/button.js',
        'node_modules/bootstrap-sass/assets/javascripts/dropdown.js',
        'node_modules/bootstrap-sass/assets/javascripts/collapse.js',
        'node_modules/bootstrap-sass/assets/javascripts/popover.js',
        'node_modules/bootstrap-sass/assets/javascripts/tab.js',
        'node_modules/bootstrap-sass/assets/javascripts/transition.js',
        'node_modules/jquery-colorbox/jquery.colorbox-min.js',
        'node_modules/superfish/dist/js/superfish.min.js',
        'node_modules/jquery-hoverintent/jquery.hoverintent.js',
        'node_modules/slick-carousel/slick/slick.min.js',
      ];

      // All assets/assets/js files
      files.push(themeDir + 'assets/js/**/*.js');

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
      gulp.watch(themeDir + 'assets/scss/**/*.scss', ['styles']);
      gulp.watch(themeDir + 'assets/js/**/*.js', ['js']);
      gulp.watch(themeDir + 'assets/img/**/*', ['images']);
    });
