'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = _path2.default.join(taskTarget);
  var dataPath = _path2.default.join(dirs.source, dirs.data);

  // Jade template compile
  gulp.task('jade', function () {
    var siteData = {};
    if (_fs2.default.existsSync(dataPath)) {
      // Convert directory to JS Object
      siteData = (0, _foldero2.default)(dataPath, {
        recurse: true,
        whitelist: '(.*/)*.+\.(json|ya?ml)$',
        loader: function loadAsString(file) {
          var json = {};
          try {
            if (_path2.default.extname(file).match(/^.ya?ml$/)) {
              json = _jsYaml2.default.safeLoad(_fs2.default.readFileSync(file, 'utf8'));
            } else {
              json = JSON.parse(_fs2.default.readFileSync(file, 'utf8'));
            }
          } catch (e) {
            console.log('Error Parsing DATA file: ' + file);
            console.log('==== Details Below ====');
            console.log(e);
          }
          return json;
        }
      });
    }

    // Add --debug option to your gulp task to view
    // what data is being loaded into your templates
    if (args.debug) {
      console.log('==== DEBUG: site.data being injected to templates ====');
      console.log(siteData);
      console.log('\n==== DEBUG: package.json config being injected to templates ====');
      console.log(config);
    }

    return gulp.src([_path2.default.join(dirs.source, '**/*.jade'), '!' + _path2.default.join(dirs.source, '{**/\_*,**/\_*/**}')]).pipe(plugins.changed(dest)).pipe(plugins.plumber()).pipe(plugins.jade({
      jade: _jade2.default,
      pretty: true,
      locals: {
        config: config,
        debug: true,
        site: {
          data: siteData
        }
      }
    })).pipe(plugins.htmlmin({
      collapseBooleanAttributes: true,
      conservativeCollapse: true,
      removeCommentsFromCDATA: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    })).pipe(gulp.dest(dest)).on('end', browserSync.reload);
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _foldero = require('foldero');

var _foldero2 = _interopRequireDefault(_foldero);

var _jade = require('jade');

var _jade2 = _interopRequireDefault(_jade);

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];