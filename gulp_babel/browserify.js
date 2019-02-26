'use strict';

const path = require('path');
const glob = require('glob');
const browserify = require('browserify');
const watchify = require('watchify');
const envify = require('envify');
const babelify = require('babelify');
const _ = require('lodash');
const vsource = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulpif = require('gulp-if');

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let entries = config.entries;

  let browserifyTask = (files) => {
    return files.map((entry) => {
      let dest = path.resolve(taskTarget);

      // Options
      let customOpts = {
        entries: [entry],
        debug: true,
        transform: [
          babelify, // Enable ES6 features
          envify // Sets NODE_ENV for better optimization of npm packages
        ]
      };

      let bundler = browserify(customOpts);

      if (!args.production) {
        // Setup Watchify for faster builds
        let opts = _.assign({}, watchify.args, customOpts);
        bundler = watchify(browserify(opts));
      }

      let rebundle = function() {
        let startTime = new Date().getTime();
        bundler.bundle()
          .on('error', function(err) {
            plugins.util.log(
              plugins.util.colors.red('Browserify compile error:'),
              '\n',
              err.stack,
              '\n'
            );
            this.emit('end');
          })
          .on('error', plugins.notify.onError(config.defaultNotification))
          .pipe(vsource(entry))
          .pipe(buffer())
          .pipe(plugins.sourcemaps.init({loadMaps: true}))
            .pipe(gulpif(args.production, plugins.uglify()))
            .on('error', plugins.notify.onError(config.defaultNotification))
          .pipe(plugins.rename(function(filepath) {
            // Remove 'source' directory as well as prefixed folder underscores
            // Ex: 'src/_scripts' --> '/scripts'
            filepath.dirname = filepath.dirname.replace(dirs.source, '').replace('_', '');
          }))
          .pipe(plugins.sourcemaps.write('./'))
          .pipe(gulp.dest(dest))
          // Show which file was bundled and how long it took
          .on('end', function() {
            let time = (new Date().getTime() - startTime) / 1000;
            console.log(
              plugins.util.colors.cyan(entry)
              + ' was browserified: '
              + plugins.util.colors.magenta(time + 's'));
            return browserSync.reload('*.js');
          });
      };

      if (!args.production) {
        bundler.on('update', rebundle); // on any dep update, runs the bundler
        bundler.on('log', plugins.util.log); // output build logs to terminal
      }
      return rebundle();
    });
  };

  // Browserify Task
  gulp.task('browserify', (done) => {
    return glob('./' + path.join(dirs.source, dirs.scripts, entries.js), function(err, files) {
      if (err) {
        done(err);
      }

      return browserifyTask(files);
    });
  });
}
