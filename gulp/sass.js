'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;
  var dest = _path2.default.join(taskTarget, dirs.styles.replace(/^_/, ''));

  // Sass compilation
  gulp.task('sass', function () {
    gulp.src(_path2.default.join(dirs.source, dirs.styles, entries.css)).pipe(plugins.plumber()).pipe(plugins.sourcemaps.init()).pipe(plugins.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: [_path2.default.join(dirs.source, dirs.styles), _path2.default.join(dirs.source, dirs.modules)]
    })).on('error', function (err) {
      plugins.util.log(err);
    }).on('error', plugins.notify.onError(config.defaultNotification)).pipe(plugins.postcss([(0, _autoprefixer2.default)({ browsers: ['last 2 version', '> 5%', 'safari 5', 'ios 6', 'android 4'] })])).pipe(plugins.rename(function (path) {
      // Remove 'source' directory as well as prefixed folder underscores
      // Ex: 'src/_styles' --> '/styles'
      path.dirname = path.dirname.replace(dirs.source, '').replace('_', '');
    })).pipe((0, _gulpIf2.default)(args.production, plugins.cssnano({ rebase: false }))).pipe(plugins.sourcemaps.write('./')).pipe(gulp.dest(dest)).pipe(browserSync.stream({ match: '**/*.css' }));
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];