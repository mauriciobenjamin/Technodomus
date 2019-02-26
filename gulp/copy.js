'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = _path2.default.join(taskTarget);

  // Copy
  gulp.task('copy', function () {
    return gulp.src([_path2.default.join(dirs.source, '**/*'), '!' + _path2.default.join(dirs.source, '{**/\_*,**/\_*/**}'), '!' + _path2.default.join(dirs.source, '**/*.jade')]).pipe(plugins.changed(dest)).pipe(gulp.dest(dest));
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];