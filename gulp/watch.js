'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // Watch task
  gulp.task('watch', function () {
    if (!args.production) {
      // Styles
      gulp.watch([_path2.default.join(dirs.source, dirs.styles, '**/*.{scss,sass}'), _path2.default.join(dirs.source, dirs.modules, '**/*.{scss,sass}')], ['sass']);

      // Jade Templates
      gulp.watch([_path2.default.join(dirs.source, '**/*.jade'), _path2.default.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')], ['jade']);

      // Copy
      gulp.watch([_path2.default.join(dirs.source, '**/*'), '!' + _path2.default.join(dirs.source, '{**/\_*,**/\_*/**}'), '!' + _path2.default.join(dirs.source, '**/*.jade')], ['copy']);

      // Images
      gulp.watch([_path2.default.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')], ['imagemin']);

      // All other files
      gulp.watch([_path2.default.join(dirs.temporary, '**/*'), '!' + _path2.default.join(dirs.temporary, '**/*.{css,map,html,js}')]).on('change', browserSync.reload);
    }
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];