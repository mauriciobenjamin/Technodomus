/*eslint no-process-exit:0 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // ESLint
  gulp.task('eslint', function () {
    gulp.src([_path2.default.join('gulpfile.js'), _path2.default.join(dirs.source, '**/*.js'),
    // Ignore all vendor folder files
    '!' + _path2.default.join('**/vendor/**', '*')]).pipe(browserSync.reload({ stream: true, once: true })).pipe(plugins.eslint({
      useEslintrc: true
    })).pipe(plugins.eslint.format()).pipe((0, _gulpIf2.default)(!browserSync.active, plugins.eslint.failAfterError())).on('error', function () {
      if (!browserSync.active) {
        process.exit(1);
      }
    });
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];