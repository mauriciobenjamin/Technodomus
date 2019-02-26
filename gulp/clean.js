'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // Clean
  gulp.task('clean', _del2.default.bind(null, [_path2.default.join(dirs.temporary), _path2.default.join(dirs.destination)]));
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];