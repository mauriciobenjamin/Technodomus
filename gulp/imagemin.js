'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = _path2.default.join(taskTarget, dirs.images.replace(/^_/, ''));

  // Imagemin
  gulp.task('imagemin', function () {
    return gulp.src(_path2.default.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')).pipe(plugins.changed(dest)).pipe((0, _gulpIf2.default)(args.production, plugins.imagemin([plugins.imagemin.jpegtran({ progressive: true }), plugins.imagemin.svgo({ plugins: [{ removeViewBox: false }] })], { use: [(0, _imageminPngquant2.default)({ speed: 10 })] }))).pipe(gulp.dest(dest));
  });
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _imageminPngquant = require('imagemin-pngquant');

var _imageminPngquant2 = _interopRequireDefault(_imageminPngquant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];